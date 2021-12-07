import {CardActionArea, Card, AppBar, Toolbar, Typography, Box, TextField, Select, MenuItem, InputLabel, FormControl, Button } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



export default function Listaproyectos(){
    const tamanoh=300
    const listaproyectos=[
        {
            nombredelproyecto:'Prueba 1',
            nombredelcliente:'Cliente 1',
            personaacargo:'Admin 1',
            fechadeentrega:'2022-11-04',
            status:'Sin iniciar',
        },
        {
            nombredelproyecto:'Prueba 2',
            nombredelcliente:'Cliente 2',
            personaacargo:'Admin 2',
            fechadeentrega:'2023-11-04',
            status:'Desarrollando',
        },
        {
            nombredelproyecto:'Prueba 3',
            nombredelcliente:'Cliente 3',
            personaacargo:'Admin 3',
            fechadeentrega:'2024-11-04',
            status:'Completado',
        },
    ]

    const getProyectosDisplay =()=>{
        let tarjetas=[]
        listaproyectos.forEach((proyecto)=>{
            var aux='#C12D0D'
            if(proyecto.status==='Desarrollando'){
                aux='#D0AC07'
            }
            else if(proyecto.status==='Completado'){
                aux='#167205'
            }
            tarjetas.push(
                <Card sx={{ display:'inline-block',m:1, width:400, border:'2px solid purple'}}>
                    <CardActionArea
                            component="a"
                            //href="https://material-ui.com"
                            onClick={() => console.log("CardActionArea clicked in + " +proyecto.nombredelproyecto)}
                    >
                    <CardContent>
                    <Box sx={{bgcolor:aux}}>
                    <Typography color='white' variant='h6' textAlign='center'>{proyecto.nombredelproyecto}</Typography>
                    </Box>
                    <Box >
                    <Typography >Cliente: {proyecto.nombredelcliente}</Typography>
                    <Typography >Encargado: {proyecto.personaacargo}</Typography>
                    <Typography >Fecha de entrega: {proyecto.fechadeentrega}</Typography>
                    </Box>
                    </CardContent>
                    </CardActionArea>
                </Card>
            )
        })
        return tarjetas
    }


    return (
        <div>
            <AppBar color='secondary' position="relative">
            <Toolbar>
                <Typography variant="h5" color="white" noWrap>
                    Lista de Proyectos
                </Typography>
            </Toolbar>
            </AppBar>      
            <Box sx={{p:2}}>
                <TextField  color='secondary' label='Nombre del proyecto' sx={{width:tamanoh,height:50,m:1}}></TextField>
                <FormControl>
                <InputLabel>Status del proyecto </InputLabel>
                <Select defaultValue="" color='secondary' label='Status del proyecto' sx={{width:tamanoh ,m:1}}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Sin iniciar">Sin iniciar</MenuItem>
                    <MenuItem value="Desarrollando">Desarrollando</MenuItem>
                    <MenuItem value="Por revisar">Por revisar</MenuItem>
                    <MenuItem value="Completo">Por revisar</MenuItem>
                </Select>
                </FormControl>
   
            </Box>
            <Box  sx={{p:2}}>
            {getProyectosDisplay()}
            </Box>
                
         
        </div>
    )
}
import {CardActions,CardContent,CardActionArea, Card, AppBar, Toolbar, Typography, Box, TextField, Select, MenuItem, InputLabel, FormControl, Button, CardMedia, Grid } from "@mui/material";



export default function Listaproyectos(){
    const tamanoh=300
    const listaproyectos=[
        {
            nombredelproyecto:'Prueba 1',
            nombredelcliente:'Cliente 1',
            personaacargo:'Admin 1',
            fechadeentrega:'2022-11-04',
            status:'Detenido',
        },
        {
            nombredelproyecto:'Prueba 2',
            nombredelcliente:'Cliente 2',
            personaacargo:'Admin 2',
            fechadeentrega:'2023-11-04',
            status:'Activo',
        },
        {
            nombredelproyecto:'Prueba 3',
            nombredelcliente:'Cliente 3',
            personaacargo:'Admin 3',
            fechadeentrega:'2024-11-04',
            status:'Atrasado',
        },
    ]

    const getProyectosDisplay =()=>{
        let tarjetas=[]
        listaproyectos.forEach((proyecto)=>{
            var aux='rojo.png'
            if(proyecto.status==='Atrasado'){
                aux='amarillo.png'
            }
            else if(proyecto.status==='Activo'){
                aux='verde.png'
            }
            tarjetas.push(
                <Card sx={{ display:'inline-block',m:1, width:400, border:'1p #0CA8C7'}}>
                    <CardActionArea
                            component="a"
                            href={`/proyecto/${proyecto.nombredelproyecto}`} 
                            onClick={() => console.log("CardActionArea clicked in + " +proyecto.nombredelproyecto)}
                    >
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                    <CardContent >
                    <Grid container>
                        <Grid item xs={10}>
                        <Typography   variant='h6' >{proyecto.nombredelproyecto}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                    <CardMedia
                        component='img'
                        sx={{display:'inline-block',width:40}}
                        src={aux}
                        alt='prueba'
                    />
                    </Grid>
                    </Grid>
                    <Typography component="div" >Cliente: {proyecto.nombredelcliente}</Typography>
                    <Typography component="div">Encargado: {proyecto.personaacargo}</Typography>
                    <Typography component="div">Fecha de entrega: {proyecto.fechadeentrega}</Typography>

                    </CardContent>
                    </Box>
                    
                    
                    </CardActionArea>
                </Card>
            )
        })
        return tarjetas
    }


    return (
        <div>
            <AppBar style={{background:'#0CA8C7' }} position="relative">
            <Toolbar>
                <Typography variant="h4" color="black" noWrap>
                    Proyectos LCM
                </Typography>
            </Toolbar>
            </AppBar>      
            <Box sx={{p:2}}>
                <TextField  style={{borderColor: '#0DD5FD'}} label='Nombre del proyecto' sx={{width:tamanoh,height:50,m:1}}></TextField>
                <FormControl>
                <InputLabel>Status del proyecto </InputLabel>
                <Select defaultValue="" style={{border: '#0CA8C7'}} label='Status del proyecto' sx={{width:tamanoh ,m:1}}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="Activo">Activo</MenuItem>
                    <MenuItem value="Atrasado">Atrasado</MenuItem>
                    <MenuItem value="Detenido">Detenido</MenuItem>
                </Select>
                </FormControl>  
            </Box>
            <Box  sx={{p:2}}>
            {getProyectosDisplay()}
            </Box>
        </div>
    )
}
import {CardActions,CardContent,CardActionArea, Card, AppBar, Toolbar, Typography, Box, TextField, Select, MenuItem, InputLabel, FormControl, Button, CardMedia, Grid } from "@mui/material";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';

//Ejemplo de circular progress 
function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress circle='red' style={{'color':'#F49009'}} thickness={10} size={150} variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };

//Termina el ejemplo


export default function proyecto(){
    //Para circular progress
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);


    return(
        <div>
            <AppBar style={{background:'#0CA8C7' }} position="relative">
            <Toolbar>
                <Typography variant="h4" color="black" noWrap>
                    Proyecto [Nombre del proyecto]
                </Typography>
            </Toolbar>
            </AppBar>      
            <Box sx={{p:2}}>  
                <Typography> Fase: [FASE]</Typography>
            </Box>
            <Box sx={{p:2}}>
                <Grid container>
                    <Grid item xs={8}>
                    <Typography> Fecha de entrega: [FECHA] </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography>Ultima revision. [Fecha]</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{p:2}}>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography>Vision del proyecto</Typography>
                        <Typography> [Objetivos del proyecto]</Typography>
                        <Grid container>
                            <Grid item xs={5.5}>
                                <Typography textAlign='center'>En desarrollo</Typography>
                                <Box bgcolor='#099CF4'>
                                    Prueba de la caja 1
                                </Box>
                            </Grid>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={5.5}>
                            <Typography textAlign='center'>Proximo desarrollo</Typography>    
                                <Box bgcolor='#EFE396' >
                                    Prueba de la caja 2
                                </Box>
                            </Grid>
                        </Grid>
                        </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3}>
                        <CircularProgressWithLabel value={progress} />
                        <Typography>[STATUS DEL PROYECTO</Typography>
                        <Typography>Lista de pasos:</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
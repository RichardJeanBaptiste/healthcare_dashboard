import { Box, Typography } from "@mui/material";

export default function Brain_Map() {
    const Styles = {
        root: {
            width: '60vw',
            height: '52vh',
            position: 'absolute',
            top: '14%',
            left: '2%',
            backgroundColor: 'black',
            borderRadius: '30px'
        },
        map_container : {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        title: {
            color: 'white',
            position: 'absolute',
            top: '5%',
            left: '3%'
        },
        map_mini: {
            display:'flex',
            flexDirection: 'column',
            width: '18%',
            height: '77%',
            position: 'absolute',
            top: '16%',
            left: '2.5%',
            color: 'white'
        },
        map_mini_image: {
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '20px',
            width: '68%',
            height: '25%',
            paddingBottom: '2%',
            marginLeft: '3%',
            marginTop: '9%'
        },
        map_large : {
            width: '66%',
            height: '69%',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '20px',
            color: 'white',
            position: 'absolute',
            top: '18%',
            left: '18%'
        },
        heat_meter: {
            width: '11.5%',
            height: '69%',
            color: 'white',
            position: 'absolute',
            top: '18%',
            left: '87%',
            display: 'flex',
            flexDirection: 'row'
        },
        heat_meter_readings: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            gap: '35%'
        },
        heat_meter_colors: {
            width: '10%',
            height: '98%',
            color:'white',
            borderStyle: 'solid',
            borderRadius: '20px',
            borderWidth: '.5px',
            marginLeft: '16%',
            background: 'linear-gradient(to bottom, red, orange, yellow)',
        }

    }

    return (
        <Box sx={Styles.root}>
            <Box sx={Styles.map_container}>
                <Typography component='p' sx={Styles.title}>Brain Mapping</Typography>
                <Box sx={Styles.map_mini}>
                    <Box sx={Styles.map_mini_image}></Box>
                    <Box sx={Styles.map_mini_image}></Box>
                    <Box sx={Styles.map_mini_image}></Box>
                </Box>

                <Box sx={Styles.map_large}>
                    
                </Box>

                <Box sx={Styles.heat_meter}>
                    <Box sx={Styles.heat_meter_readings}>
                        <Typography component='p'>0.50 - </Typography>
                        <Typography component='p'>0.25 - </Typography>
                        <Typography component='p'>0.1 - </Typography>
                    </Box>
                    <Box sx={Styles.heat_meter_colors}></Box>
                </Box>

            </Box>
        </Box>
    )
}

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
            width: '65%',
            height: '70%',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '20px',
            color: 'white',
            position: 'absolute',
            top: '20%',
            left: '22%'
        },
        heat_meter: {
            width: '1.5%',
            height: '70%',
            borderStyle: 'solid',
            borderRadius: '20px',
            color: 'white',
            position: 'absolute',
            top: '19%',
            left: '95%'
        },
        heat_meter_readings: {
            display: 'flex',
            flexDirection: 'column',
            width: 'inherit',
            height: '100%',
            gap: '40px',
            marginLeft: '-2%'
        }
    }

    return (
        <Box sx={Styles.root}>
            <Box sx={Styles.map_container}>
                <Typography component='p' sx={Styles.title}>Brain Mapping</Typography>
                <Box sx={Styles.map_mini}>
                    <Box sx={Styles.map_mini_image}>a</Box>
                    <Box sx={Styles.map_mini_image}>b</Box>
                    <Box sx={Styles.map_mini_image}>c</Box>
                </Box>

                <Box sx={Styles.map_large}>
                    
                </Box>

                <Box>
                    
                </Box>

                <Box sx={Styles.heat_meter}>
                    
                </Box>

            </Box>
        </Box>
    )
}

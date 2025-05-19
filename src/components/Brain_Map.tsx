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
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '20px',
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
            marginLeft: '13%',
            marginTop: '9%'
        },
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
            </Box>
        </Box>
    )
}

/**
 * <Stack direction="column" spacing={3} sx={Styles.map_mini}>
                    <Box sx={Styles.map_mini_image}>a</Box>
                    <Box sx={Styles.map_mini_image}>b</Box>
                    <Box sx={Styles.map_mini_image}>c</Box>
                </Stack>
 */
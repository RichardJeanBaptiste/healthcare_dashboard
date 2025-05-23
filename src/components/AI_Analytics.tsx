import { Box , Typography } from "@mui/material";


export default function AI_Analytics() {
    
    const Styles = {
        root: {
            width: '35%',
            height: '52%',
            position: 'absolute',
            top : '14%',
            right: '2%',
            backgroundColor: 'black',
            borderRadius: '20px'
        },
        title: {
            position: 'absolute',
            top: '2%',
            left: '5%',
            color: 'white'
        },
        date_picker: {
            position: 'absolute',
            top: '2%',
            right: '5%',
            color:'white'
        },
        neuro_risk: {
            position: 'absolute',
            top: '12%',
            left: '4%',
            width: '45%',
            height: '45%',
            borderRadius: '20px',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: 'white',
            '& h2': {
                marginTop:'10%',
                marginLeft: '2%',
                fontSize: '18px',
                fontWeight: 'bold'
            },
            '& p': {
                marginLeft: '2%',
                marginTop: '2%',
                fontWeight: 'light'
            }     
        },
        d_markers: {
            position: 'absolute',
            top: '12%',
            right: '3%',
            width: '46%',
            height: '45%',
            borderRadius: '20px',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: 'white',
            '& h2': {
                marginTop:'10%',
                marginLeft: '2%',
                fontSize: '18px',
                fontWeight: 'bold'
            },
            '& p': {
                marginLeft: '2%',
                marginTop: '2%',
                fontWeight: 'light'
            }  
        }
    }
    return (
        <Box sx={Styles.root}>
            <Box sx={{ width: '100%', height: '100%', position: 'relative'}}>
                <Typography component='p' sx={Styles.title}>AI Analytics Insights</Typography>
                
                {/** -------------------- */}
                <Box sx={Styles.neuro_risk}>
                    <Typography component='h2' variant="h6" >Neurodegenerative Risk</Typography>
                    <Typography component='p' variant="body2">No signs of cognitive decline or neuro disease</Typography>
                    <Box>
                        <p>Num</p>
                        <p>Meter Reading</p>
                    </Box>
                </Box>
                {/** -------------------- */}
                <Box sx={Styles.d_markers}>
                    <Typography component='h2' variant="h6">Chronic Disease Markers</Typography>
                    <Typography component='p' variant="body2">Inflammation elevated - further monitoring advised</Typography>
                    <Box>
                        <p>Num</p>
                        <p>Meter Reading</p>
                    </Box>
                </Box>
                {/** -------------------- */}
                <Box>
                    <p>Meter</p>
                    <p>Num</p>
                </Box>
            </Box>
        </Box>
    )
}

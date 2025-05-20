import { Box , Typography} from "@mui/material";

export default function Next_Steps() {
    
    const Styles = {
        root: {
            width: '35%',
            height: '33%',
            position: 'absolute',
            top: '67%',
            right: '2%',
            borderStyle: 'solid',
            borderRadius: '20px',
            borderColor: 'black',
            borderWidth: '1px'
        }
    }

    const Unit = () => {
        return (
            <Box>
                
            </Box>
        )
    }
    return (
        <Box sx={Styles.root}>
            <Typography variant="body2">Suggested Next Steps</Typography>
            <Box>
                <Typography variant="body2">Create Plan +</Typography>
            </Box>
            
        </Box>
    )
}
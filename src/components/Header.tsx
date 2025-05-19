import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ScatterPlotOutlinedIcon from '@mui/icons-material/ScatterPlotOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Avatar from '@mui/material/Avatar';
import A_IMG from '../assets/headshot_1.jpg';
import { blue } from '@mui/material/colors';

export default function Header() {
    const Styles = {
        root: {
            width: '100vw',
            height: '10vh',
            position: 'relative',
        },
        logo_container: {
            position: 'absolute',
            top: '15%',
            left: '2%'
        },
        tab_container: {
            position: 'absolute',
            top: '7%',
            left: '25%',
            width: '46%',
            height: '7vh',
            borderStyle: 'solid',
            borderRadius: '40px',
            backgroundColor: 'rgba(211, 211, 211, 0.2)'
        },
        tabs: {
            display:'flex',
            flexDirection: 'row',
            gap: '40px',
            marginLeft:'7%',
            marginTop: '1%',
            '& Button': {
                borderRadius: '15px',
                '&:hover': {
                    backgroundColor: 'black',
                    color: 'white'
                }
            }
        },
        alert: {
            position:'absolute',
            top: '11%',
            right: '9%'
        },
        profile: {
            position:'absolute',
            top: '11%',
            right: '5%'
        }
    }
    return (
        <Box sx={Styles.root}>
            <Stack spacing={2} direction="row" sx={Styles.logo_container}>
                <Avatar sx ={{ bgcolor: blue[400]}}>
                    <PsychologyOutlinedIcon/>
                </Avatar>
                <Typography component="p" sx={{ marginTop: '5%'}}>BioSync</Typography>
            </Stack>
            
            <Box sx={Styles.tab_container}>
                <Box sx={Styles.tabs}>
                    <Button variant="text" sx={{ borderRadius: '15px', color: 'black'}} startIcon={<HomeOutlinedIcon sx={{color:'inherit'}}/>}>Home</Button>
                    <Button variant="text" sx={{ borderRadius: '15px', color: 'black'}} startIcon={<LibraryBooksOutlinedIcon sx={{color:'inherit'}}/>}>Documents</Button>
                    <Button variant="text" sx={{ borderRadius: '15px', color: 'black'}} startIcon={<ScatterPlotOutlinedIcon sx={{color:'inherit'}}/>}>Database</Button>
                    <Button variant="text" sx={{ borderRadius: '15px', color: 'black'}} startIcon={<AnalyticsOutlinedIcon sx={{color:'inherit'}}/>}>Analytics</Button>
                </Box>
            </Box>
            <IconButton sx={Styles.alert}>
                <NotificationsOutlinedIcon/>
            </IconButton>
            <Box sx={Styles.profile}>
                <Avatar alt="Remy Sharp" src={A_IMG} sx={{ width: 42, height: 42 }}/>
            </Box>
        </Box>
    );
}




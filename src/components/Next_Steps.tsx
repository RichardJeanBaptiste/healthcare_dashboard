import { Box , Typography, Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonIcon from '@mui/icons-material/Person';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import type { ReactNode } from "react";


export default function Next_Steps() {
    
    const Styles = {
        root: {
            width: '35%',
            height: '50%',
            position: 'absolute',
            top: '67%',
            right: '2%',
            borderStyle: 'solid',
            borderRadius: '20px',
            borderColor: 'black',
            borderWidth: '1px',
            overflowY: 'scroll',
        },
        title: {
            position: 'absolute',
            top: '2%',
            left: '2%'
        },
        plan_btn: {
            position: 'absolute',
            top:'2%',
            right: '2%',
            color: 'black',
            borderRadius: '20px',
            borderColor: 'lightgrey'
        },
        unit_stack: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '20%',
            display: 'flex',
            flexDirection: 'column'
            
        },
        unit: {
            marginTop: '4%',
            width: '100%',
            height: '25%',
            // borderStyle: 'solid',
            // borderWidth: '.5px',
            // borderColor: 'black',
            position: 'relative',
            '& ul': {
                position: 'absolute',
                top: '-15%',
                right: '7%',
                width: '40%'
            },
        },
        unit_title: {
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '4%',
            width: '53%',
            gap: '20px'
        },
        unit_icon: {

        },
        date_background: {
            width: '30%',
            height: '30%',
            borderStyle:'solid',
            borderColor: 'lightgrey',
            borderWidth: '.5px',
            borderRadius: '20px'
        }

    }

    type UnitProps = {
        title: string;
        date: string;
        list: string[]; 
        icon: ReactNode;
    };


    const Unit = ({title,list,icon, date} : UnitProps) => {
        return (
            <Box sx={Styles.unit}>
                
                <Box sx={Styles.unit_title}>
                    {icon}
                    <Typography variant="body2" >{title}</Typography>
                    <Box sx={Styles.date_background}>
                        <Typography component="p" variant="subtitle2" align="center">{date}</Typography>
                    </Box>
                </Box>
                
                <ul>
                    {list.map((x) => {
                        return <li style={{ color: 'lightgrey'}}><Typography component="p" variant="subtitle2" sx={{color: 'black' }}>{x}</Typography></li>
                    })}
                </ul>

                <br/>
                <br/>
            </Box>
        )
    }
    return (
        <Box sx={Styles.root}>
            <Typography variant="body1" sx={Styles.title}>Suggested Next Steps</Typography>
            <Button variant="outlined" sx={Styles.plan_btn} size="small" endIcon={<AddIcon/>}>Create Plan</Button>
            <Box sx={Styles.unit_stack}>
                <Unit title="Diagnostic" date="May-June" icon={<AssessmentIcon/>}  list={["Repeat MRI in 3-6 months","Cognitive test recommended","Confirm markers via blood test"]}/>
                <Unit title="Specialist" date="July" icon={<PersonIcon/>}  list={["Consult a neurologist(early risk detected)","Optional:sleep specialist review","Refer to mental health professional"]}/>
                <Unit title="Lifestyle" date="Permanent" icon={<SelfImprovementIcon/>}  list={["Start brain-healthy diet","Try cognitive training apps","Increase aerobic activity"]}/>
                <Unit title="Monitoring" date="" icon={<MonitorHeartIcon/>}  list={["Set re-scan reminder","Enable weekly memory checks","Activate real-time trend tracking for key biomarkers"]}/>
            </Box>    
        </Box>
    )
}
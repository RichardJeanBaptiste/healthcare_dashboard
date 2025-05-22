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
                top: '2%',
                right: '35%'
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
                    <Typography component="p" variant="subtitle2">{date}</Typography>
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
                <Unit title="Abcd" date="April" icon={<AssessmentIcon/>}  list={["a","b","c"]}/>
                <Unit title="Defg" date="May" icon={<PersonIcon/>}  list={["d","e","f"]}/>
                <Unit title="hijk" date="June" icon={<SelfImprovementIcon/>}  list={["h","i","j"]}/>
                <Unit title="lmno" date="July" icon={<MonitorHeartIcon/>}  list={["l","m","n"]}/>
            </Box>    
        </Box>
    )
}
import { useState, type ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface IndexProps {
  title : string,
  //state: string,
  num : string,  
  children?: ReactNode; // 'children' can be optional, hence the '?'
}


export default function Index({children , title, num} : IndexProps) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [a_state, setAState] = useState("Normal");

    const Styles = {
        root: {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
        title: {
            position: 'absolute',
            top: '10%',
            left: '2%'
        },
        status: {
            position: 'absolute',
            top:'10%',
            right: '4%',
            width: '20%',
            gap: '10px',
            display: 'flex',
            flexDirection: 'row'
        },
        num: {
            position: 'absolute',
            top: '30%',
            left: '2%'   
        }
    }
    return (
        <Box sx={Styles.root}>
            <Typography component="p" variant="body2" sx={Styles.title}>{title}</Typography>
            <Box sx={Styles.status}>
                <Box sx={{ width: '20px', height: '20px', backgroundColor: a_state == "Normal" ? "green" : "red"}}></Box>
                <Typography component="p" variant="body2">{a_state}</Typography>
            </Box>

            <Typography component="p" variant="body2" sx={Styles.num}>{num}</Typography>
            {children}
        </Box>
    )
}
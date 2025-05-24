import { type ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface IndexProps {
  title : string,
  status: string,
  num : string,  
  children?: ReactNode; // 'children' can be optional, hence the '?'
}


export default function Index({children , title, num, status} : IndexProps) {

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
        indicator: {
            width: '10px',
            height: '10px',
            borderRadius: '20px',
            backgroundColor: status == "Normal" ? "green" : "red"
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
                <Box sx={Styles.indicator}></Box>
                <Typography component="p" variant="body2">{status}</Typography>
            </Box>

            <Typography component="p" variant="body2" sx={Styles.num}>{num}</Typography>
            {children}
        </Box>
    )
}
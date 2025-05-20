import { Box } from "@mui/material";

export default function Index() {

    const Styles = {
        root: {
            width: '100%',
            height: '100%'
        }
    }
    return (
        <Box sx={Styles.root}>
            <p>Title</p>
            <p>Num</p>
            <p>state</p>
            <p>data display</p>
        </Box>
    )
}
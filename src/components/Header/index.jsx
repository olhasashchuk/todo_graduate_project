import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import routers from "../../helpers/routers.js";
import ContentLink from "../ContentLink/index.jsx";

export default function Header() {
    return (
        <AppBar position="static" sx={{marginBottom: '30px'}}>
            <Toolbar
                variant="dense"
                sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                    }}
                >
                    TODO
                </Typography>
                <Box sx={{display: 'flex', gap: '20px'}} >
                    <ContentLink to={routers.main}>
                        HOME
                    </ContentLink>
                    <ContentLink to={routers.info}>
                        INFO
                    </ContentLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
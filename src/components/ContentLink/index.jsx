import {NavLink} from 'react-router-dom';
import { Typography } from '@mui/material';
function ContentLink(props) {
    const {to, children} = props;
    return (
        <NavLink to={to} style={{textDecoration: 'none'}}>
            <Typography variant="h6" color="white">{children}</Typography>
        </NavLink>
    )
}

export default ContentLink
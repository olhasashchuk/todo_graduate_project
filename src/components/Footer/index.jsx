import {useDispatch, useSelector} from "react-redux";
import selectors from "../../engine/todo/redux/selectors.js"
import {clearDataAsyncAction} from "../../engine/todo/saga/asynkActions.js";
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import ContentFormSearch from "../ContentFormSearch/index.jsx";

export default function Footer() {
    const items = useSelector(selectors.items)
    const dispatch = useDispatch();

    const onClear = () => {
        dispatch(
            clearDataAsyncAction()
        )
    }

    return(
        <Box
            sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
            p={'20px'}

        >
            <Chip label={`Count: ${items.length}`} />
            <Button variant="contained" onClick={onClear} startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <ContentFormSearch/>
        </Box>
    )
}



import { useDispatch } from "react-redux";
import {checkedDataAsyncAction} from "../../engine/todo/saga/asynkActions.js";
import ListItem from '@mui/material/ListItem';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

export function ContentListItem(props) {
    const dispatch = useDispatch();
    const { id, text, isChecked } = props;
    const handleCheckedItem = () => {
        dispatch(checkedDataAsyncAction({ id, isChecked: !isChecked }))
    }

    return (
        <>
            <ListItem>
                <ListItemButton role={undefined} dense component='label'>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            disableRipple
                            inputProps={{ 'aria-labelledby': text }}
                            onChange={handleCheckedItem}
                            checked={isChecked}
                        />
                    </ListItemIcon>
                    {isChecked ? (
                    <ListItemText id={id} sx={{ textDecoration: 'line-through' }}>{text}</ListItemText>
                    ) : (
                    <ListItemText id={id} sx={{ textDecoration: 'initial' }}>{text}</ListItemText>
                    )}
                </ListItemButton>
            </ListItem>
        </>
    )
}
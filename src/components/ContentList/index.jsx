import {useDispatch, useSelector} from "react-redux";
import selectors from "../../engine/todo/redux/selectors.js";
import {useEffect} from "react";
import {getDataAsyncAction} from "../../engine/todo/saga/asynkActions.js";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import {ContentListItem} from "../ContentListItem/index.jsx";

export default function ContentList() {
    const items = useSelector(selectors.items);
    const filterItems = useSelector(selectors.filteredItems);
    const isFiltering = useSelector(selectors.isFiltering);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataAsyncAction())
    }, [])
    return (
        <Box sx={{ marginTop: '20px'  }}
        >
            <Typography variant="h5" component="h2">
                TODOS
            </Typography>
            <List sx={{ bgcolor: 'background.paper'}}>
                {isFiltering ? (
                    filterItems.map((item) => (
                        <ContentListItem
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            isChecked={item.isChecked}
                            disablePadding
                        />
                    ))
                ) : (
                    items.map((item) => (
                        <ContentListItem
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            isChecked={item.isChecked}
                            disablePadding
                        />
                    ))
                )}
            </List>
        </Box>
    );
}
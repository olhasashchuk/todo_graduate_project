import {useDispatch} from "react-redux";
import {clearFilterItemAsyncAction, getFilterItemAsyncAction} from "../../engine/todo/saga/asynkActions.js";
import {Field, Form} from 'react-final-form';
import Container from "../ContentForm/styles.jsx";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search.js";
import InputSearchText from "../ContentInputSearch/index.jsx";

function EnterTextSearch(props) {
    const { handleSubmit} = props;
    return (
        <>
            <Container component='form'
                       onSubmit={handleSubmit}
                       sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}>
                <Field
                    component={InputSearchText}
                    name = "text_search"
                    type="text"
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'Search' }}
                    sx={{ ml: 1, flex: 1 }}
                />

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton sx={{ p: '10px' }} aria-label="search" type="submit">
                    <SearchIcon />
                </IconButton>
            </Container>
        </>
    );
}


export function ContentFormSearch() {
    const dispatch = useDispatch();
    const handleFilterItem = (values)=> {
        if (values.text_search) {
            dispatch(getFilterItemAsyncAction(values.text_search));
        } else {
            dispatch(clearFilterItemAsyncAction());
        }
    }
    return (
        <Form
            onSubmit={handleFilterItem}
            render={EnterTextSearch}
        />
    );
}

export default ContentFormSearch
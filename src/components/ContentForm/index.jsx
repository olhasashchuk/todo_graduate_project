import {useDispatch} from "react-redux";
import {setDataAsyncAction} from "../../engine/todo/saga/asynkActions.js";
import {Field, Form} from 'react-final-form';
import Typography from '@mui/material/Typography';
import Container from "./styles.jsx";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions.js";
import InputText from "../ContentInput/index.jsx";

function EnterText(props) {
    const { handleSubmit, valid} = props;
    return (
        <>
            <Container component='form' onSubmit={handleSubmit}>
                <Field
                    component={InputText}
                    name = "text_input"
                    type="text"
                    placeholder="Input text"
                    inputProps={{ 'aria-label': 'Input text' }}
                    sx={{ ml: 1, flex: 1 }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }}  aria-label="directions" type="submit" disabled={!valid}>
                    <DirectionsIcon />
                </IconButton>
            </Container>
        </>
    );
}

const validateText = (values) => {
    const errors = {};
    if (!values.text_input || values.text_input.length<5 ) {
        errors.text_input="Minimum 5 letters required"
    }
    return errors
}

export function ContentForm() {
    const dispatch = useDispatch();
    const onSubmit = (event)=> {
        dispatch(setDataAsyncAction(event)
        )
    }
    return (
        <>
            <Typography variant="h4" component="h2">
                TODO
            </Typography>
            <Form
                validate={validateText}
                onSubmit={onSubmit}
                render={EnterText}
            />

        </>

    );
}

export default ContentForm

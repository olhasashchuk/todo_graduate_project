import InputBase from "@mui/material/InputBase";
export function InputSearchText(props) {
    const { input } = props;
    return (
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            value={input.value}
            onChange={input.onChange}
            {...input}
        />
    );
}
export default InputSearchText;
import {Provider} from "react-redux";
import {store} from "../shared/store.js"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Header from "../components/Header/index.jsx";
import Index from "../pages/Index.jsx";
import Info from "../pages/Info.jsx";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer/index.jsx";

const muiTheme = createTheme ({
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white'
                }
            }
        }
    }
})
export function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={muiTheme}>
                <BrowserRouter>
                    <Header/>
                    <Wrapper>
                        <Routes>
                            <Route path="/" element={<Index/>}/>
                            <Route path="/info" element={<Info/>}/>
                        </Routes>
                    </Wrapper>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>

    )
}

export default App

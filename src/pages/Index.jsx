import ContentForm from "../components/ContentForm/index.jsx";
import ContentList from "../components/ContentList/index.jsx";
import Footer from "../components/Footer/index.jsx";

export default function Index() {

    return (
        <>
            <div>
                <main id="main">
                    <ContentForm></ContentForm>
                    <ContentList></ContentList>
                    <Footer/>
                </main>
            </div>
        </>
    )
}
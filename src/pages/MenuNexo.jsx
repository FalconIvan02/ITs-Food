import LogoAndText from "../components/LogoAndText";
import CardNexo from "../components/CardNexo";
import "../assets/styles/cardNexoContainer.css";
import MenuFooter from "../components/MenuFooter";
function MenuNexo() {
    return (
        <main>
            <LogoAndText></LogoAndText>
            <div className="cardNexoContainer">
                <CardNexo></CardNexo>
                <CardNexo></CardNexo>
                <CardNexo></CardNexo>
                <CardNexo></CardNexo>
            </div>
            <MenuFooter></MenuFooter>
        </main>
    );
}

export default MenuNexo;

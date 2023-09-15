import LogoAndText from "../components/LogoAndText";
import CardNexo from "../components/CardNexo";
import "../assets/styles/menuNexoContainer.css";
function MenuNexo() {
    return (
        <main>
            <LogoAndText></LogoAndText>
            <div className="cartNexoContainer">
                <CardNexo></CardNexo>
                <CardNexo></CardNexo>
                <CardNexo></CardNexo>
                <CardNexo></CardNexo>
            </div>
        </main>
    );
}

export default MenuNexo;

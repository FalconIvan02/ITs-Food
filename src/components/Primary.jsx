import "../assets/styles/Primary.css";
import { Link } from "react-router-dom";
function Primary() {
    return (
        <>
            <main>
                <ul className="list-container">
                    <li>
                        <Link to="/Menu">Menú</Link>
                    </li>
                    <li>
                        <a href="">Locales</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </main>
        </>
    );
}
export default Primary;

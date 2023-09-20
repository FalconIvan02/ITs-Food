import Menu from "./pages/Menu";
import Nexo from "./pages/Nexo";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuCoffee from "./pages/MenuCoffee";
import MenuCake from "./pages/MenuCake";
import MenuLunch from "./pages/MenuLunch";
import MenuDrink from "./pages/MenuDrink";
import { UserContextProvider } from "../userContext";

function App() {
    return (
        <>
            <BrowserRouter>
                <UserContextProvider>
                    <Routes>
                        <Route path="/" element={<Nexo />}></Route>
                        <Route path="/Menu" element={<Menu />}></Route>
                        <Route path="/MenuCoffee" element={<MenuCoffee />}></Route>
                        <Route path="/MenuCake" element={<MenuCake />}></Route>
                        <Route path="/MenuLunch" element={<MenuLunch />}></Route>
                        <Route path="/MenuDrink" element={<MenuDrink />}></Route>
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </UserContextProvider>
            </BrowserRouter>
        </>
    );
}
export default App;

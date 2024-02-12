import { Routes, Route } from "react-router-dom";
import ElectricPrice from "./ElectricPrice.";
import About from "./About";
import Navigation from "./Navigation";
import AboutMeAndGamma from "./About/AboutMeAndGamma";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<ElectricPrice />}>
                    <Route path="lowprice/:hours" element={<ElectricPrice />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/about/me" element={<AboutMeAndGamma info="me" />} />
                <Route path="/about/gamma" element={<AboutMeAndGamma info="gamma" />} />


                <Route path="*" element={<h1>404</h1>} />
            </Routes>;
        </>
    );
};

export default App;
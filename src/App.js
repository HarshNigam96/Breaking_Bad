import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Details from "./Screens/Details";
import Favourites from "./Screens/Favourites";
import Home from "./Screens/Home";
function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? (
        <NavBar />
      ) : location.pathname === "/favourites" ? (
        <NavBar defaultNav={false} />
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import TotalHeader from "./components/header/TotalHeader";
TotalHeader
useTheme;

function App() {
  // ==============================================================================
  // Links do Header
  // ==============================================================================
  const headerLinks = [
    {
      l: "/",
      t: "home",
    },
    {
      l: "/about",
      t: "sobre",
    },
  ];


  // ==============================================================================
  // VAZIO
  // ==============================================================================


  return (
    <>
      <TotalHeader headerLinks={headerLinks} />
      <Outlet />
    </>
  );
}

export default App;

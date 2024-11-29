import { Outlet } from "react-router-dom";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import TotalHeader from "./components/header/TotalHeader";
TotalHeader;
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
    <div className="mon">
      <TotalHeader headerLinks={headerLinks} />

      <Outlet />
    </div>
  );
}

export default App;

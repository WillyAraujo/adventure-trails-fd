import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom";
import {TrilhasContextProvider} from "./context/TrilhasContext"

function App() {

  return (
    <TrilhasContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </TrilhasContextProvider>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Header from "./Pages/Shared/Header/Header";
import RequiredAuth from "./Pages/Login/RequiredAuth/RequiredAuth";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout"
          element={
            <RequiredAuth>
              <Checkout></Checkout>
            </RequiredAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

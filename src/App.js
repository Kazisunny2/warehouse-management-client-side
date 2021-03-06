import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Header from "./Pages/Shared/Header/Header";
import RequiredAuth from "./Pages/Login/RequiredAuth/RequiredAuth";
import AddItem from "./Pages/AddItem/AddItem";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import UpdateItem from "./Pages/UpdateItem/UpdateItem";
import MyItem from "./Pages/MyItem/MyItem";
import About from "./Pages/About/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/myitem"
          element={
            <RequiredAuth>
              <MyItem></MyItem>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequiredAuth>
              <AddItem></AddItem>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/update/:id"
          element={
            <RequiredAuth>
              <UpdateItem></UpdateItem>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/manageinventories"
          element={
            <RequiredAuth>
              <ManageInventories></ManageInventories>
            </RequiredAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import SideBar from "./component/sidebar/SideBar";
import Topbar from "./component/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import UserList from "./pages/userlist/UserList";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user" element={<UserList />}/>
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;

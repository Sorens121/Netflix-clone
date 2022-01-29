import SideBar from "./component/sidebar/SideBar";
import Topbar from "./component/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User"
import NewUser from "./pages/addUser/NewUser";
import ViewAll from "./pages/viewall/ViewAll";
import NewItem from "./pages/newItem/NewItem";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user" element={<UserList />}/>
          <Route path="/user/:userId" element={<User />}/>
          <Route path="/newuser" element={<NewUser />}/>
          <Route path="/showall" element={<ViewAll />} />
          <Route path="/createnewItem" element={<NewItem />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;

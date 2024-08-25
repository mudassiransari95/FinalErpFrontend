import "./navbar.scss";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const {collapsed,setCollapsed} = props;
const navigate=useNavigate()
  return (
    <div className="navbar">
      <div className="wrapper">
      <div className="search">
      <ListOutlinedIcon className="icon" onClick={() => setCollapsed(!collapsed)} />

        </div>
      
        <div className="items">

<div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item relative">
            <img
              src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
              alt=""
              className="avatar"
            />
            <button onClick={()=>navigate('/')} className="absolute ml-10 ">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

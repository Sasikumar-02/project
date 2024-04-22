import React from "react";
import { Layout as MainLayout } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { createBrowserHistory } from "history";
// import AuthContext from "../../pages/auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";
// import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import ChatBot from "../../assets/Chatbot.svg";

const { Header } = MainLayout;

function DefaultHeader() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  //const name = username?.match(/^(.+)@/)[1];
  const handleLogout = () => {
    // localStorage.setItem("loggedIn", false);
    navigate("/");
    window.location.reload();
  };
  return (
    <Header
      className="header-antd"
      style={{
        paddingLeft: "90px",
        paddingRight: "20px",
        background: "#F5F5F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: '65px',
        zIndex: 99,
        borderBottom: "1.5px solid #A9ABAC",
      }}
    >
      <div className="d-flex">
        <Link to="/">
          <img
            src="/Customer360.svg"
            className="img-fluid  pe-3"
            alt=""
            style={{ height: "30px" }}
          />
        </Link>
       
        <Link to="/cpp/ChatBot" className="d-flex align-items-center">
          <img
            src={ChatBot}
            className="img-fluid"
            alt=""
            style={{ height: "30px" }}
          />
          <h6 className="text-coral mt-2">Chat Bot</h6>
        </Link>
      </div>
      <div className="d-flex align-items-center gap-2">
        <img src="/assets/img/bell.svg" alt="" />

        <div className="d-flex">
          <div>
            <img src="/assets/img/user.png" className="user-icon" alt="" />
          </div>
          <div className="d-flex flex-column">
            <p className="text-coral ms-2">Demo User</p>
            <p className="text-muted ms-2">demousr@customer360.ai</p>
          </div>
        </div>
        <div className="d-flex flex-column">
          <LogoutOutlined
            onClick={handleLogout}
            style={{ fontSize: "18px", color: "#1E4397" }}
          />
        </div>
      </div>
    </Header>
  );
}

export default DefaultHeader;

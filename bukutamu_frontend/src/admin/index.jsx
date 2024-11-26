import React from "react";
import { Outlet } from "react-router-dom";
import Icon from "../assets/img/logobt.svg";

const Index = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  if (localStorage.getItem("token") != null) {
    return (
      <div className="bg">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-transparent"
          style={{
            backgroundColor: "rgba(1, 1, 1, 0.8)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            zIndex: "9999",
          }}
        >
          <div className="container-fluid">
            <a
              href="/admin/home"
              className="navbar-brand"
              style={{ fontSize: "1.7rem" }}
            >
              <img
                src={Icon}
                href="/admin/home"
                alt="Logo"
                style={{
                  width: "50px",
                  height: "50px",
                  marginRight: "5px",
                  marginTop: "-7px",
                }}
              />
              Buku <span>Tamu</span>
            </a>
            <button
              type="button"
              className=" navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className=" navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  href="/admin/home"
                  className="nav-link active"
                  style={{ fontSize: "20px" }}
                >
                  Home
                </a>
                <a
                  href="/admin/tamu"
                  className="nav-link active"
                  style={{ fontSize: "20px" }}
                >
                  Tamu
                </a>
                <a
                  href="/admin/user"
                  className="nav-link active"
                  style={{ fontSize: "20px" }}
                >
                  User
                </a>
              </div>
            </div>
            <span className="d-flex">
              <button
                onClick={logout}
                href="/logout"
                className="btn btn-primary"
              >
                Logout
              </button>
            </span>
          </div>
        </nav>
        <div className=" container mt-2">
          <div className="row">
            <div className=" col">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Index;

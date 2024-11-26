import React from "react";
import Swal from "sweetalert2";

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fData = {};
    for (let elm of event.target.elements) {
      if (elm.type === "email" || elm.type === "password") {
        fData[elm.name] = elm.value;
      }
    }
    await fetch("http://localhost:3000/api/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          if (response.status === 401) {
            // alert("Password salah");
            Swal.fire({
              icon: "error",
              title: "Password Salah",
            });
          }
          if (response.status === 404) {
            // alert("Username tidak ditemukan");
            Swal.fire({
              icon: "warning",
              title: "Username tidak ditemukan",
            });
          }
          // throw new Error(`error : ${response.status}`);
          // if (response.status) {

          // }
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        event.target.reset();
        window.location.href = "/admin/home";
      })
      .catch((error) => console.error("Error : ", error));
  };

  return (
    <div>
      <main style={{ maxWidth: 500, padding: "1rem" }} className="mx-auto mt-3">
        <div className="card" id="login" style={{marginTop:"8rem"}}>
          <div className=" card-header text-center">
            <h3>
              <span
                className="warna"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
              >
                Login
              </span>
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="username" style={{ color: "white" }}>
                  Username
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Masukkan username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" style={{ color: "white" }}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-footer text-end">
              <button type="submit" className=" btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;

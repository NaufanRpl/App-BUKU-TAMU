import React from "react";
import Swal from "sweetalert2";

const TambahUser = () => {
  const token = localStorage.getItem("token");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fData = {};
    const frmel = event.target;
    for (let el of frmel.elements) {
      fData[el.name] = el.value;
    }

    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(fData),
    });
    if (!response.ok) {
      console.log((error) => console.error);
    } else {
      event.target.reset();
      Swal.fire({
        icon: "success",
        text: "Simpan berhasil",
        timer: 1000,
      }).then((res) => {
        window.location.href = "/admin/user";
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="card"
              id="tambah_user"
              style={{ marginTop: "8rem", left: "18rem", alignItems: "center" }}
            >
              <div className="card-header">
                <h2 className="text-center" style={{ color: "white" }}>
                  Input <span>Data User</span>
                </h2>
              </div>
              <form onSubmit={handleSubmit} style={{ width: "390px" }}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="nama" style={{ color: "white" }}>
                      Nama
                    </label>
                    <input type="text" name="nama" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" style={{ color: "white" }}>
                      Email
                    </label>
                    <input type="email" name="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" style={{ color: "white" }}>
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Simpan
                  </button>
                  <a href="/admin/user" className=" btn btn-primary float-end">
                    Lihat data
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahUser;

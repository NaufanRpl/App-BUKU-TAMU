import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const User = () => {
  const [dataUser, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  const tampilData = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    tampilData();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Yakin mau hapus Data?",
      showCancelButton: true,
      confirmButtonText: "Yakin",
      denyButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:3000/api/users/" + id, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((res) => {
            window.location.reload();
          });
      }
    });
  };

  return (
    <div>
      <div
        className="card"
        style={{
          width: "100vh",
          height: "auto",
          marginTop: "7rem",
          marginLeft: "1rem",
          marginRight: "1rem",
          justifyContent: "center",
          right: "-13rem",
        }}
      >
        <div className="card-header">
          <h1
            style={{
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              marginBottom: "0.1rem",
              marginTop: "0",
            }}
          >
            <span className="warna">Data</span> <span>User</span>
          </h1>
        </div>
        <div
          className="card-body"
          style={{
            minHeight: "100px",
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div className="table-container">
            <div className="row">
              <div className="col-md-6">
                <table
                  className=" table-borderless mt-2 align-items-center"
                  id="tabel_user"
                  style={{
                    marginTop: "0",
                    right: "10rem",
                    marginRight:"3rem",
                    marginLeft: "20.5em",
                    width: "57em",
                    background: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "10px",
                    backdropFilter: "blur(5px)",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <thead style={{ backgroundColor: "chocolate" }}>
                    <tr style={{ color: "wheat" }}>
                      <th>No</th>
                      <th>Nama</th>
                      <th>Email</th>
                      <th>Edit</th>
                      <th>Hapus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataUser.length > 0 ? (
                      dataUser.map((item, index) => (
                        <tr key={index}>
                          <td style={{color:"wheat"}}>{index + 1}.</td>
                          <td>{item.nama}</td>
                          <td>{item.email}</td>
                          <td>
                            <a
                              href={`/admin/edituser/${item.id}`}
                              className="btn btn-danger"
                            >
                              Edit
                            </a>
                          </td>
                          <td>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="btn btn-danger"
                            >
                              Hapus
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">Data Kosong</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <a
              href="/admin/adduser"
              className="btn btn-primary"
              style={{
                marginTop: "-5rem",
                marginBottom: "-8rem",
                marginLeft: "28em",
                width: "8em",
              }}
            >
              Tambah User
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

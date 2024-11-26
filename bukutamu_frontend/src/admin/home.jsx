import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
const home = () => {
  const [jumlahTamu, setJumlahTamu] = useState(0);
  const [jumlahUser, setJumlahUser] = useState(0);
  const token = localStorage.getItem("token");

  const hitungDataTamu = async () => {
    const response = await fetch("http://localhost:3000/api/bukutamu", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setJumlahTamu(data.length);
  };

  const hitungDataUser = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setJumlahUser(data.length);
  };

  useEffect(() => {
    hitungDataTamu();
    hitungDataUser();
  }, []);

  const dataStatistik = [
    { name: "Tamu", Jumlah: jumlahTamu },
    { name: "User", Jumlah: jumlahUser },
  ];

  return (
    <div style={{ minHeight: "1775px" }}>
      <div className="container">
        <div style={{ marginTop: "10rem" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "4em",
              color: "white",
              margin: "6rem 19rem 3rem 19rem",
            }}
          >
            Selamat Datang di Home Page Admin
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              color: "wheat",
              marginBottom: "12rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem
            molestias dolorum sit placeat alias, animi excepturi, quisquam fugit
            eius, qui vitae accusamus fuga velit?
          </p>
        </div>
        <br />
        <div className="card" id="home" style={{ backdropFilter: "blur(5px)" }}>
          <h1
            className="text-center mt-3"
            style={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              marginTop: "0",
              marginBottom: "1rem",
            }}
          >
            Dashboard <span>Jumlah Data</span>
          </h1>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div
              className="card text-center"
              style={{ backdropFilter: "blur(5px)" }}
            >
              <div className="card-body">
                <h2 className="card-title">
                  <span className="warna">Jumlah Data</span>{" "}
                  <span className="noshadow">Tamu</span>
                </h2>
                <h4 className="card-text">
                  <span className="warna">{jumlahTamu}</span> <span>Tamu</span>
                </h4>
                <a href="/admin/tamu" className=" btn btn-info m-2">
                  Lihat Data Tamu
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card text-center"
              style={{ backdropFilter: "blur(5px)" }}
            >
              <div className="card-body">
                <h2 className=" card-title">
                  <span className="warna">Jumlah Data</span> <span>User</span>
                </h2>
                <h4 className=" card-text">
                  <span className="warna">{jumlahUser}</span> <span>User</span>
                </h4>
                <a href="/admin/user" className=" btn btn-info m-2">
                  Lihat Data User
                </a>
                <a href="/admin/adduser" className=" btn btn-primary m-2">
                  Tambah Data User
                </a>
              </div>
            </div>
            <div
              className="card"
              style={{
                marginTop: "15rem",
                marginLeft: "-25rem",
                marginRight: "10rem",
              }}
            >
              <div className="card-title">
                <h1 className="text-center">
                  <span className="warna">Statistik</span> <span>Data</span>
                </h1>
              </div>
              <div
                className="card-body"
                style={{ backdropFilter: "blur(5px)" }}
              >
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={dataStatistik}
                    margin={{ top: 20, bottom: 20 }}
                  >
                    <XAxis dataKey="name" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Jumlah" fill="#8884d8" barSize={50} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default home;

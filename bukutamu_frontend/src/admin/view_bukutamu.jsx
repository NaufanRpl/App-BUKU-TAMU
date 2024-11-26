import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Tamu = () => {
  const [dataTamu, setTamu] = useState([]);
  const token = localStorage.getItem("token");

  const tampilData = async () => {
    const response = await fetch("http://localhost:3000/api/bukutamu", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setTamu(data);
  };
  useEffect(() => {
    tampilData();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Yakin ingin menghapus data?",
      showCancelButton: true,
      confirmButtonText: "Yakin",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:3000/api/bukutamu/" + id, {
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
      <div className="card" style={{ width: "160vh", height: "auto", marginTop:"7rem",marginLeft:"1rem" }}>
        <div
          className=" card-header text-center"
          style={{ marginBottom: "2em" }}
        >
          <h1
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              marginBottom: "1.2rem",
              marginTop: "0"
            }}
          >
            <span className="warna">Data</span> <span>Tamu</span>
          </h1>
        </div>
        <div
          className=" card-body"
          style={{
            minHeight: "100px",
            paddingTop: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            className="table-container"
            style={{ marginTop: "-10px", backgroundColor: "transparent" }}
          >
            <div className="row">
              <div className="col">
                <table
                  className=" table-borderless table-striped mt-2 align-items-center"
                  id="tabel_tamu"
                  style={{
                    marginTop: "0",
                    width: "65em",
                    background: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "10px",
                    backdropFilter: "blur(5px)",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    textAlign: "center"
                  }}
                >
                  <thead style={{backgroundColor:"chocolate"}}>
                    <tr style={{color:"wheat"}}>
                      <th>No</th>
                      <th>Nama Tamu</th>
                      <th>No. HP</th>
                      <th>Jabatan</th>
                      <th>Unit Kerja</th>
                      <th>Tujuan</th>
                      <th>Yang Dituju</th>
                      <th>Keterangan</th>
                      <th>Hapus</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTamu.length > 0 ? (
                      dataTamu.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.nama_tamu}</td>
                          <td>{item.no_hp}</td>
                          <td>{item.jabatan}</td>
                          <td>{item.unit_kerja}</td>
                          <td>{item.tujuan}</td>
                          <td>{item.yang_dituju}</td>
                          <td>{item.keterangan}</td>
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
                        <td colSpan="9">Data Kosong</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tamu;

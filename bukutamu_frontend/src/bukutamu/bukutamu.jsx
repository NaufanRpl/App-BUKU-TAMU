import React from "react";
import swAlert from "sweetalert";

const Bukutamu = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fData = {};
    const frmel = event.target;
    for (let el of frmel.elements) {
      fData[el.name] = el.value;
    }
    const response = await fetch("http://localhost:3000/api/bukutamu", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fData),
    });
    if (!response.ok) {
      console.log((error) => console.error);
    } else {
      swAlert("Ok! Data berhasil di simpan", {
        icon: "success",
        timer: 2500,
      });
      event.target.reset();
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 position-absolute top-50 start-50 translate-middle">
            <div className="card" id="bukutamu" style={{ padding: "1em" }}>
              <div
                className="card-header text-center bg-transparent"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h1
                  style={{
                    height: "3.5rem",
                    top: "4rem",
                    marginBottom: "1.2rem",
                    marginTop: "0",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <span className="warna">Buku</span> <span>Tamu</span>
                </h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="card-body bg-transparent">
                  <div className="form-group">
                    <label htmlFor="nama_tamu" style={{ color: "white" }}>
                      Nama Tamu
                    </label>
                    <input
                      type="text"
                      name="nama_tamu"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="no_hp" style={{ color: "white" }}>
                      Nomor HP
                    </label>
                    <input type="text" name="no_hp" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="jabatan" style={{ color: "white" }}>
                      Jabatan
                    </label>
                    <input
                      type="text"
                      name="jabatan"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="unit_kerja" style={{ color: "white" }}>
                      Asal Unit Kerja
                    </label>
                    <input
                      type="text"
                      name="unit_kerja"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tujuan" style={{ color: "white" }}>
                      Tujuan
                    </label>
                    <select
                      name="tujuan"
                      id="tujuan"
                      className="form-control"
                      style={{ textAlign: "center" }}
                    >
                      <option value="">== PILIH UNIT KERJA TUJUAN ==</option>
                      <option value="Kepala Sekolah">Kepala Sekolah</option>
                      <option value="Wakil Kepala Sekolah">
                        Wakil Kepala Sekolah
                      </option>
                      <option value="Akuntansi">Akuntansi</option>
                      <option value="Bisnis Digital">Bisnis Digital</option>
                      <option value="Desain Komunikasi Visual">
                        Desain Komunikasi Visual
                      </option>
                      <option value="Manajemen Perkantoran">
                        Manajemen Perkantoran
                      </option>
                      <option value="Rekayasa Perangkat Lunak">
                        Rekayasa Perangkat Lunak
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="yang_dituju" style={{ color: "white" }}>
                      Yang dituju
                    </label>
                    <input
                      type="text"
                      name="yang_dituju"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="keterangan" style={{ color: "white" }}>
                      Keterangan
                    </label>
                    <input
                      type="text"
                      name="keterangan"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bukutamu;

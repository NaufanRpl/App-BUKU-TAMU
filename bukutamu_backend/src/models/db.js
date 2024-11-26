const db = require("mysql2")
const koneksi = db.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "naufan_bukutamu_db",
})

koneksi.connect((err) => {
    if (err) {
        console.error("Error waktu konek ke database", err.stack)
        return;
    }
    console.log("Berhasil konek ke database")
})
module.exports = koneksi;
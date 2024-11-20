const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'infosea_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Koneksi ke database berhasil');
});

module.exports = db;

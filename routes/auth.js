const express = require('express');
const router = express.Router();
const db = require('../db/connection'); 

router.get('/login', (req, res) => {
    res.render('login', { message: null });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            req.session.loggedin = true;
            req.session.username = username;
            res.redirect('/profile');
        } else {
            res.render('login', { message: 'Username atau password salah' });
        }
    });
});

router.get('/register', (req, res) => {
    res.render('register', { message: null });
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;

    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
        if (err) {
            res.render('register', { message: 'Terjadi kesalahan saat mendaftar' });
        } else {
            res.render('login', { message: 'Registrasi berhasil, silakan login' });
        }
    });
});

// Halaman profile
router.get('/profile', (req, res) => {
    if (req.session.loggedin) {
        res.render('profile', { username: req.session.username });
    } else {
        res.redirect('/utama');
    }
});
''
// Memunculkan halaman flora
router.get('/flora', (req, res) => {
    res.render('flora');
});

// Saat klik fauna, munculkan halaman fauna
router.get('/fauna', (req, res) => {
    res.render('fauna');
});

// munculkan halaman utama saat di klik halaman beranda
router.get('/utama', (req, res) => {
    res.render('utama');
});

// Saat klik karang munculkan halaman karang
router.get('/karang', (req, res) => {
    res.render('karang');
});

// saat klik lamun munculkan halaman lamun
router.get('/lamun', (req, res) => {
    res.render('lamun');
});

// saat klik mangrove munculkan halaman mangrove
router.get('/mangrove', (req, res) => { 
    res.render('mangrove');
});
// saat klik halaman sejarah munculkan halaman sejarah
router.get('/sejarah', (req, res) => {
    res.render('sejarah');
});

// saat klik halaman lyzenga2020 munculkan halaman lyzenga2020
router.get('/lyzenga2020', (req, res) => {
    res.render('lyzenga2020');
});

// saat klik halaman lyzenga2021 munculkan halaman lyzenga2021
router.get('/lyzenga2021', (req, res) => {
    res.render('lyzenga2021');  
});

// saat klik halaman lyzenga2022 munculkan halaman lyzenga2022
router.get('/lyzenga2022', (req, res) => {  
    res.render('lyzenga2022');
});

// saat klik halaman lyzenga23 munculkan lyzenga23
router.get('/lyzenga2023', (req, res) => {
    res.render('lyzenga2023');
});
// saat klik halaman lyzenga2024 munculkan halaman lyzenga2024
router.get('/lyzenga2024', (req, res) => {
    res.render('lyzenga2024');
});

// saat klik halaman karang20 munculkan halaman karang20
router.get('/karang2020', (req, res) => {
    res.render('karang2020');
});

// saat klik halaman karang21 munculkan halaman karang21
router.get('/karang2021', (req, res) => {
    res.render('karang2021');
});

// saat klik halaman karang22 munculkan halaman karang22    
router.get('/karang2022', (req, res) => {
    res.render('karang2022.ejs');
});
// saat klik halaman karang 23 munculkan halaman karang23
router.get('/karang2023', (req, res) => {
    res.render('karang2023');
});

router.get('/karang2024', (req, res) => {
    res.render('karang2024');
});



module.exports = router;



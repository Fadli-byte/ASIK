const express = require('express');
const mysql = require('mysql');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// Pengaturan database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'infosea_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Terhubung ke database MySQL');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.set('view engine', 'ejs');

// Routes
const authRoutes = require('./routes/auth');
app.use('/', authRoutes);

// Memunculkan halaman
app.get('/', (req, res) => {
    res.redirect('/login'); // Redirect ke halaman login
});
app.get('/utama', (req, res) => {
    res.render('utama'); 
});

// munculkan foto di halaman fauna
app.get('/fauna', (req, res) => {
    res.render('fauna');
});

app.set('karang2022', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Middleware untuk melayani file statis
app.use(express.static('public'));
app.use('/public', express.static('public'));
app.use('/public', express.static('public'));
app.use('/public', express.static('public'));
app.use(express.static('public'));




// Jalankan server
app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});


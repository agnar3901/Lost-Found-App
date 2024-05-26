const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let users = JSON.parse(fs.readFileSync('data/users.json', 'utf-8'));

app.post('/register', (req, res) => {
    const { email, password } = req.body;

    if (users[email]) {
        return res.status(400).json({ message: 'Email already registered' });
    }

    users[email] = { email, password };
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 2));
    res.json({ message: 'Registration successful' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!users[email] || users[email].password !== password) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful', redirect: 'Welcome' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

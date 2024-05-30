const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(async (req, res, next) => {
    await new Promise(res => {
        setTimeout(res, 800);
    });

    next();
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'Auth Error' });
    }

    next();
});

server.post('/login', (req, res) => {
    const { username, password } = req.body;

    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

    const { users } = db;

    const user = user.find(item => item.username === username && item.password === password);

    if (user) {
        return res.json(user);
    }

    return res.status(403).json({ message: 'Auth Error' });
});

server.use(jsonServer.defaults());
server.use(router);

server.listen(8000, () => {
    console.log('server is running on http://localhost:8000');
})
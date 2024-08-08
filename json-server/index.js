const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise(res => {
        setTimeout(res, 800);
    });

    next();
});

server.use((req, res, next) => {
    if (!(req.url.includes('login') && req.method === 'POST') && !req.headers.authorization) {
        return res.status(403).json({ message: 'access_denied' });
    }

    next();
});

server.post('/login', (req, res) => {
    const { username } = req.body;
    const { users } = db;

    const user = users.find(item => item.username === username);

    if (user) {
        delete user.password;

        return res.json(user);
    }

    return res.status(403).json({ message: 'request_payload_data_is_incorrect' });
});

server.get('/profile', (req, res) => {
    const user = db.users[0];

    delete user.password;

    return res.json(user);
});

server.use(router);

server.listen(8000, () => {
    console.log('server is running on http://localhost:8000');
});

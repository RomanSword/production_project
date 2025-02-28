const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const dbFilePath = path.resolve(__dirname, 'db.json');
const router = jsonServer.router(dbFilePath);
const middlewares = jsonServer.defaults();
const db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'));

const imagesSrc = [
    'https://sun9-8.userapi.com/impg/gpHGcmgZn7_BF1s-DCSKnVH7SIB1RMnc5zf5dg/iAYgLUO8Ti8.jpg?size=948x948&quality=96&sign=376e3e267e654457ce688b7953e72e63&type=album',
    'https://sun9-10.userapi.com/impg/CEr-92iEN6TUJGFDA_gFiYwaZPVFsfOJ9TFkMw/N5pK0KAUH20.jpg?size=1500x1510&quality=95&sign=06a19eecceac346c370cd838ddf2e115&type=album',
    'https://sun9-77.userapi.com/impg/IYkUhGjUvls-gFpOrYZs32uzBPYy5w6XWYbJsg/8nF_4R8E34k.jpg?size=604x560&quality=96&sign=18a9262968a5a093156bab3063f12aaa&type=album',
    'https://sun9-11.userapi.com/impg/7NlAqSvpWugvdzXlq-0AqhP5o71P2ZfCbJV1YA/ew0zrq9ZXxE.jpg?size=604x592&quality=96&sign=b5ce4b5194ff6758217676dff616c783&type=album',
    'https://sun9-65.userapi.com/impg/KgMEwgd9o1rxLNKUVk33C8wHYnOwhjOTB0RKrQ/4j7Gnrl2Wlo.jpg?size=632x609&quality=96&sign=ce4afc849a156af220357f8c4cbd7a90&type=album',
    'https://sun9-21.userapi.com/impg/OZHPDBcy1kbzLsEU6mb7LnNAln72DAo9znfcWg/F7jYqEY0RSM.jpg?size=1257x872&quality=96&sign=601f2ddd71a21d63cf428582f930daa3&type=album',
    'https://sun9-71.userapi.com/impg/hqHhhziBOrNRvmD-10nzC6VI3Lg3AVRE-i4S0w/kP-iVgGfjL8.jpg?size=1080x817&quality=96&sign=dc765fd93ca662277e12ab9fbfdeb895&type=album',
    'https://sun9-8.userapi.com/impg/72gfxeIuL3KMDVgLYj5LWKq6UPuFztHxzWVQ4Q/FMDee_wJZgs.jpg?size=1164x1242&quality=96&sign=6a9a57fe00e0be36fdce6d305fbb3f05&type=album',
    'https://sun9-69.userapi.com/impg/qLzURd-onKuDLOG6GTK7NQBRiAH8o18es-7mSQ/0KcLmwddEgY.jpg?size=785x698&quality=96&sign=c6e1263fd7256469f4c70997863ccae3&type=album',
    'https://sun9-7.userapi.com/impg/Cg4vPZ3-MM3pE4CBdzP0PjwE21Ey_wywe0CXWw/9dOQxLL3y10.jpg?size=565x604&quality=96&sign=669b979ea3cfa86367470a011cee2214&type=album',
    'https://sun9-3.userapi.com/impg/FHkFhZShmxLuVu1VwkaVrrvNMvGmmy_-TYhOEw/v1y22BgwPe4.jpg?size=1037x760&quality=96&sign=cbf072440c1029f5f2923237c4864f78&type=album',
    'https://sun9-40.userapi.com/impg/G6v-EAT4Hqtlqdhqj40SBu6yHTmyFogND6NtQw/dKDuLfmGY48.jpg?size=678x720&quality=96&sign=d848009bc6f8a20a710f956b7ddb0300&type=album',
    'https://sun9-34.userapi.com/impg/Rn69RKsGhDbp7qzQ8tSldMs372NZwWL_Tcf72g/VkRq622_XIc.jpg?size=826x796&quality=96&sign=9344d5293b24352ecdacf85d4ef07001&type=album',
    'https://sun9-66.userapi.com/impg/pVSUq6gVvLPifvy0v32SZb3gEIFmoYf3bzvFkQ/iVnISXzG_Bg.jpg?size=720x565&quality=96&sign=ebe75c5efc3c277da6524267b7573636&type=album',
    'https://sun9-44.userapi.com/impg/BDCsDR49zXC_wq4Pl_nCg-tke1w61eqkrtL_mQ/QGJKHAIFKuQ.jpg?size=1080x1075&quality=96&sign=82571d950a5ffbb58b4684a077922f3d&type=album',
    'https://sun9-78.userapi.com/impg/qH2gU_IkEjNHd5sRSX7uFvKXuwp4KCd2ieHZCw/deWu6cBmO8M.jpg?size=600x450&quality=96&sign=1c43c26f1020458089c51d59a511ebce&type=album',
    'https://sun9-75.userapi.com/impg/c855524/v855524506/1ee2f6/zyDon6vw0ik.jpg?size=1200x628&quality=96&sign=d978dc69eba445ae80b9918348446591&type=album',
    'https://sun9-9.userapi.com/impg/c853420/v853420324/187b99/P4TUdDfTrr4.jpg?size=476x762&quality=96&sign=0d3b3da0da4653e8fbf49e8c2d64f78a&type=album',
    'https://sun9-12.userapi.com/impf/c855032/v855032726/1155ff/ZUB7Vlg3TtY.jpg?size=621x620&quality=96&sign=c096d087172c96fd93833e03d7422a66&type=album',
    'https://sun9-2.userapi.com/impf/PE19ovz-2tfvE-MisZrh9WUDKNVM_gMz1tsGpw/-2HrviEMDfk.jpg?size=711x711&quality=96&sign=39d6f3644575750d1a29d4438f05d3d3&type=album',
    'https://sun9-39.userapi.com/impf/KKBfe1eAW9R7sfPhkA_smHZFWBA5BT5mURLRpg/OruSwQs3Cu8.jpg?size=710x698&quality=96&sign=7965feb3cc7c9f3f7c943c13326a0242&type=album',
    'https://sun9-80.userapi.com/impf/c840123/v840123753/1987d/8BHVUoL5C0w.jpg?size=1280x714&quality=96&sign=89e98ea5d02eb20943cb1b50dd63949b&type=album'
];

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
    const { profiles } = db;

    const profile = profiles.find(item => item.username === username);

    if (profile) {
        delete profile.password;

        return res.json(profile);
    }

    return res.status(403).json({ message: 'request_payload_data_is_incorrect' });
});

server.get('/profile', (req, res) => {
    const profile = db.profiles[0];

    delete profile.password;

    profile.country = db.countries.find(item => item.id === profile.country_id);
    profile.city = db.cities.find(item => item.id === profile.city_id);

    return setTimeout(() => {
        return res.json(profile);
    }, 1000);
});

server.put('/profile', (req, res) => {
    const form = req.body;

    db.profiles = db.profiles.map(item => {
        if (item.id === form.id) {
            return {
                ...item,
                ...form
            };
        }

        return item;
    });

    fs.writeFileSync(dbFilePath, JSON.stringify(db));

    form.country = db.countries.find(item => item.id === form.country_id);
    form.city = db.cities.find(item => item.id === form.city_id);

    return setTimeout(() => {
        return res.json(form);
    }, 2000);
});

server.post('/comments', (req, res) => {
    const form = {
        id: String(db.comments.length + 1),
        text: req.body.text,
        articleId: req.body.articleId,
        profileId: req.headers.authorization.replace('Bearer ', '')
    };

    if (req.body.id) {
        db.comments = db.comments.map(item => {
            if (item.id === form.id) {
                return {
                    ...item,
                    ...form
                };
            }

            return item;
        });
    } else {
        db.comments.push(form);
    }

    fs.writeFileSync(dbFilePath, JSON.stringify(db));

    return setTimeout(() => {
        return res.json(form);
    }, 2000);
});

server.post('/upload', (req, res) => {
    return setTimeout(() => {
        return res.json({
            src: imagesSrc[Math.floor(Math.random() * imagesSrc.length)]
        });
    }, 2000);
});

server.get('/countries', (req, res) => {
    return setTimeout(() => {
        return res.json(db.countries);
    }, 2000);
});

server.get('/countries', (req, res) => {
    const cities = db.cities.filter(item => item.country_id === req.body.country_id);

    if (cities.length) {
        return res.json(cities);
    }

    return res.status(403).json({ message: 'request_payload_data_is_incorrect' });
});

server.use(router);

server.listen(8000, () => {
    console.log('server is running on http://localhost:8000');
});

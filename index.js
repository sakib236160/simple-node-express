const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('WOW. I Am Sempeli Wow...i love you ma');
})


const users = [
    { id: 0, name: 'sabana', email: 'aktersabana23@gmail.com', Phone: '01780614356' },
    { id: 1, name: 'subnur', email: 'aktersabana@gmail.com', Phone: '01480614356' },
    { id: 2, name: 'ssabonti', email: 'aktersabana177@gmail.com', Phone: '01980614356' },
    { id: 3, name: 'sumi', email: 'aktersabana000@gmail.com', Phone: '01680614356' },
    { id: 4, name: 'saiteka', email: 'aktersabana465@gmail.com', Phone: '01780614356' },
    { id: 5, name: 'saiteka', email: 'aktersabana465@gmail.com', Phone: '01780614356' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

// app.METHOOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'oranges', 'apple']);
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})

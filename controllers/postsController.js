const  posts = require('../data/posts');
const { post } = require('../routers/postsRoute');

//index
const index = (req, res) => {
  res.json('OHH BENVENUTI nel nostro blog')
}

// show
const show = (req, res) => {
res.json(`Dettagli del post ${req.params.id}`);
}

// store
const store = (req, res) => {
res.send('Creazione di un nuovo post');
};
// update
const update = (req, res) => {
res.send(`Modifica totale tombale, definitiva del post ${req.params.id} `);
};

// modify
const modify =  (req, res) => {
res.send(`Modifica piccolina del post ${req.params.id}`);
};

// destroy
const destroy = (req, res)=>{

    const id = Number(req.params.id)
    const target = posts.find(post => post.id === id)

    if (!target) {
        return res.status(404).json({
            error: true,
            message: 'heheh lo hai mancato'
        })
    }

    post.splice(posts.indexOf(target), 1)
    console.log(posts);

    res.sendStatus(204)
}

module.exports = {index, show, store, update, modify, destroy}

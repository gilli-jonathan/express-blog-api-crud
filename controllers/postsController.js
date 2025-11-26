const  posts = require('../data/posts');


//index
const index = (req, res) => {
  res.json({posts})
}

// show
const show = (req, res) => {

    const id = Number(req.params.id)

    const trovato = posts.find(post => post.id === id)

        if (!trovato) {
        return res.status(404).json({
            error: true,
            message: 'il post è troppo timido per farsi vedere'
        })
    }

    res.json(trovato)


};


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

    posts.splice(posts.indexOf(target), 1)
    console.log(posts);

    res.sendStatus(204)
}

module.exports = {index, show, store, update, modify, destroy}

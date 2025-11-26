const  posts = require('../data/posts')

const index = (req, res) => {
  res.send('OHH BENVENUTI nel nostro blog')
}

// show
const show = (req, res) => {
res.send(`Dettagli del post ${req.params.id}`);
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
  res.send(`Addio soldato: ${req.params.id}`)
}

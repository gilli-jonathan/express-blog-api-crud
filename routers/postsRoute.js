//il nostro import
const express = require('express')
const postsController = require('../controllers/postsController')


//creazione della route per esposrtarla
const router = express.Router()


//la logica di cio che avviene

router.get('/', postsController.index)

// show
router.get('/:id', postsController.show);

// store
router.post('/', postsController.store);

// update
router.put('/:id', postsController.update);

// modify
router.patch('/:id', postsController.modify);

// destroy
router.delete('/:id', postsController.delete)


//il mio return ()
module.exports = router
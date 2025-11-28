function errorsHandler(err, req, res, next) {

    res.status(500)
    res.jason({
        error:errorsHandler.message,
        message: 'senti a me, meglio che lasci perdere'
    })
}

module.exports = errorsHandler
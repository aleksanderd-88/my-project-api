const router = require('express').Router()
const controllers = require('../controllers')

// comments
module.exports = router.post('/api/comments/create', controllers.comments.create)
module.exports = router.get('/api/video/:id/comments/list', controllers.comments.list)

// sub comments
module.exports = router.post('/api/sub-comments/create', controllers.subComments.create)
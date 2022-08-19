const router = require('express').Router()
const controllers = require('../controllers')

// comments
module.exports = router.post('/api/comments/create', controllers.comments.create)
module.exports = router.get('/api/video/:id/comments/list', controllers.comments.list)
module.exports = router.patch('/api/comments/:id/vote', controllers.comments.update)

// sub comments
module.exports = router.post('/api/sub-comments/create', controllers.subComments.create)
module.exports = router.patch('/api/sub-comments/:id/vote', controllers.subComments.update)
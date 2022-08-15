const models = require('../../../../models')

module.exports = (req, res) => {

  const { data } = req.body

  // Sanity check
  if(!data || Object.values(data).some(o => o.comment === '')) {
    return res.status(400).send('Something went wrong')
  }

  models.subComment.create({ text: data.comment, commentId: data.commentId, parentCommentId: data.parentCommentId }).then((response) => {
    res.status(201).send(response)
  })
  .catch((error) => res.status(400).send(error))
}
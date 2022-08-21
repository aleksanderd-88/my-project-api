const models = require('../../../../models')

module.exports = async (req, res) => {
  const { id } = req.params
  const { data } = req.body

  if(!id || !data || Object.values(data).some(o => o === '')) {
    return res.status(404).send('No id or data found')
  }

  const where = { _id: id }

  const comment = await models.comment.findOne(where)

  if(!comment) {
    return res.status(404).send('No comment found')
  }

  let update

  if(data.like) {
    update = { 
      likes: comment.canUpVote ? comment.likes + data.vote : (comment.vote > 1 && comment.likes - data.vote), 
      dislikes: comment.vote > 1 && comment.vote - 1,
      canUpVote: !comment.canUpVote,
      canDownVote: true
    }
  } else {
    update = { 
      dislikes: comment.canDownVote ? comment.dislikes + data.vote : (comment.vote > 1 && comment.dislikes - data.vote), 
      likes: comment.likes > 1 && comment.likes - 1,
      canUpVote: true,
      canDownVote: !comment.canDownVote
    }
  }

  models.comment.updateOne(where, update).lean()
  .then((comment) => {
    res.status(200).send(`Updated rows: ${comment['modifiedCount']}`)
  })
  .catch((error) => console.log(error))
}
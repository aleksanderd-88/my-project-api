const models = require('../../../../models')

module.exports = (req, res) => {

  const { id } = req.params

  // Sanity check
  if(!id || !id.length) {
    return res.status(400).send('Something went wrong')
  }

  // Use the `lean()` method to convert mongoose document into plain javascript object.
  // Query for all comments
  models.comment.find({ videoId: id }).lean().then( async (results) => {

    results = await Promise.all(results.map( async o => {
      const where = { parentCommentId: o._id }
      let relatedSubComments = await models.subComment.find(where)

      if(! relatedSubComments.length) relatedSubComments = []

      return {
        ...o,
        subComments: relatedSubComments
      }
    }))

    res.status(201).send(results)
  })
  .catch((error) => res.status(400).send(error))
}
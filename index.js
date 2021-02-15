const { Toolkit } = require('actions-toolkit')

const giphyAPIKey = process.env.GIPHY_TOKEN

// Run your GitHub Action!
Toolkit.run(async tools => {
  // return if you ain't suppose be here
  if (tools.context.payload.comment.body.includes('.gipht')) {

    const searchTerm = tools.context.payload.comment.body.split(".gipht").join(" ")

    const url = `http://api.giphy.com/v1/gifs/translate?api_key=${giphyAPIKey}&s=${searchTerm}`
    const gifURL = await fetchGif(url)

    const params = tools.context.issue({body: `![](${gifURL})` })

    return tools.context.github.issues.createComment(params)

  }
}, {event: 'issue_comment.created' })

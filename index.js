const { Toolkit } = require('actions-toolkit')

const giphyAPIKey = process.env.GIPHY_TOKEN

// Run your GitHub Action!
Toolkit.on('issue_comment.created', async context => {
  // return if you ain't suppose be here
  if (context.payload.comment.body.includes('.gipht')) {

    const searchTerm = context.payload.comment.body.split(".gipht").join(" ")

    const url = `http://api.giphy.com/v1/gifs/translate?api_key=${giphyAPIKey}&s=${searchTerm}`
    const gifURL = await fetchGif(url)

    const params = context.issue({body: `![](${gifURL})` })

    return context.github.issues.createComment(params)

  }
})

Toolkit.run(async tools => {
  tools.exit.success('We did it!')
})

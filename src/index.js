import express from 'express'
import renderer from './helpers/renderer'

const app = express()

app.use(express.static('public'))
app.get('*', (req, res) => {
    if (req.path === '/') {
        res.send(renderer(req))
    } else {
        res.redirect(301, '/')
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

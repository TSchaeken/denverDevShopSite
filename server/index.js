import express from 'express'
import Log from 'log'
import renderer from './helpers/renderer'

const log = new Log('info');
const PORT = process.env.PORT || 8000;
const app = express()

app.use(express.static('public'))
app.get('*', (req, res) => {
    if (req.path === '/') {
        res.send(renderer(req))
    } else {
        res.redirect(301, '/')
    }
})

app.listen(PORT, '0.0.0.0', () => {
    log.info(`Server is running on port: ${PORT}`);
});

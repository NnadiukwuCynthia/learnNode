const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === '/'){
    res.end('This is the home page')
}
if (req.url === '/about'){
    res.end('Here is the about page: A brief introduction')
}
res.end(`
<h1>Opps: Page not found</h1>
<p>We can't see t fine the page you are looking for</p>
<a href='/'>Click to return to the home page</a>`)
})

server.listen(5000) 
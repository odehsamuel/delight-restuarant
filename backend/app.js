const http = require('http')

const  handleResponse = (request, response) => {
    response.statusCode = 200
    response.end("<h1>Hello World</h1>")
}

const server = http.createServer(handleResponse)

server.listen(3000)
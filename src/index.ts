import { myArray } from './utilities'
import http from 'node:http'

const { PORT = 3000 } = process.env

export type Server = http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>

export const server: Server = http.createServer((_, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end(myArray.join(' '))
})

server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`))

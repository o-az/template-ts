import http from 'node:http'
import https from 'node:https'
import crypto from 'node:crypto'

export const PORT: number = Number(process.env['PORT']) || 3_004

export type Server = http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>

export const server: Server = http.createServer()

server.on('request', (request, response) => {
  switch (request.url) {
    case '/': {
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(/*html*/ `<h1>Hello World!</h1>`)
      response.end()
      break
    }
    case '/json': {
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.write(JSON.stringify({ message: 'Hello World!' }))
      response.end()
      break
    }
    case '/image': {
      response.writeHead(200, { 'Content-Type': 'image/png' })
      const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      https.get(imageUrl, imageResponse => {
        imageResponse.pipe(response)
      })
      break
    }
    case '/audio': {
      response.writeHead(200, { 'Content-Type': 'audio/wav' })
      const audioUrl = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav'
      https.get(audioUrl, audioResponse => audioResponse.pipe(response))
      break
    }
    default: {
      response.writeHead(404, { 'Content-Type': 'text/html' })
      response.write(/*html*/ `<h1>404 Not Found</h1>`)
      response.end()
      break
    }
  }
})

// upgrade if websockets
server.on('upgrade', (request, socket, _head) => {
  const acceptKey = request.headers['sec-websocket-key']
  const acceptHash = crypto
    .createHash('sha1')
    .update(`${acceptKey}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`, 'binary')
    .digest('base64')

  console.info('Accept Hash:', acceptHash)

  const responseHeaders = [
    'HTTP/1.1 101 Web Socket Protocol Handshake',
    'Upgrade: WebSocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${acceptHash}`
  ] as const

  socket.write(responseHeaders.join('\r\n'))

  socket.on('close', () => console.info('Socket closed'))
  socket.on('data', data => console.info('Data:', data.toString()))
  socket.on('error', error => console.error('Socket error:', error))
})

const request = http.request({
  port: PORT,
  host: '127.0.0.1',
  headers: { connection: 'upgrade', upgrade: 'websocket' }
})

request.end()

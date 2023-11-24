import http from 'node:http'
import https from 'node:https'

export type Server = http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>

export const server = http.createServer(({ url }, response) => {
  switch (url) {
    case '/':
      response.writeHead(200, { 'Content-Type': 'text/html' })
      response.write(/*html*/ `<h1>Hello World!</h1>`)
      response.end()
      break
    case '/json':
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.write(JSON.stringify({ message: 'Hello World!' }))
      response.end()
      break
    case '/image': {
      response.writeHead(200, { 'Content-Type': 'image/png' })
      const imageURL = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      https.get(imageURL, imageResponse => {
        imageResponse.pipe(response)
      })
      break
    }
    case '/audio': {
      response.writeHead(200, { 'Content-Type': 'audio/wav' })
      const audioURL = 'https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther60.wav'
      https.get(audioURL, audioResponse => audioResponse.pipe(response))
      break
    }
    default:
      response.writeHead(404, { 'Content-Type': 'text/html' })
      response.write(/*html*/ `<h1>404 Not Found</h1>`)
      response.end()
      break
  }
})

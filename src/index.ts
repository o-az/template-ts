import { server } from './server.ts'

export const PORT = Number(process.env['PORT']) || 3_005

console.info(`Server running at http://127.0.0.1:${PORT}`)

server.listen(PORT)

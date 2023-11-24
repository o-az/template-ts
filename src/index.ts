import { server } from '~/server.ts'

export const PORT = Number(process.env.PORT) ?? 3_004

console.log(`Server running at http://localhost:${PORT}`)

server.listen(PORT)

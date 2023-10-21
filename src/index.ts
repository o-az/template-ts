import { server } from '#server'

export const { PORT = 3_004 } = process.env

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})

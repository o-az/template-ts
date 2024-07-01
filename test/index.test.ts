import { PORT } from '#index.ts'
import { type Server, server } from '#server.ts'
import { describe, expect, expectTypeOf, it } from 'vitest'

describe('PORT', () => {
  it('should be defined', () => {
    expect(PORT).toBeDefined()
  })

  it('should be a number', () => {
    expect(PORT).toBeTypeOf('number')
  })

  it('should be 4 digits', () => {
    expect(PORT).toBeGreaterThanOrEqual(1_000)
    expect(PORT).toBeLessThanOrEqual(9_999)
  })
})

describe('server type', () => {
  it('should be a Server', () => {
    expectTypeOf(server).toEqualTypeOf<Server>()
  })
})

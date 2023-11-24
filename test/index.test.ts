import { PORT } from '~/index.ts'
import { type Server, server } from '~/server.ts'
import { expect, expectTypeOf, it, test } from 'vitest'

test('PORT', () => {
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

test('server type', () => {
  it('should be a Server', () => {
    expectTypeOf(server).toEqualTypeOf<Server>()
  })
})

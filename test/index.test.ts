import { expect, expectTypeOf, it, test } from 'vitest'
import { type Server, server } from '~/server'
import { PORT } from '~/index'

test('PORT', () => {
  it('should be defined', () => {
    expect(PORT).toBeDefined()
  })

  it('should be a number', () => {
    expect(PORT).toBeTypeOf('number')
  })

  it('should be 4 digits', () => {
    expect(PORT).toBeGreaterThanOrEqual(1000)
    expect(PORT).toBeLessThanOrEqual(9999)
  })
})

test('server type', () => {
  it('should be a Server', () => {
    expectTypeOf(server).toEqualTypeOf<Server>()
  })
})

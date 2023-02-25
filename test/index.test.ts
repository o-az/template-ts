import { expect, expectTypeOf, it, test } from 'vitest'
import * as Everything from '../src/utilities'
import { type Server, server } from '../src/index'

test('Everything', () => {
  it('should export helloWorld', () => {
    expect(Everything.myArray).toEqual(['hello', 'world'])
  })
})

test('server type', () => {
  it('should be a Server', () => {
    expectTypeOf(server).toEqualTypeOf<Server>()
  })
})

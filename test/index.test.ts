import * as Everything from '../dist/index'
import { describe, it } from 'node:test'

describe('Everything', () => {
  it('should export helloWorld', () => {
    console.assert('helloWorld' in Everything)
  })
})

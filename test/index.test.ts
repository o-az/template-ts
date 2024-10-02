import { describe, expect, it } from 'vitest'

describe('PORT', () => {
  it('should be defined', () => {
    expect(process.env['PORT']).toBeDefined()
  })
})

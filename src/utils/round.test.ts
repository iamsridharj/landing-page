import { RoundOffToHigherNumber } from './RoundOffToHigherNumber' // Adjust the import path as necessary

describe('RoundOffToHigherNumber', () => {
  it('rounds positive decimals up to the nearest whole number', () => {
    expect(RoundOffToHigherNumber(3.2)).toBe(4)
    expect(RoundOffToHigherNumber(3.7)).toBe(4)
  })

  it('returns 0 for non-positive numbers', () => {
    expect(RoundOffToHigherNumber(0)).toBe(0)
    expect(RoundOffToHigherNumber(-1)).toBe(0)
    expect(RoundOffToHigherNumber(-0.5)).toBe(0)
  })

  it('handles edge cases with very small or very large numbers', () => {
    expect(RoundOffToHigherNumber(0.0000001)).toBe(1)
    expect(RoundOffToHigherNumber(999999.9)).toBe(1000000)
  })

  it('returns 0 for NaN or non-numeric inputs', () => {
    expect(RoundOffToHigherNumber(NaN)).toBe(0)
  })
})

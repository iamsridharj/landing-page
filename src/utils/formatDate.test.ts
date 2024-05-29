import { formatDateStringToReadableDate } from './formatDate'

describe('formatDateStringToReadableDate', () => {
  it('formats a valid ISO date string to a readable date format', () => {
    const date = '2020-01-01T14:20:00Z'
    const formattedDate = formatDateStringToReadableDate(date)
    expect(formattedDate).toBe('01/01/2020, 3:20 PM')
  })

  it('returns "Invalid date" for an invalid date string', () => {
    const invalidDate = 'invalid-date-string'
    const formattedDate = formatDateStringToReadableDate(invalidDate)
    expect(formattedDate).toBe('Invalid date')
  })

  it('handles edge case near epoch', () => {
    const date = '1969-12-31T23:59:59Z'
    const formattedDate = formatDateStringToReadableDate(date)
    expect(formattedDate).toBe('01/01/1970, 12:59 AM')
  })

  it('returns "Invalid date" for empty date string', () => {
    const formattedDate = formatDateStringToReadableDate('')
    expect(formattedDate).toBe('Invalid date')
  })
})

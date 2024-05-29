export const formatDateStringToReadableDate = (isoDate: string): string => {
  try {
    const date = new Date(isoDate)
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date')
    }

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }

    const formatter = new Intl.DateTimeFormat('en-US', options)
    return formatter.format(date)
  } catch (error) {
    console.error(error)
    return 'Invalid date'
  }
}

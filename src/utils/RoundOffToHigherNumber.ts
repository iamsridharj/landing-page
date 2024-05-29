export const RoundOffToHigherNumber = (num: number): number => {
  if (num <= 0 || isNaN(num)) {
    return 0
  }
  return Math.ceil(num)
}

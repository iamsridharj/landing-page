import '@testing-library/jest-dom'

jest.mock('@botbrews/assets/Icon/angleLeft.svg', () => ({
  ReactComponent: () => 'MockedSVG',
}))
jest.mock('@botbrews/assets/Icon/sortable.svg', () => ({
  ReactComponent: () => 'MockedSVG',
}))
jest.mock('@botbrews/assets/Icon/angleRight.svg', () => ({
  ReactComponent: () => 'MockedSVG',
}))
jest.mock('@botbrews/assets/Icon/loading.svg', () => ({
  ReactComponent: () => 'MockedSVG',
}))
jest.mock('@botbrews/assets/Icon/plus.svg', () => ({
  ReactComponent: () => 'MockedSVG',
}))

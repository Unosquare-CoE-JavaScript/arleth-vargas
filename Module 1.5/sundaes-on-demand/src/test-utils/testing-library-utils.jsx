import { render, rendet } from '@testing-library/react'
import { OrderDetailsProvider } from '../contexts/OrderDetails'
// since we are going to use wrapper several timer then we have to use this: 
const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

// re-export everything 
export * from '@testing-library/react'

// overwrite render method
export { renderWithContext as render}
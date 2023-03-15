import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { rest } from 'msw'
import DrinkSearch from './drink-search'
import { server } from '../mocks/server'

test('renders mock drink data', async () => {
  render(<DrinkSearch />)
  const user = userEvent.setup()
  const searchInput = screen.getByRole('searchbox')

  user.type(searchInput, 'vodka , {enter}')

  expect(
    await screen.findByRole('img', { name: /test drink/i })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: /test drink/i })
  ).toBeInTheDocument()
  expect(screen.getByText(/test ingredient/i)).toBeInTheDocument()
  expect(screen.getByText(/test instructions/i)).toBeInTheDocument()
})

test('renders no drink results ', async () => {
  server.use(
    rest.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ drinks: null }))
      }
    )
  )
  render(<DrinkSearch />)

  const user = userEvent.setup()
  const searchInput = screen.getByRole('searchbox')
  user.type(searchInput, 'vodka {enter}')

  expect(
    await screen.findByRole('heading', { name: /no drinks found/i })
  ).toBeInTheDocument()
})

test('renders service unavailable', async () => {
  server.use(
    rest.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php',
      (req, res, ctx) => {
        return res(ctx.status(503))
      }
    )
  )

  render(<DrinkSearch />)
  const user = userEvent.setup()
  const searchInput = screen.getByRole('searchbox')
  user.type(searchInput, '{enter}')

  expect(screen.queryByRole('heading')).not.toBeInTheDocument()
})

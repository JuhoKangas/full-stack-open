import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    likeAnecdote(state, action) {
      const id = action.payload
      const anecdoteToUpdate = state.find((a) => a.id === id)
      const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1,
      }
      return state.map((a) => (a.id !== id ? a : updatedAnecdote))
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { likeAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (anecdotes, id) => {
  const anecdoteToUpdate = anecdotes.find((a) => a.id === id)
  const updatedAnecdote = {
    ...anecdoteToUpdate,
    votes: anecdoteToUpdate.votes + 1,
  }
  return async (dispatch) => {
    await anecdoteService.voteAnecdote(updatedAnecdote, id)
    const updatedAnecdotes = anecdotes.map((a) =>
      a.id === id ? updatedAnecdote : a
    )
    dispatch(setAnecdotes(updatedAnecdotes))
  }
}

export default anecdoteSlice.reducer

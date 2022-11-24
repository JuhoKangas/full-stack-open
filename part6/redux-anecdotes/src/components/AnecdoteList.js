import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import {
  createNotification,
  removeNotification,
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const sortedAnecdotes = [...anecdotes]
  sortedAnecdotes.sort((a, b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const vote = async (id, anecdote) => {
    dispatch(voteAnecdote(anecdotes, id))
    dispatch(createNotification(`you voted ${anecdote}`))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }

  return (
    <>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList

import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    createNotification(state, action) {
      const notification = action.payload
      return notification
    },
  },
})

let timer = null

export const { createNotification } = notificationSlice.actions

export const setNotification = (content, time) => {
  return (dispatch) => {
    clearTimeout(timer)
    dispatch(createNotification(content))
    timer = setTimeout(() => {
      dispatch(createNotification(null))
    }, time * 1000)
  }
}

export default notificationSlice.reducer

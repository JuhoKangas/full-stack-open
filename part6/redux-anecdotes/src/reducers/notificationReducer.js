import { createSlice } from '@reduxjs/toolkit'

const initialState = 'This is notification'

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

export const { createNotification } = notificationSlice.actions
export default notificationSlice.reducer

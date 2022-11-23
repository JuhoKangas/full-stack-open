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
    removeNotification() {
      return null
    },
  },
})

export const { createNotification, removeNotification } =
  notificationSlice.actions
export default notificationSlice.reducer

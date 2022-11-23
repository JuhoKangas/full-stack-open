import { useSelector, useDispatch } from 'react-redux'
import { createNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const dispatch = useDispatch()
  dispatch(createNotification('new notification'))
  const notification = useSelector((state) => state.notifications)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  return <div style={style}>{notification}</div>
}

export default Notification

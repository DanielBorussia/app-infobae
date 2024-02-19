import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { type User } from '../shared/interfaces/User'

interface Props {
  user: User
}
const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <ListItem style={{ background: 'white', borderRadius: '10px' }} alignItems="flex-start">
        <ListItemAvatar>
        <Avatar
            alt={user.title}
            src={user.picture}
            sx={{ width: 56, height: 56 }}
        />
        </ListItemAvatar>
        <ListItemText primary={user.firstName + ' ' + user.lastName} secondary={user.title} style={{ marginLeft: '10px' }} />
  </ListItem>
  )
}

export default UserItem

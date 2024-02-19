// UI
import Box from '@mui/material/Box'
import { CircularProgress } from '@mui/material'

const Loading = ({ size = 40 }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CircularProgress color="primary" size={size} />
    </Box>
  )
}

export default Loading

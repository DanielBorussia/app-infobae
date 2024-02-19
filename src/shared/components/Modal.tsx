import { Dialog, DialogContent, DialogTitle, IconButton, styled } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { type ReactNode } from 'react'
interface Props {
  title: string
  isOpen: boolean
  handleClose: () => void
  body: ReactNode
}
const DialogStyled = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))
const Modal: React.FC<Props> = ({ title, isOpen, handleClose, body }) => {
  return (
        <DialogStyled
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={isOpen}
        maxWidth={'md'}
        fullWidth={true}
      >
        <div>
          {title && <DialogTitle id="simple-dialog-title">{title}</DialogTitle>}

          <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey'
          }}
        >
          <CloseIcon />
        </IconButton>

          <DialogContent>{body}</DialogContent>
        </div>
      </DialogStyled>
  )
}

export default Modal

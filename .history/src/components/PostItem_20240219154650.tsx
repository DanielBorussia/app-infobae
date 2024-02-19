import { useState } from 'react'
// Mui Material
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { type Post } from '../shared/interfaces/Post'
// Styles Component
import Modal from '../shared/components/Modal'
import PostSelected from './PostSelected'
// library
import { format } from 'date-fns'
interface Props {
  post: Post
}
const PostItem: React.FC<Props> = ({ post }) => {
  const [openModal, setOpenModal] = useState(false)

  const handleClickComments = () => {
    setOpenModal(true)
  }

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={post.owner.picture}>
          </Avatar>
        }

        title={post.owner.firstName + ' ' + post.owner.lastName}
        subheader={format(new Date(post.publishDate), 'dd/MM/yyyy') }
      />
      <CardMedia
        component="img"
        height="194"
        image={post.image}
        alt={post.text}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {post.text}
        </Typography>
        <Box display={'flex'}>
        {post.tags.map((tag, index) => (
            <p key={index}>#{tag}</p>
        ))}
        </Box>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleClickComments}>
          <ChatBubbleOutlineIcon />
        </IconButton>

      </CardActions>

    </Card>

     {/** Modal Dialog Post Selected */}
    <Modal
        title="Post"
        isOpen={openModal}
        body={
            <PostSelected
                post={post}
            />
        }
        handleClose={ () => { setOpenModal(false) }}
    />
    </>
  )
}

export default PostItem

import { Avatar, Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import { type Post } from '../shared/interfaces/Post'
import useGetComments from '../hooks/useGetComments'
import Divider from '@mui/material/Divider'
import { format } from 'date-fns'
import Loading from '../shared/components/Loading'
import { BoxComments, BoxPicture, ContainerListComments, ImgPost } from '../styles/PostSelectedStyled'

interface Props {
  post: Post
}
const PostSelected: React.FC<Props> = ({ post }) => {
  const { loading, comments } = useGetComments(post.id)
  return (
        <React.Fragment>
            <Box display={'flex'} >
                <BoxPicture>
                    <ImgPost src={post.image} alt={post.text} />
                </BoxPicture>
                <BoxComments>
                  <Card style={{ height: '100%', borderRadius: 0 }}>
                      <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" src={post.owner.picture}>
                          </Avatar>
                          }
                          title={post.owner.firstName + ' ' + post.owner.lastName}
                          subheader={format(new Date(post.publishDate), 'dd/MM/yyyy')}
                      />
                      <Divider />
                      <CardContent>

                          <ContainerListComments>
                              {loading
                                ? (
                                  <Loading />)
                                : (
                                      <Box>
                                          {comments.length > 0
                                            ? comments.map((comment, index) => (
                                              <CardHeader
                                              key={index}
                                              avatar={
                                                  <Avatar aria-label="recipe" src={comment.owner.picture}>
                                                  </Avatar>
                                              }
                                              title={comment.owner.firstName + ' ' + comment.owner.lastName}
                                              subheader={comment.message}
                                              />
                                            ))
                                            : <p>No hay comentarios</p>}
                                      </Box>
                                  )}

                          </ContainerListComments>
                          <Typography variant="body2" color="text.secondary" style={{ paddingTop: '10px' }}>
                              {post.likes} Me Gusta
                          </Typography>
                      </CardContent>
                  </Card>
                </BoxComments>
            </Box>
        </React.Fragment>
  )
}

export default PostSelected

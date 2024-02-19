import { Autocomplete, Box, Container, IconButton, Skeleton, Stack } from '@mui/material'
import useGetPosts from '../hooks/useGetPosts'
import PostItem from '../components/PostItem'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import useGetTags from '../hooks/useGetTags'
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff'
import { ContainerPostList } from '../styles/PostListStyled'

const PostList = () => {
  const [inputValue, setInputValue] = useState('')
  const [tag, setTag] = useState<string | null>('')
  const { loading, posts } = useGetPosts(tag)
  const { tags } = useGetTags()

  return (
    <Container>
      {/** Header Input Filter Tags */}
      <Box display={'flex'} justifyContent={'center'} marginTop={'20px'}>
        <Autocomplete
           onChange={(_event: React.SyntheticEvent, newValue: string | null) => {
             setTag(newValue)
           }}
          style={{ background: 'white' }}
          value={tag}
          inputValue={inputValue}
          onInputChange={(_event: React.SyntheticEvent, newInputValue) => {
            setInputValue(newInputValue)
          }}
          id="combo-box-demo"
          options={tags}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Tags" />}
        />
        <IconButton aria-label="delete" size="large" onClick={() => {
          setTag('')
          setInputValue('mi')
        }}>
          <FilterAltOffIcon />
        </IconButton>

      </Box>
    {loading
      ? (
        <ContainerPostList>
           {[1, 2, 3, 4, 5, 6].map((post) => (
              <Stack spacing={1} key={post}>
                 <Skeleton variant="circular" width={40} height={40} />
                 <Skeleton variant="rectangular" width={210} height={60} />
                 <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
           ))}
        </ContainerPostList>
        )
      : (
    /** List Post */
        <ContainerPostList>
          {posts.length > 0 && posts.map(post => (
                <PostItem post={post} key={post.id} />
          ))}
          {posts.length === 0 && <h2>No hay publicaciones disponibles</h2>}
        </ContainerPostList>
        )}
  </Container>
  )
}

export default PostList

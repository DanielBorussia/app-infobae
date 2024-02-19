import { useEffect, useState } from 'react'
import { getAllPosts, getPostsByTag } from '../shared/services/Posts'

import { type Post } from '../shared/interfaces/Post'

interface Response {
  data: Post[]
}
const useGetPosts = (tag: string | null) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const getAllPost = async () => {
    setLoading(true)
    getAllPosts()
      .then((response: Response) => {
        if (response?.data.length > 0) {
          setLoading(false)
          setPosts(response.data)
        }
      })
  }

  const getPostByTag = async () => {
    setLoading(true)
    getPostsByTag(tag)
      .then((response: Response) => {
        if (response?.data.length > 0) {
          setPosts(response.data)
        } else {
          setPosts([])
        }
      })
      .finally(() => { setLoading(false) })
  }
  useEffect(() => {
    if (tag !== '') {
      getPostByTag()
    } else {
      getAllPost()
    }
  }, [tag])

  return { loading, posts }
}

export default useGetPosts

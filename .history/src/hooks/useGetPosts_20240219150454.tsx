import { useEffect, useState } from 'react'
import { getAllPosts } from '../shared/services/Posts'

import { type Post } from '../shared/interfaces/Post'

interface Response {
  data: Post[]
}
const useGetPosts = () => {
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

  useEffect(() => {
    getAllPost()
  }, [])

  return { loading, posts }
}

export default useGetPosts

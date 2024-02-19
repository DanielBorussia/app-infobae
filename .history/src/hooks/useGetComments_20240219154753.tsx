import { useEffect, useState } from 'react'
import { type Comment } from '../shared/interfaces/Comment'
import { getCommentsByPost } from '../shared/services/Comments'

interface Response {
  data: Comment[]
}

const useGetComments = (idPost: number) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    getCommentsByPost(idPost)
      .then((response: Response) => {
        if (response?.data.length > 0) {
          setLoading(false)
          setComments(response.data)
        } else {
          setComments([])
        }
      })
      .finally(() => { setLoading(false) })
  }
  useEffect(() => {
    getData()
  }, [])

  return { loading, comments }
}

export default useGetComments

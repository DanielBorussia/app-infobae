import { useEffect, useState } from 'react'
import { getAllTags } from '../shared/services/Tags'

interface Response {
  data: string[]
}

const useGetTags = () => {
  const [tags, setTags] = useState<string[]>([])
  const [loadingDataTags, setLoading] = useState(false)

  const getDataTags = async () => {
    setLoading(true)
    getAllTags()
      .then((response: Response) => {
        if (response?.data.length > 0) {
          const tags = response.data.filter(tag => tag !== null && tag !== ' ' && tag !== '   ' && tag !== '     ' && tag !== '')
          setLoading(false)
          setTags(tags)
        }
      })
  }
  useEffect(() => {
    getDataTags()
  }, [])

  return { loadingDataTags, tags }
}

export default useGetTags

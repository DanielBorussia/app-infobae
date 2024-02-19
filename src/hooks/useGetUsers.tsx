import { useEffect, useState } from 'react'
import { type User } from '../shared/interfaces/User'
import { getAllUsers } from '../shared/services/User'

interface Response {
  data: User[]
}

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)

  const getDataUsers = async () => {
    setLoading(true)
    getAllUsers()
      .then((response: Response) => {
        if (response?.data.length > 0) {
          setLoading(false)
          setUsers(response.data)
        }
      })
  }
  useEffect(() => {
    getDataUsers()
  }, [])

  return { loading, users }
}

export default useGetUsers

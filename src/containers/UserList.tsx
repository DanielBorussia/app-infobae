import { Container, Skeleton, Stack } from '@mui/material'
import useGetUsers from '../hooks/useGetUsers'
import UserItem from '../components/UserItem'
import { ContainerUserList } from '../styles/UserListStyled'
const UserList = () => {
  const { loading, users } = useGetUsers()
  return (
        <Container>
        {loading
          ? (
            <ContainerUserList>
              {[1, 2, 3, 4, 5, 6].map((post) => (
                  <Stack spacing={1} key={post}>
                    <Skeleton variant="rectangular" width={210} height={60} />
                    <Skeleton variant="rounded" width={210} height={60} />
                  </Stack>
              ))}

            </ContainerUserList>
            )
          : (
        /** List User */
            <ContainerUserList>
              {users.length > 0 && users.map(user => (
                    <UserItem user={user} key={user.id} />
              ))}
              {users.length === 0 && <h2>No hay usuarios para mostrar.</h2>}
            </ContainerUserList>
            )}
    </Container>
  )
}

export default UserList

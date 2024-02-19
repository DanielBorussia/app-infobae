import React, { useState } from 'react'
// UI
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import GoogleIcon from '@mui/icons-material/Google'
import LogoutIcon from '@mui/icons-material/Logout'
import { Avatar, Link } from '@mui/material'
import { useGoogleLogin } from '@react-oauth/google'
// Redux
import { addUserLogin, getDataUser, removeUser } from '../redux/modules/auth'
import { useDispatch, useSelector } from 'react-redux'
// styled
import { BoxButtonLogin } from '../styles/HeaderStyled'
// interfaces
import { type AppStore } from '../shared/interfaces/AppStore'
import { type UserLogin } from '../shared/interfaces/Profile'

const Header = () => {
  const dispatch = useDispatch()
  const profile = useSelector((state: AppStore) => state.user)
  const [anchorElNav, setAnchorElNav] = useState<Element | null>(null)
  const [anchorElUser, setAnchorElUser] = useState<Element | null>(null)

  const handleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      localStorage.setItem('access_token', codeResponse.access_token)
      getDataUser((user: UserLogin) => {
        dispatch(addUserLogin(user))
      })
    },
    onError: (_error) => { console.log('Login Failed:', _error) }
  })

  const handleOpenNavMenu = (event: React.SyntheticEvent) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseSession = () => {
    dispatch(removeUser(profile))
  }

  const handleOpenUserMenu = (event: React.SyntheticEvent) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static" color='warning'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              INFOBAE
            </Typography>

            {/* Links Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {/** Links Mobile */}
              <MenuItem>
                <Link href={'/posts'} underline="none">
                  <Typography textAlign="center">Publicaciones</Typography>
                </Link>
              </MenuItem>

              {profile.name && (
                <MenuItem>
                <Link href={'/users'} underline="none">
                  <Typography textAlign="center">Usuarios</Typography>
                </Link>
                </MenuItem>
              )}

              {profile.name && (
                <MenuItem onClick={handleCloseSession}>
                  <Link underline="none">
                    <Typography textAlign="center">Cerrar Sesión</Typography>
                  </Link>
                </MenuItem>
              )}

            </Menu>
          </Box>

          {/* Logo Mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
           INFOBAE
          </Typography>

          {/* Links Desk */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link href='/posts' underline="none">
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Posts
              </Button>
            </Link>
            {profile.name && (
            <Link href='/users' underline="none">
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Usuarios
              </Button>
            </Link>
            )}
          </Box>

          {profile?.name
            ? (
            <Box display={'flex'} alignItems={'center'}>
              <Typography
                variant="body1"
                noWrap
                sx={{ display: { xs: 'none', sm: 'block' } }}
                style={{ marginRight: '20px' }}>Hola, {profile.name}
              </Typography>
              <Tooltip title="Opciones">
                <React.Fragment>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={profile.name} src={profile?.picture} />
                </IconButton>
                <IconButton onClick={handleCloseSession}>
                <LogoutIcon sx={{ color: '#ffffff' }}/>
              </IconButton>
              </React.Fragment>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >

              </Menu>
            </Box>
              )
            : (
              <BoxButtonLogin>
            <Button
              variant="text"
              onClick={() => { handleLogin() }}
              sx={{ my: 2, color: 'white', display: 'block' }}
             >
              Hola, Inicia Sesión
            </Button>
             <IconButton onClick={handleCloseSession}>
             <GoogleIcon sx={{ color: '#ffffff' }}/>
           </IconButton>
           </BoxButtonLogin>
              )}
        </Toolbar>
      </Container>

    </AppBar>
  )
}

export default Header

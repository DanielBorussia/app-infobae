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
import MenuItem from '@mui/material/MenuItem'
import { Link } from '@mui/material'

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<Element | null>(null)

  const handleOpenNavMenu = (event: React.SyntheticEvent) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
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
              <MenuItem>
                <Link href={'/users'} underline="none">
                  <Typography textAlign="center">Usuarios</Typography>
                </Link>
              </MenuItem>
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

            <Link href='/users' underline="none">
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Usuarios
              </Button>
            </Link>

          </Box>

        </Toolbar>
      </Container>

    </AppBar>
  )
}

export default Header

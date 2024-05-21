import { AppBar, Container, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { actions } from '../../../app/model';

export const NavBar = () => {
  const token = useAppSelector((state) => state.authReducer.token)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const logout = actions.logout
  return (
    <AppBar component="nav">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'flex-end', flexWrap: 'wrap' }}
        >
          {!token ? (
            <Button color="inherit" sx={{ border: '0' }} onClick={() => navigate('/login')}>
              <Typography variant="h6">login</Typography>
            </Button>
          ) : (
            <Button color="inherit" sx={{ border: '0' }} onClick={() => dispatch(logout())}>
              <Typography variant="h6">Exit</Typography>
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

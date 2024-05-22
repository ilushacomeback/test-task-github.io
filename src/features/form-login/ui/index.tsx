import {
  Stack,
  Button,
  FormControl,
  FormGroup,
  TextField,
  Box,
  // Snackbar,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../entities';

export const FormLogin = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorLogin, setErrorLogin] = useState<boolean>(false);
  // const [errorNetwork, setErrorNetwork] = useState<boolean>(false);
  const [getData] = useLoginMutation();
  const navigate = useNavigate();

  const handleSetUsername = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUsername(e.target.value);
    setErrorLogin(false);
  };
  const handleSetPassword = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(e.target.value);
    setErrorLogin(false);
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const user = { username, password };
      const response = await getData(user);
      if (response?.error) {
        throw new Error('invalid login');
      }
      navigate('/');
    } catch (e) {
      if (e instanceof Error && e.message === 'invalid login') {
        setErrorLogin(true);
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleOnSubmit}>
      <FormGroup>
        <Stack spacing={2}>
          <FormControl>
            <TextField
              autoFocus
              type="text"
              required
              label="Ваше имя"
              variant="standard"
              value={username}
              onChange={handleSetUsername}
              error={errorLogin}
            />
          </FormControl>
          <FormControl>
            <TextField
              type="password"
              required
              label="Пароль"
              variant="standard"
              value={password}
              onChange={handleSetPassword}
              error={errorLogin}
              helperText={errorLogin ? 'Имя или пароль неправильные' : ''}
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </FormGroup>
      {/* <Snackbar open={errorNetwork} autoHideDuration={1500} /> */}
    </Box>
  );
};

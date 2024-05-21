import { Stack, Input, Button, FormControl, FormGroup } from '@mui/material';
import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../entities';

export const FormLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [getData] = useLoginMutation();
  const navigate = useNavigate()

  const handleSetUsername = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUsername(e.target.value);
  };
  const handleSetPassword = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = async () => {
    try {
      const user = { username, password };
      const response = await getData(user);
      if (response?.error) {
        throw new Error('invalid login');
      }
      navigate('/data');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Stack spacing={2}>
          <FormControl>
            <Input
              type="text"
              placeholder="Ваше имя..."
              value={username}
              onChange={handleSetUsername}
            />
          </FormControl>
          <FormControl>
            <Input
              type="password"
              placeholder="Пароль..."
              value={password}
              onChange={handleSetPassword}
            />
          </FormControl>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </FormGroup>
    </Form>
  );
};

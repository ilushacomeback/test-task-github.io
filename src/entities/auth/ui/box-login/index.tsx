import { Container } from '@mui/material';
import React from 'react';

interface Props {
  FormLogin: React.ComponentType
}

export const BoxLoginForm = ({ FormLogin }: Props) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        display: 'flex'
      }}
    >
      <FormLogin />
    </Container>
  );
};

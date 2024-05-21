type DataAuth = {
  user: string | null;
  token: string | null;
};

export function getUser(): DataAuth {
  const user = localStorage.getItem('user');
  if (typeof user === 'string') {
    return JSON.parse(user);
  }
  return { user: null, token: null };
}

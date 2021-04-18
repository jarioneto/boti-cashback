import { Auth } from 'types';

const AUTH = 'auth';

export const hasAuthenticated = (): boolean => {
  return !!localStorage.getItem(AUTH);
};

export const authenticate = (auth: Auth): void => {
  localStorage.setItem(AUTH, JSON.stringify(auth));
};

export const destroySession = (): void => {
  localStorage.removeItem(AUTH);
};

export const getAuth = (): Auth => {
  const authData = localStorage.getItem(AUTH);
  const auth: Auth = authData ? JSON.parse(authData) : null;

  return auth;
};

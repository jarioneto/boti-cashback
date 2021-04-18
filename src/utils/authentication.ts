import { Auth } from 'types';

const AUTH = 'auth';

export const hasAuthenticated = (): boolean => {
  return !!sessionStorage.getItem(AUTH);
};

export const authenticate = (auth: Auth): void => {
  sessionStorage.setItem(AUTH, JSON.stringify(auth));
};

export const destroy = (): void => {
  sessionStorage.removeItem(AUTH);
};

export const getAuth = (): Auth => {
  const authData = sessionStorage.getItem(AUTH);
  const auth: Auth = authData ? JSON.parse(authData) : null;

  return auth;
};

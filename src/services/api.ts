// Types
import { AxiosResponse } from 'axios';

import {
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  LogoutResponse,
  OrdersRequest,
  User,
  Order
} from 'types';

// Utils
import { parseQuery } from 'utils/parsers';

// Services
import http from './http';

const login = async (data: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
  return http.post<LoginResponse>('/login', data);
};

const logout = async (data: LogoutRequest): Promise<AxiosResponse<LogoutResponse>> => {
  return http.delete<LogoutResponse>('/logout', { data });
};

const createUser = async (data: Partial<User>): Promise<AxiosResponse<User>> => {
  return http.post<User>('/users', data);
};

const createOrder = async (data: Partial<Order>): Promise<AxiosResponse<Order>> => {
  return http.post<Order>('/orders', data);
};

const fetchOrders = async (data: OrdersRequest): Promise<AxiosResponse<Order[]>> => {
  const params = {
    userId: data.userId,
    _page: data.page,
    _limit: data.limit
  };

  const query = parseQuery(params);

  return http.get<Order[]>(`/orders?${query}`);
};

const fetchBalance = async (userId: number): Promise<AxiosResponse<number>> => {
  return http.get<number>(`/orders?userId=${userId}`);
};

export { login, logout, createUser, createOrder, fetchOrders, fetchBalance };

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  name: string;
}

export interface LogoutRequest {
  id: number;
}

export interface LogoutResponse {
  message: string;
}

export interface OrdersRequest {
  userId: number;
  page: number;
  limit: number;
}

export interface CashbackResponse {
  total: number;
}

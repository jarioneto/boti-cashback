type OrderStatus = 'Aprovado' | 'Reprovado' | 'Em validação';

export interface Order {
  id: number;
  userId: number;
  code: number;
  date: string;
  total: number;
  cashbackPercent: number;
  cashbackTotal: number;
  status: OrderStatus;
}

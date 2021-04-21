type OrderStatus = 'Aprovado' | 'Reprovado' | 'Em validação';

export interface Order {
  id: number;
  userId: number;
  code: string;
  date: number;
  total: number;
  cashbackPercent: number;
  cashbackTotal: number;
  status: OrderStatus;
}

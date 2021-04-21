/* eslint-disable import/no-duplicates */
import { parse, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

const parseQuery = (params: Record<string, string | number | boolean>): string => {
  return Object.keys(params)
    .filter((key) => !!params[key])
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
};

const parseCurrency = (price: number): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return formatter.format(price);
};

const parseDate = (date: number): string => {
  return format(new Date(date), 'dd LLLL yyyy', { locale: pt });
};

const parseDateToTimestamp = (date: string): number => {
  return parse(date, 'dd/MM/yyyy', new Date()).getTime();
};

export { parseQuery, parseCurrency, parseDate, parseDateToTimestamp };

import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false
};

export const maskCurrency = createNumberMask({
  ...defaultMaskOptions
});

export const maskDate = [/[0-3]/, /[1-9]/, '/', /[0-3]/, /[1-9]/, '/', /\d/, /\d/, /\d/, /\d/];

export const maskCPF = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
];

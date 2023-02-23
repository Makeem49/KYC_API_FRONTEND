import moment from 'moment';

export const commaformatter = (value: string | number): string => {
  const val = value.toString().split(',').join('');
  return Intl.NumberFormat('en-US').format(Number(val));
};

export function formatNumberWithCommas(value: number | string): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const decimalFormatter = (value: number | string): string => {
  const val = value.toString().split(',').join('');
  return Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(val));
};

export const uniques = (arr: any[]): any[] => [...Array.from(new Set(arr))];

export const shortDateFormatter = (value: string | Date): string => {
  return new Date(value).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export const dayDateFormatter = (value: string | Date): string => {
  return new Date(value).toLocaleDateString('en-US', {
    day: '2-digit',
    weekday: 'short',
  });
};

export const timeFormatter = (value: string | Date): string => {
  const dateString = value;

  const date = new Date(dateString);

  let minutes = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const formattedTime = minutes;

  // console.log(`${formattedTime}`); // Output: "14:54:0"
  return `${formattedTime}`;
};

// const dateString = '2023-02-15T14:54:00.457Z';
// const date = new Date(dateString);

// const hours = date.getUTCHours();
// const minutes = date.getUTCMinutes();
// const seconds = date.getUTCSeconds();

// let formattedHours = hours % 12;
// if (formattedHours === 0) {
//   formattedHours = 12;
// }
// const amPm = hours >= 12 ? 'PM' : 'AM';

// const formattedTime = `${formattedHours}:${minutes}:${seconds} ${amPm}`;

// console.log(formattedTime); // Output: "2:54:0 PM"

// const m = moment(new Date('2019/06/01 14:04:03'));

// m.format('h:mma'); // '2:04pm'

export const generateInitials = (fullname: string): string => {
  const firstname = fullname.split(' ')[0];
  const lastname = fullname.split(' ')[1];

  if (lastname) {
    return `${firstname.substring(0, 1)} ${lastname.substring(0, 1)}`;
  }
  return `${firstname.substring(0, 1)} ${firstname.substring(1, 2)}`;
};

export const calculatePercentageChange = (curr: number, prev: number) => {
  if (!curr || !prev) return 0;
  return curr / prev - 1 * 100;
};

export const calculatePercentageRadius = (curr: number, tot: number) => {
  if (!curr || !tot) return 0;
  return (curr / tot) * 30;
};

export const calculateTotal = (num1: number, num2: number, num3: number) => {
  if (!num1 || !num2 || num3) return 0;
  return num1 + num2 + num3;
};

export function currencyFormatter(amt: number): string {
  const Formatter = Intl.NumberFormat();

  return Formatter.format(amt);
}

export function nFormatter(num: number) {
  const lookup = [
    { value: 1, symbol: '' },

    { value: 1e3, symbol: 'k' },

    { value: 1e6, symbol: 'M' },

    { value: 1e9, symbol: 'B' },

    { value: 1e12, symbol: 'T' },

    { value: 1e15, symbol: 'P' },

    { value: 1e18, symbol: 'E' },
  ];

  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });

  return item ? currencyFormatter(num / item.value) + `${item.symbol}` : '0';
}

export const currentNumberFormatter = (amt: any) =>
  Intl.NumberFormat().format(amt || 0);

export function checkCountryCode(str: string) {
  if (str === 'NG') {
    return '₦';
  } else {
    return 'K';
  }
}

export const specificDay = (value: string | Date): string => {
  return moment(value).format('Do dddd');
};

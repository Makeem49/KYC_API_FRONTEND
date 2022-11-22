export const commaformatter = (value: string | number): string => {
  const val = value.toString().split(',').join('');
  return Intl.NumberFormat('en-US').format(Number(val));
};

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

export const generateInitials = (fullname: string): string => {
  const firstname = fullname.split(' ')[0];
  const lastname = fullname.split(' ')[1];

  if (lastname) {
    return `${firstname.substring(0, 1)} ${lastname.substring(0, 1)}`;
  }
  return `${firstname.substring(0, 1)} ${firstname.substring(1, 2)}`;
};

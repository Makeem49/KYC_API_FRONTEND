interface prop {
  amount: number;
  kobo?: boolean;
}
const Numbers = ({ amount, kobo = false }: prop) => {
  const number = amount.toString().split(".");
  const arr = number[0].split("");
  const rev = arr.reverse().map((item, index) => {
    if ((index + 1) % 3 === 0 && index + 1 !== arr.length) return "," + item;
    return item;
  });
  const value = rev.reverse().join("");
  if (kobo) {
    return value + ".00";
  }
  return value;
};

export default Numbers;

import axios from "axios";

export const getFunFact = async (number: number) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${number}?json`);
    return response.data.text;
  } catch (error) {
    throw new Error("Could not fetch fun fact");
  }
};

export const isArmstrong = (num: number): boolean => {
  const digits = num.toString().split("").map(Number);
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(digit, digits.length),
    0
  );
  return sum === num;
};

export const isPerfect = (num: number): boolean => {
  if (num <= 0) return false;
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

export const isPrime = (num: number): boolean => {
  // Handle special cases
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  // Check odd divisors up to square root
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

export const getDigitSum = (num: number): number => {
  return String(Math.abs(num))
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
};

export const getProperties = (num: number): string[] => {
  const properties: string[] = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(num % 2 === 0 ? "even" : "odd");
  return properties;
};

export const classifyNumberProperties = (num: number) => {
  const properties: string[] = [];
  if (isArmstrong(num)) properties.push("armstrong");
  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");
  return properties;
};

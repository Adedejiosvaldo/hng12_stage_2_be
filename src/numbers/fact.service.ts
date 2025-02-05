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
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

export const classifyNumberProperties = (num: number) => {
  const properties: string[] = [];
  if (isArmstrong(num)) properties.push("armstrong");
  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");
  return properties;
};
    
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

export const classifyNumberProperties = (num: number) => {
  const properties: string[] = [];

  // Sign property
  properties.push(num === 0 ? "zero" : num > 0 ? "positive" : "negative");

  // Armstrong property
  if (isArmstrong(num)) properties.push("armstrong");

  // Even/Odd property (zero is considered even)
  if (num % 2 === 0) properties.push("even");
  else properties.push("odd");

  // Perfect number property (only check if positive)
  if (num > 0 && isPerfect(num)) properties.push("perfect");

  return properties;
};

// export const classifyNumberProperties = (num: number) => {
//   const properties: string[] = [];
//   if (isArmstrong(num)) properties.push("armstrong");
//   if (num % 2 === 0) properties.push("even");
//   else properties.push("odd");
//   return properties;
// };

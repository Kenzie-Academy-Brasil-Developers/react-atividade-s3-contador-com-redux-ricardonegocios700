export const somar = (number) => {
  console.log("na action+: ", number);
  return {
    type: "COUNTER_SOMAR",
    number: number,
  };
};
export const subtrair = (number) => {
  console.log("na action-: ", number);
  return {
    type: "COUNTER_SUBTRAIR",
    number: number,
  };
};

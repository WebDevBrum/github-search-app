export const removeFirstWord = (str: string): string => {
  const indexOfSpace = str.indexOf(" ");

  if (indexOfSpace === -1) {
    return "";
  }

  return str.substring(indexOfSpace + 1);
};

export const convertDate = (date: string): string => {
  let dateC = new Date(date);
  const dateString = dateC.toDateString();

  const formatted = removeFirstWord(dateString);

  return formatted;
};

export const addZero = number => (number < 10 ? `0${number}` : `${number}`);

export const convertString = input => {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    switch (char) {
      case 'W':
        result += '+';
        break;
      case 'L':
        result += '-';
        break;
      case 'D':
        result += 'x';
        break;
      default:
        // If the character is not 'W', 'L', or 'D', leave it unchanged
        result += char;
    }
  }
  return result;
};

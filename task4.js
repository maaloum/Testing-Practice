const capitalizeString = (string) => {
  const newStr = string.charAt(0).toUpperCase() + string.slice(1);
  return newStr
}

module.exports = capitalizeString;

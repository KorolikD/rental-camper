export function convertCamelCaseToNormal(camelCaseWord) {
  const normalWord = camelCaseWord.replace(/([a-z])([A-Z])/g, '$1 $2');
  return normalWord.charAt(0).toUpperCase() + normalWord.slice(1).toLowerCase();
}

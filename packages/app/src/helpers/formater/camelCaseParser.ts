const isCamelCase = (text: string) => {
  return /^[a-z]+(?:[A-Z][a-z]*)*$/.test(text);
}

const camelToPascalCase = (text: string) => {
  if (!isCamelCase(text)) return text;
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export { camelToPascalCase }
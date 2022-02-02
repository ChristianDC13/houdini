export const houdini = (content: TemplateStringsArray, text: string, mapping: RegExp = /"/g) =>
  text
    .split('')
    .map((char) => (mapping.test(char) ? `\\${char}` : char))
    .join('');

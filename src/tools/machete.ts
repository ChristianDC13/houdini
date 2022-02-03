export const machete = (content: TemplateStringsArray, text: string, mapping: RegExp = /"/g) =>
  text ? text.replace(mapping, '') : text;

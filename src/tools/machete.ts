export const machete = (content: TemplateStringsArray, text: string, mapping: RegExp = /"/g) =>
  text.replace(mapping, '');

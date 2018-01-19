/**
 *
 * @type {[string,string,string,string,string,string,string]}
 */
const textTypes = [
  'text',
  'span',
  'strong',
  'a',
  's',
  'em',
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'heading5',
  'heading6',
  // 'h7',
  // 'h8',
  // 'h9',
  'br',
];

/**
 *
 * @param node
 * @return {boolean}
 */
export default function getIsTextType(type) {
  return textTypes.indexOf(type) > -1;
}

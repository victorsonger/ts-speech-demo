/**
 * 数字相加
 * @param {number} a 
 * @param {number} b  
 * @return {number}
 */
function add(a:number, b:number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw TypeError('error');
  }
  return a + b;
}
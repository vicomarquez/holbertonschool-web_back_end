export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const newarr = [];
    newarr.push(appendString + idx);
  }

  return newarr;
}

export default function appendToEachArrayValue(array, appendString) {
  const newarr = [];
  for (const idx of array) {
    newarr.push(appendString + idx);
  }

  return newarr;
}

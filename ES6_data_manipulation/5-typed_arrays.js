export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const Int8 = new DataView(buffer, 0);

  Int8.setInt8(position, value);

  return Int8;
}

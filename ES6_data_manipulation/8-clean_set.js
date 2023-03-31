export default function cleanSet(set, startString) {
  let res = '';
  set.forEach((obj) => {
    if (obj && obj.startsWith(startString)) res += `${obj.slice(startString.length)}-`;
    });
  return result.slice(0, res.length - 1);
}

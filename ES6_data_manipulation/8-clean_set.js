export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') return '';

  let res = '';
  
  set.forEach((obj) => {
    if (obj && obj.startsWith(startString)) res += `${obj.slice(startString.length)}-`;
  });
  return res.slice(0, res.length - 1);
}

export default function formatMoney(x) {
  let formated = x.toString();
  let pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(formated))
    formated = formated.replace(pattern, "$1 $2");
  return formated;
}
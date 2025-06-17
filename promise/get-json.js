export function GetJson(url) {
  return fetch(url).then((res) => res.json());
}

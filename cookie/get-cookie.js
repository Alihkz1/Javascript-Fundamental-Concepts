function getCookies() {
  let cookies = new Map();
  let all = document.cookie;
  let list = all.split("; ");
  for (let cookie of list) {
    if (!cookie.includes("=")) continue;
    let p = cookie.indexOf("=");
    let name = cookie.substring(0, p);
    let value = cookie.substring(p + 1);
    value = decodeURIComponent(value);
    cookies.set(name, value);
  }
}

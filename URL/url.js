let url = new URL("http://192.168.2.225:8080/users");
let params = new URLSearchParams();
params.append("creature", "cat");
console.log(params.toString());
url.search = params;
console.log(url.href);

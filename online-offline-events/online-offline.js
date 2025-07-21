if (navigator.onLine) {
  alert("U r online rn");
}

window.addEventListener("online", () => alert("online"));
window.addEventListener("offline", () => alert("offline"));

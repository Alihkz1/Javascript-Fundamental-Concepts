document.cookie = "cat=meow; max-age=20; path=/";

function deleteCookie(cookieName) {
  document.cookie = `${cookieName}=; expires=thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

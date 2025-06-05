class HTTPError extends Error {
  constructor(message, status, url) {
    super(`URL:${url}; Error:${message}; Status:${status}`);
    this.message = message;
    this.status = status;
    this.url = url;
  }

  get name() {
    return "HTTPError";
  }
}

throw new HTTPError("not authorize", 401, "user/login");

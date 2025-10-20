const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const backendUrl = isLocal
  ? "http://localhost:8080/api/v1"
  : "https://investincameroun.com/backend/api/v1";

export {
    backendUrl
}

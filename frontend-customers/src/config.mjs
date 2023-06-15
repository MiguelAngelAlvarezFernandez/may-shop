const BACKEND_URL = ["localhost", "127.0.0.1"].includes(window.location.hostname)
    ? "http://localhost:8000"
    : "https://may-shop.onrender.com"

const FRONTEND_URL =  window.location.hostname === "localhost" ? "http://localhost:3000" : "https://may-shop-clients-frontend.onrender.com/"

export {
    BACKEND_URL,
    FRONTEND_URL
}
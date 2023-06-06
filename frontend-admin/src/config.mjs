const BACKEND_URL = window.location.hostname === "localhost" ?  "http://localhost:8000" : "https://may-shop.onrender.com"
const FRONTEND_URL =  window.location.hostname === "localhost" ? "http://localhost:3000" : "https://may-shop-admin-frontend.onrender.com"

export {
    BACKEND_URL,
    FRONTEND_URL
}
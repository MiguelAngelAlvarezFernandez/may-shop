const BACKEND_URL = location.hostname === "localhost" ?  "http://localhost:8000" : "https://may-shop.onrender.com"
const FRONTEND_URL =  location.hostname === "localhost" ? "http://localhost:3000" : "https://may-shop-clients-frontend.onrender.com/"

export {
    BACKEND_URL,
    FRONTEND_URL
}
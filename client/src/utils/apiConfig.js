function getApiUrl() {
    const hostname = window.location.hostname;
    if (hostname === "localhost") {
        return "http://localhost:3001";
    } else {
        return `http://${hostname}:3001`;
    }
}

export default getApiUrl;

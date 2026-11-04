const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// This handles routing web traffic through the proxy
app.use('/', createProxyMiddleware({
    target: 'https://www.google.com', // We'll change this to target your game site later
    changeOrigin: true,
    secure: false,
    ws: true // Supports websocket connections (needed for many games)
}));

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
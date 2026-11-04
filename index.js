const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', createProxyMiddleware({
    target: 'https://www.google.com',
    changeOrigin: true,
    secure: false,
    ws: true
}));

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
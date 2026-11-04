const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target: 'https://www.google.com',
    changeOrigin: true,
    secure: false,
    ws: true
}));

// Vercel requires exporting the app instead of calling app.listen()
module.exports = app;
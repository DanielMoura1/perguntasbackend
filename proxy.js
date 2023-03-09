const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'http://sua-api.com',
  changeOrigin: true,
  secure: true,
}));

app.listen(3000);

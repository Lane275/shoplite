const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));
 'public')));

// 模拟数据库
let orders = [];

// API
app.post('/api/order', (req, res) => {
  orders.push(req.body);
  res.json({ success: true, orders });
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// 启动
app.listen(PORT, () => console.log(`ShopLite PWA running at http://localhost:${PORT}`));

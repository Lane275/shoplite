async function placeOrder() {
  const res = await fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item: '商品A', time: new Date().toISOString() })
  });
  const data = await res.json();
  const list = document.getElementById('orders');
  list.innerHTML = data.orders.map(o => `<li>${o.item} - ${o.time}</li>`).join('');
}

async function loadOrders() {
  const res = await fetch('/api/orders');
  const data = await res.json();
  const list = document.getElementById('orders');
  list.innerHTML = data.map(o => `<li>${o.item} - ${o.time}</li>`).join('');
}

loadOrders();

// 注册 Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
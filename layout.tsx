import React from 'react';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<div style={{ fontFamily:'system-ui, sans-serif', padding:24 }}>
    <h2>Happy Time — Admin</h2>
    <nav style={{ display:'flex', gap:12, marginBottom:16 }}>
      <a href="/">Dashboard</a>
      <a href="/products">Products</a>
      <a href="/offers">Offers</a>
      <a href="/loyalty">Loyalty</a>
      <a href="/orders">Orders</a>
      <a href="/bookings">Bookings</a>
      <a href="/rewards">Rewards</a>
      <a href="/redemptions">Redemptions</a>
    </nav>
    {children}
  </div>);
}
export default function Sidebar() {
  return (
    <aside style={{ width: '200px', padding: '1rem', background: '#eee' }}>
      <h2>Sidebar</h2>
      <nav>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/invoices">Invoices</a></li>
          <li><a href="/customers">Customers</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ padding: '2rem', border: '2px dashed #999' }}>
      <h2>Dashboard Layout</h2>
      <div>{children}</div>
    </div>
  );
}

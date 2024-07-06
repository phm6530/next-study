export default function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>에프터 </div>
      {children}
    </>
  );
}

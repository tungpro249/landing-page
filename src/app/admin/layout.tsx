// layout.tsx trong admin — không có Header/Footer
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {console.log("Using admin layout");

  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

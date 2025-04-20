import "./globals.css";

export const metadata = {
  title: "Next Js Page Transitions",
  description: "Scroll Page Navigations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

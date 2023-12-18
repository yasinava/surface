import AuthSessionProvider from "@/components/AuthProvider/AuthSessionProvider";
import "../sass/index.scss";
import Navbar from "@/components/navbar/page";
import ReduxProvider from "@/components/reduxProvider/ReduxProvider";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/BYekan/BYekan+.ttf",
  display: "swap",
});

export const metadata = {
  title: "افق شارجه",
  description: "خرید عمده سرفیس",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" className={myFont.className}>
      <body suppressHydrationWarning={true}>
        <main>
          <AuthSessionProvider>
            <ReduxProvider>
              <Navbar />
              {children}
            </ReduxProvider>
          </AuthSessionProvider>
        </main>
      </body>
    </html>
  );
}

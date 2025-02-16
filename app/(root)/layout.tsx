import "@/assets/styles/globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import { auth } from "@/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <div className="flex h-screen flex-col">
      <Header session={session} />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}

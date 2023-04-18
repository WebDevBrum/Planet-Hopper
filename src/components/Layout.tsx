import { ReactNode } from "react";
import Header from "./header/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* You can add a footer component here if needed */}
    </div>
  );
}

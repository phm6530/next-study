import { MSWComponent } from "@/app/_component/MSWcomponent";
import { ReactNode } from "react";

export const metadata = {
  title: "create - next - app",
  description: "설명",
};

export default function Rootlayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html>
        <body>
          <MSWComponent />
          {children}
        </body>
      </html>
    </>
  );
}

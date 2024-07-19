"use client";

import Framer from "@/app/_component/animation/Framer";
import { ReactNode } from "react";

// export const metadata = {
//   title: "create - next - app",
//   description: "설명",
// };

export default function Rootlayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html>
        <body>
          <Framer>{children}</Framer>
        </body>
      </html>
    </>
  );
}

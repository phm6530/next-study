import { ReactNode } from "react";
import classes from "./loginLayout.module.scss";
import { Inter } from "next/font/google";

import "../styles/globals.scss";

type Props = { children: ReactNode; modal: ReactNode };

const inter = Inter({ subsets: ["latin"] });

export default function layout({ children, modal }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modal-backdrop"></div>
        <div className={classes.mainGrid}>
          {modal}
          {children}
        </div>
      </body>
    </html>
  );
}

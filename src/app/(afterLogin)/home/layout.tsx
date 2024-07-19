import Framer from "@/app/_component/animation/Framer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Framer> {children}</Framer>;
}

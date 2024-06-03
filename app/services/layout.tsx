import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Services',
    description: 'Découvrez nos Services ici'
}


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        {children}
      </>
    );
  }
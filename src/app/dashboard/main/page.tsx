import { SimpleWidget } from "@/components/SimpleWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Data overview',
}

export default function MainPage() {
  return (
    <div className="m-2">
      <h1 className="text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

      <div className="flex flex-wrap items-center justify-center">
        <SimpleWidget />
      </div>
    </div>
  );
}
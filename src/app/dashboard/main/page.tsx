import { SimpleWidget } from "@/components/dashboard/SimpleWidget";
import { WidgetsGrid } from "@/components/dashboard/WidgetsGrid";
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
      <WidgetsGrid />
    </div>
  );
}
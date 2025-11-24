// src/App.tsx
import { useState } from "react";
import "./index.css";
import AppLayout from "./layout/app-layout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <AppLayout breadcrumbs={[{ title: "Home", href: "/" }]}>
      <HomePage />
    </AppLayout>
  );
}

// src/App.tsx

import "./index.css";
import AppLayout from "./layout/app-layout";
import HomePage from "./pages/HomePage";
import Test from "./pages/Test";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BreadcrumbItem } from "./resources/js/types/types";

const appBreadcrumps: BreadcrumbItem[] = [
  { title: "Home", href: "/" },
  { title: "Test", href: "/test" },
];

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout breadcrumbs={appBreadcrumps}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

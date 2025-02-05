import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import Task from "./pages/dashboard/task/Task";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<DashboardLayout />}>
                    <Route index element={<Task />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

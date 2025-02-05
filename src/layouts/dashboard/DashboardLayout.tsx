import { Outlet } from "react-router";
import Sidebar from "../../pages/dashboard/components/Sidebar";
import { createContext, useContext, useState } from "react";

type DashboardLayoutContextType = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardLayoutContext = createContext<DashboardLayoutContextType>({} as DashboardLayoutContextType);

export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <DashboardLayoutContext.Provider
            value={{
                isSidebarOpen,
                setIsSidebarOpen,
            }}
        >
            <Sidebar />
            <div className="lg:ml-72 pl-4 py-4">
                <div className="bg-white rounded-tl-lg rounded-bl-lg border border-neutral-200">
                    <Outlet />
                </div>
            </div>
        </DashboardLayoutContext.Provider>
    );
}

export function useDashboardLayoutContext() {
    const context = useContext(DashboardLayoutContext);
    if (!context) {
        throw new Error("Must be wrapped in <DashboardLayout/>");
    }
    return context;
}

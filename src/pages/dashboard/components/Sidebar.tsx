import { RiDeleteBinLine, RiEditLine, RiFocusLine, RiGroupLine, RiHomeLine, RiListCheck3, RiMailLine, RiMoreLine, RiSearchLine } from "@remixicon/react";
import SidebarWorkspaceDropdown from "./SidebarWorkspaceDropdown";
import Input from "../../../components/Input";
import { Dropdown, DropdownBody, DropdownBodyItem, DropdownTrigger } from "../../../components/Dropdown";
import Button from "../../../components/Button";
import SidebarLink from "./SidebarLink";
import SidebarFolder, { SidebarFolderItem } from "./SidebarFolder";
import { twMerge } from "tailwind-merge";
import { useDashboardLayoutContext } from "../../../layouts/dashboard/DashboardLayout";

export default function Sidebar() {
    const { isSidebarOpen, setIsSidebarOpen } = useDashboardLayoutContext();

    return (
        <>
            <button
                type="button"
                className={twMerge(
                    "fixed top-0 left-0 w-full h-full bg-black/50 cursor-pointer z-30 opacity-0 invisible transition-all",
                    isSidebarOpen && "opacity-100 visible"
                )}
                onClick={() => setIsSidebarOpen(false)}
            ></button>
            <div
                className={twMerge(
                    "fixed top-0 left-0 w-72 max-w-(--max-w-sidebar-mobile) h-full p-4 space-y-4 overflow-y-auto -translate-x-full lg:translate-x-0 transition-transform bg-white z-30",
                    isSidebarOpen && "translate-x-0"
                )}
            >
                <SidebarWorkspaceDropdown />
                <form action="" className="relative">
                    <Input type="text" placeholder="Search..." className="w-full pl-8" />
                    <RiSearchLine size={16} className="absolute top-1/2 -translate-y-1/2 left-2 text-neutral-500 pointer-events-none" />
                </form>
                <div className="divide-y divide-neutral-200">
                    <div className="py-4 space-y-2 first:pt-0">
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-neutral-500">Main</p>
                            <Dropdown
                                config={{
                                    placement: "bottom-end",
                                }}
                            >
                                <DropdownTrigger asChild>
                                    <Button
                                        variant="light"
                                        size="icon-xs"
                                        className="group-[.active]/dropdown:bg-neutral-200 group-[.active]/dropdown:border-neutral-200"
                                    >
                                        <RiMoreLine size={14} />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownBody>
                                    <DropdownBodyItem>
                                        <RiEditLine size={16} className="shrink-0" />
                                        <span>Rename</span>
                                    </DropdownBodyItem>
                                    <DropdownBodyItem className="text-red-500">
                                        <RiDeleteBinLine size={16} className="shrink-0" />
                                        <span>Delete</span>
                                    </DropdownBodyItem>
                                </DropdownBody>
                            </Dropdown>
                        </div>
                        <div className="space-y-2">
                            <SidebarLink to={"/"}>
                                <RiHomeLine size={16} className="shrink-0" />
                                <span>Dashboard</span>
                            </SidebarLink>
                            <SidebarLink to={"/"}>
                                <RiFocusLine size={16} className="shrink-0" />
                                <span>Assigned to me</span>
                            </SidebarLink>
                            <SidebarLink to={"/"}>
                                <RiListCheck3 size={16} className="shrink-0" />
                                <span>Created by me</span>
                            </SidebarLink>
                            <SidebarLink to={"/"}>
                                <RiMailLine size={16} className="shrink-0" />
                                <span>Inbox</span>
                            </SidebarLink>
                            <SidebarLink to={"/"}>
                                <RiGroupLine size={16} className="shrink-0" />
                                <span>Teams</span>
                            </SidebarLink>
                        </div>
                    </div>
                    <div className="py-4 space-y-2 first:pt-0">
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-neutral-500">Boards</p>
                            <Dropdown
                                config={{
                                    placement: "bottom-end",
                                }}
                            >
                                <DropdownTrigger asChild>
                                    <Button
                                        variant="light"
                                        size="icon-xs"
                                        className="group-[.active]/dropdown:bg-neutral-200 group-[.active]/dropdown:border-neutral-200"
                                    >
                                        <RiMoreLine size={14} />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownBody>
                                    <DropdownBodyItem>
                                        <RiEditLine size={16} className="shrink-0" />
                                        <span>Rename</span>
                                    </DropdownBodyItem>
                                    <DropdownBodyItem className="text-red-500">
                                        <RiDeleteBinLine size={16} className="shrink-0" />
                                        <span>Delete</span>
                                    </DropdownBodyItem>
                                </DropdownBody>
                            </Dropdown>
                        </div>
                        <div className="space-y-2">
                            <SidebarFolder text="Website Folder" open>
                                <SidebarFolderItem to={"/"} isActive>
                                    Saas Website
                                </SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Ecommerce Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Task Management</SidebarFolderItem>
                            </SidebarFolder>
                            <SidebarFolder text="App Folder">
                                <SidebarFolderItem to={"/"}>Saas Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Ecommerce Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Task Management</SidebarFolderItem>
                            </SidebarFolder>
                            <SidebarFolder text="Desktop Folder">
                                <SidebarFolderItem to={"/"}>Saas Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Ecommerce Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Task Management</SidebarFolderItem>
                            </SidebarFolder>
                        </div>
                    </div>
                    <div className="py-4 space-y-2 first:pt-0">
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-neutral-500">Favourites</p>
                            <Dropdown
                                config={{
                                    placement: "bottom-end",
                                }}
                            >
                                <DropdownTrigger asChild>
                                    <Button
                                        variant="light"
                                        size="icon-xs"
                                        className="group-[.active]/dropdown:bg-neutral-200 group-[.active]/dropdown:border-neutral-200"
                                    >
                                        <RiMoreLine size={14} />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownBody>
                                    <DropdownBodyItem>
                                        <RiEditLine size={16} className="shrink-0" />
                                        <span>Rename</span>
                                    </DropdownBodyItem>
                                    <DropdownBodyItem className="text-red-500">
                                        <RiDeleteBinLine size={16} className="shrink-0" />
                                        <span>Delete</span>
                                    </DropdownBodyItem>
                                </DropdownBody>
                            </Dropdown>
                        </div>
                        <div className="space-y-2">
                            <SidebarFolder text="Website Folder">
                                <SidebarFolderItem to={"/"}>Saas Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Ecommerce Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Task Management</SidebarFolderItem>
                            </SidebarFolder>
                            <SidebarFolder text="App Folder">
                                <SidebarFolderItem to={"/"}>Saas Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Ecommerce Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Task Management</SidebarFolderItem>
                            </SidebarFolder>
                            <SidebarFolder text="Desktop Folder">
                                <SidebarFolderItem to={"/"}>Saas Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Ecommerce Website</SidebarFolderItem>
                                <SidebarFolderItem to={"/"}>Task Management</SidebarFolderItem>
                            </SidebarFolder>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

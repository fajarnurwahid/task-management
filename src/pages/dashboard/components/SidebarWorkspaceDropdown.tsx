import { RiAddLine, RiExpandUpDownLine, RiSearchLine } from "@remixicon/react";
import { Dropdown, DropdownTrigger, DropdownBody } from "../../../components/Dropdown";
import Input from "../../../components/Input";
import { twMerge } from "tailwind-merge";
import Button from "../../../components/Button";

type SidebarWorkspaceDropdownItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    image: string;
    text: string;
    isActive?: boolean;
};

export default function SidebarWorkspaceDropdown() {
    return (
        <Dropdown>
            <DropdownTrigger className="w-full flex items-center p-2 pr-4 rounded-lg bg-white border border-neutral-200 space-x-2 text-left cursor-pointer">
                <img src="https://placehold.co/40x40" alt="Image" className="w-10 h-10 rounded-md object-cover shrink-0" />
                <div className="min-w-0 w-full">
                    <p className="text-xs text-neutral-500 mb-1">John's Workspace</p>
                    <p className="text-sm font-medium">Main Workspace</p>
                </div>
                <RiExpandUpDownLine size={20} className="text-neutral-500" />
            </DropdownTrigger>
            <DropdownBody className="w-full">
                <div className="px-2 space-y-2">
                    <form action="" className="relative">
                        <Input type="text" placeholder="Search..." className="w-full pl-8" />
                        <RiSearchLine size={16} className="absolute top-1/2 -translate-y-1/2 left-2 text-neutral-500 pointer-events-none" />
                    </form>
                    <div className="overflow-y-auto max-h-48 space-y-1">
                        <SidebarWorkspaceDropdownItem image="https://placehold.co/24x24" text="Workspace" isActive />
                        <SidebarWorkspaceDropdownItem image="https://placehold.co/24x24" text="Workspace" />
                        <SidebarWorkspaceDropdownItem image="https://placehold.co/24x24" text="Workspace" />
                        <SidebarWorkspaceDropdownItem image="https://placehold.co/24x24" text="Workspace" />
                        <SidebarWorkspaceDropdownItem image="https://placehold.co/24x24" text="Workspace" />
                        <SidebarWorkspaceDropdownItem image="https://placehold.co/24x24" text="Workspace" />
                        <SidebarWorkspaceDropdownItem image="https://placehold.co/24x24" text="Workspace" />
                        <SidebarWorkspaceDropdownItem image="https://placehold.co/24x24" text="Workspace" />
                        <SidebarWorkspaceDropdownItem image="https://placehold.co/24x24" text="Workspace" />
                    </div>
                    <Button type="button" className="w-full">
                        <RiAddLine size={16} className="shrink-0" />
                        <span>Add Workspace</span>
                    </Button>
                </div>
            </DropdownBody>
        </Dropdown>
    );
}

function SidebarWorkspaceDropdownItem({ image, text, isActive, ...props }: SidebarWorkspaceDropdownItemProps) {
    return (
        <button
            type="button"
            className={twMerge(
                "flex items-center cursor-pointer space-x-2 h-8 px-1 text-left hover:bg-neutral-100 w-full rounded-md text-neutral-600 [&.active]:bg-indigo-100 [&.active]:text-indigo-600",
                isActive && "active"
            )}
            {...props}
        >
            <img src={image} alt="Image" className="w-6 h-6 rounded-md shrink-0" />
            <span className="text-sm">{text}</span>
        </button>
    );
}

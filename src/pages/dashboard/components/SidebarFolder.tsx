import { RiArrowRightSLine, RiDeleteBinLine, RiEditLine, RiMoreLine } from "@remixicon/react";
import { useState } from "react";
import { Link, LinkProps } from "react-router";
import { twMerge } from "tailwind-merge";
import { Dropdown, DropdownBody, DropdownBodyItem, DropdownTrigger } from "../../../components/Dropdown";
import Button from "../../../components/Button";

type SidebarFolderProps = {
    children: React.ReactNode;
    text: string;
    open?: boolean;
};
type SidebarFolderItemProps = LinkProps & {
    children: React.ReactNode;
    isActive?: boolean;
};

export default function SidebarFolder({ children, text, open = false }: SidebarFolderProps) {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <div>
            <Dropdown
                config={{
                    placement: "bottom-end",
                }}
            >
                <div className="relative group/sidebar-folder">
                    <button
                        type="button"
                        className={twMerge(
                            "flex items-center text-left px-2 rounded-md h-8 text-sm w-full cursor-pointer hover:bg-neutral-200 space-x-2 text-neutral-600 [&.active]:bg-neutral-200",
                            isOpen && "active"
                        )}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <RiArrowRightSLine size={16} className={twMerge(isOpen && "rotate-90")} />
                        <span>{text}</span>
                    </button>
                    <div className="hidden group-hover/sidebar-folder:block group-[.active]/dropdown:block absolute top-1/2 right-2 -translate-y-1/2">
                        <DropdownTrigger asChild>
                            <Button
                                variant="light"
                                size="icon-xs"
                                className="group-[.active]/dropdown:bg-neutral-300 group-[.active]/dropdown:border-neutral-300 hover:bg-neutral-300 hover:border-neutral-300"
                            >
                                <RiMoreLine size={14} />
                            </Button>
                        </DropdownTrigger>
                    </div>
                </div>
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
            {isOpen && (
                <ul className="ml-4 pl-4 pt-1 relative before:absolute before:w-0 before:border-l before:border-l-neutral-200 before:left-0 before:top-0 before:bottom-3 space-y-1">
                    {children}
                </ul>
            )}
        </div>
    );
}

export function SidebarFolderItem({ children, isActive, ...props }: SidebarFolderItemProps) {
    return (
        <li className="relative before:absolute before:w-2 before:h-0 before:border-b before:border-b-neutral-200 before:-left-4 before:top-1/2 before:translate-y-1/2">
            <p className="truncate">
                <Link className={twMerge("text-sm text-neutral-500 hover:text-neutral-600 [&.active]:text-indigo-600", isActive && "active")} {...props}>
                    {children}
                </Link>
            </p>
        </li>
    );
}

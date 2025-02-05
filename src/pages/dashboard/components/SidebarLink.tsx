import { Link, LinkProps } from "react-router";
import { twMerge } from "tailwind-merge";

type SidebarLinkProps = LinkProps & {
    children: React.ReactNode;
    isActive?: boolean;
};

export default function SidebarLink({ children, isActive, ...props }: SidebarLinkProps) {
    return (
        <Link
            className={twMerge(
                "flex items-center text-left px-2 rounded-md h-8 text-sm w-full cursor-pointer hover:bg-neutral-200 space-x-2 text-neutral-600 [&.active]:bg-indigo-100 [&.active]:text-indigo-600",
                isActive && "active"
            )}
            {...props}
        >
            {children}
        </Link>
    );
}

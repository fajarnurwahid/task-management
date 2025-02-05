import { Link, LinkProps } from "react-router";
import { twMerge } from "tailwind-merge";

type TabPaneProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};
type TabPaneItemProps = LinkProps & {
    children: React.ReactNode;
    isActive?: boolean;
};

export function TabPane({ children, className, ...props }: TabPaneProps) {
    return (
        <div className={twMerge("p-1 rounded-lg bg-neutral-100 flex items-center space-x-1 overflow-x-auto", className)} {...props}>
            {children}
        </div>
    );
}

export function TabPaneItem({ children, isActive, className, ...props }: TabPaneItemProps) {
    return (
        <Link
            className={twMerge(
                "h-7 px-2 flex items-center space-x-1 text-sm text-neutral-500 rounded-md [&.active]:bg-white [&.active]:text-indigo-600 [&.active]:border [&.active]:border-neutral-200 [&.active]:shadow",
                className,
                isActive && "active"
            )}
            {...props}
        >
            {children}
        </Link>
    );
}

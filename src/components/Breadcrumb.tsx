import { Link, LinkProps } from "react-router";
import { twMerge } from "tailwind-merge";

type BreadcrumbProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};
type BreadcrumbItemProps = LinkProps & {
    children: React.ReactNode;
    isActive?: boolean;
};
type BreadcrumbDividerProps = React.HTMLAttributes<HTMLSpanElement> & {
    divider?: string;
};

export function Breadcrumb({ children, className, ...props }: BreadcrumbProps) {
    return (
        <div className={twMerge("flex items-center space-x-1 overflow-x-hidden", className)} {...props}>
            {children}
        </div>
    );
}

export function BreadcrumbItem({ children, isActive, className, ...props }: BreadcrumbItemProps) {
    return (
        <Link
            className={twMerge(
                "text-sm text-neutral-500 hover:text-neutral-600 whitespace-nowrap",
                className,
                isActive && "pointer-events-none text-black h-6 flex items-center px-2 rounded-md bg-neutral-100 border border-neutral-200"
            )}
            {...props}
        >
            {children}
        </Link>
    );
}

export function BreadcrumbDivider({ divider = "/", className, ...props }: BreadcrumbDividerProps) {
    return (
        <span className={twMerge("text-sm text-neutral-400", className)} {...props}>
            {divider}
        </span>
    );
}

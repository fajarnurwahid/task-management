import React from "react";
import { twMerge } from "tailwind-merge";

type VariantType = "primary" | "primary-soft" | "outline-primary" | "light" | "outline-light";
type SizeType = "default" | "sm" | "icon" | "icon-sm" | "icon-xs";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    variant?: VariantType;
    size?: SizeType;
    asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { children, variant = "primary", size = "default", asChild, className, ...props },
    ref
) {
    const variantClasses: Record<VariantType, string> = {
        primary: "bg-indigo-500 text-white hover:bg-indigo-600",
        "primary-soft": "bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white border-indigo-100 hover:border-indigo-600",
        "outline-primary": "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white",
        light: "bg-transparent border-transparent hover:bg-neutral-200 hover:border-neutral-200",
        "outline-light": "border border-neutral-300 bg-transparent hover:bg-neutral-100",
    };
    const sizeClasses: Record<SizeType, string> = {
        default: "h-8 px-4",
        sm: "h-7 px-2 space-x-1",
        icon: "h-8 w-8",
        "icon-sm": "h-7 w-7",
        "icon-xs": "h-5 w-5",
    };

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            ref,
            className: twMerge(
                "flex items-center justify-center space-x-2 text-center rounded-md border cursor-pointer font-medium text-sm",
                variantClasses[variant],
                sizeClasses[size],
                className
            ),
            ...children.props,
        });
    }

    return (
        <button
            type="button"
            ref={ref}
            className={twMerge(
                "flex items-center justify-center space-x-2 text-center rounded-md border cursor-pointer font-medium text-sm bg-transparent",
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});
export default Button;

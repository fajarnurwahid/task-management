import { autoUpdate, flip, offset, ReferenceType, shift, useClick, useDismiss, useFloating, UseFloatingOptions, useInteractions } from "@floating-ui/react";
import React from "react";
import { createContext, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";

type DropdownProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    config?: UseFloatingOptions;
};
type DropdownTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    asChild?: boolean;
};
type DropdownBodyProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};
type DropdownBodyItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};
type DropdownContextType = {
    setReference: ((node: ReferenceType | null) => void) & ((node: ReferenceType | null) => void);
    setFloating: ((node: HTMLElement | null) => void) & ((node: HTMLElement | null) => void);
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    floatingStyles: React.CSSProperties;
    isOpen: boolean;
};

const DropdownContext = createContext<DropdownContextType>({} as DropdownContextType);

export function Dropdown({ children, config, className, ...props }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [
            shift({
                padding: 16,
            }),
            offset(4),
            flip(),
        ],
        whileElementsMounted: autoUpdate,
        ...config,
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);

    return (
        <DropdownContext.Provider
            value={{
                setReference: refs.setReference,
                setFloating: refs.setFloating,
                getReferenceProps,
                getFloatingProps,
                floatingStyles,
                isOpen,
            }}
        >
            <div className={twMerge("relative group/dropdown", className, isOpen && "active")} {...props}>
                {children}
            </div>
        </DropdownContext.Provider>
    );
}

export function DropdownTrigger({ children, asChild, ...props }: DropdownTriggerProps) {
    const { setReference, getReferenceProps } = useDropdownContext();

    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            ref: setReference,
            ...children.props,
            ...getReferenceProps(),
        });
    }

    return (
        <button type="button" ref={setReference} {...props} {...getReferenceProps()}>
            {children}
        </button>
    );
}

export function DropdownBody({ children, className, ...props }: DropdownBodyProps) {
    const { setFloating, floatingStyles, getFloatingProps, isOpen } = useDropdownContext();

    return (
        isOpen && (
            <div
                ref={setFloating}
                style={floatingStyles}
                className={twMerge("bg-white rounded-lg border border-neutral-200 z-20 py-2 w-40 shadow", className)}
                {...props}
                {...getFloatingProps()}
            >
                {children}
            </div>
        )
    );
}

export function DropdownBodyItem({ children, className, ...props }: DropdownBodyItemProps) {
    return (
        <button
            type="button"
            className={twMerge("flex items-center space-x-2 text-left cursor-pointer px-4 h-8 text-sm text-neutral-500 hover:bg-neutral-100 w-full", className)}
            {...props}
        >
            {children}
        </button>
    );
}

function useDropdownContext() {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error("Must be wrapped in <Dropdown/>");
    }
    return context;
}

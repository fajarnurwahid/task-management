import { createContext, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../../../../components/Button";
import { RiArrowRightSLine } from "@remixicon/react";

type TableTaskProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};
type TrProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};
type ThProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};
type TdProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};
type TGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    open?: boolean;
};
type TGroupBodyProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};
type TGroupContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TGroupContext = createContext<TGroupContextType>({} as TGroupContextType);

export function TableTask({ children, className, ...props }: TableTaskProps) {
    return (
        <div className={twMerge("divide-y divide-neutral-200", className)} {...props}>
            {children}
        </div>
    );
}

export function Tr({ children, className, ...props }: TrProps) {
    return (
        <div className={twMerge("flex divide-x divide-neutral-200 text-left group/tr", className)} {...props}>
            {children}
        </div>
    );
}

export function Th({ children, className, ...props }: ThProps) {
    return (
        <div className={twMerge("p-2 text-sm truncate bg-white text-neutral-500 sm:first:sticky sm:first:left-4 first:pl-9", className)} {...props}>
            {children}
        </div>
    );
}

export function Td({ children, className, ...props }: TdProps) {
    return (
        <div
            className={twMerge(
                "p-2 text-sm truncate bg-white sm:first:sticky sm:first:left-4 group-hover/tr:bg-neutral-50 first:pl-9 group-data-[tgroup]/tgroup:first:pl-2 group-data-[tgroupbody]/tgroupbody:first:pl-12",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function TGroup({ children, open = false, className, ...props }: TGroupProps) {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <TGroupContext.Provider value={{ isOpen, setIsOpen }}>
            <div className={twMerge("group/tgroup", className)} data-tgroup {...props}>
                {children}
            </div>
        </TGroupContext.Provider>
    );
}

export function TGroupBody({ children, className, ...props }: TGroupBodyProps) {
    const { isOpen } = useTGroupContext();

    return (
        isOpen && (
            <div className={twMerge("group/tgroupbody divide-y divide-neutral-200 border-t border-t-neutral-200", className)} data-tgroupbody {...props}>
                {children}
            </div>
        )
    );
}

export function TGroupTrigger() {
    const { isOpen, setIsOpen } = useTGroupContext();

    return (
        <Button variant="light" size="icon-xs" className="shrink-0" onClick={() => setIsOpen((prev) => !prev)}>
            <RiArrowRightSLine size={16} className={twMerge(isOpen && "rotate-90")} />
        </Button>
    );
}

function useTGroupContext() {
    const context = useContext(TGroupContext);
    if (!context) {
        throw new Error("Must be wrapped in <TGroup/>");
    }
    return context;
}

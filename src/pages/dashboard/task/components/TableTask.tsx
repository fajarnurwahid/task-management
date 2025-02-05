import { twMerge } from "tailwind-merge";

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

export function TableTask({ children, className, ...props }: TableTaskProps) {
    return (
        <div className={twMerge("divide-y divide-neutral-200", className)} {...props}>
            {children}
        </div>
    );
}

export function Tr({ children, className, ...props }: TrProps) {
    return (
        <div className={twMerge("flex divide-x divide-neutral-200 text-left", className)} {...props}>
            {children}
        </div>
    );
}

export function Th({ children, className, ...props }: ThProps) {
    return (
        <div className={twMerge("p-2 text-sm bg-white text-neutral-500 sm:first:sticky sm:first:left-4", className)} {...props}>
            {children}
        </div>
    );
}

export function Td({ children, className, ...props }: TdProps) {
    return (
        <div className={twMerge("p-2 text-sm bg-white sm:first:sticky sm:first:left-4", className)} {...props}>
            {children}
        </div>
    );
}

import { twMerge } from "tailwind-merge";

type UserGroupProps = {
    children: React.ReactNode;
};

export function UserGroup({ children }: UserGroupProps) {
    return <div className="flex items-center -space-x-2">{children}</div>;
}

export function UserGroupImage({ className, ...props }: React.HTMLProps<HTMLImageElement>) {
    return <img className={twMerge("w-6 h-6 rounded-full border-2 border-white object-cover", className)} {...props} />;
}

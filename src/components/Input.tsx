import { twMerge } from "tailwind-merge";

export default function Input({ className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type={type}
            className={
                type === "checkbox"
                    ? twMerge(
                          "appearance-none w-4 h-4 rounded border-2 border-neutral-300 cursor-pointer checked:bg-(image:--bg-check) checked:bg-indigo-600 checked:border-indigo-600 checked:bg-center checked:bg-[length:14px]"
                      )
                    : twMerge("h-8 bg-transparent rounded-md text-sm px-4 border border-neutral-300 outline-hidden focus:border-indigo-500", className)
            }
            {...props}
        />
    );
}

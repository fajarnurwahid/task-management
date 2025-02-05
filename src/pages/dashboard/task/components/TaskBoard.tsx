import { RiArrowRightSLine, RiAddLine } from "@remixicon/react";
import Button from "../../../../components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type TaskBoardProps = {
    children: React.ReactNode;
    title: string;
    open?: boolean;
};

export default function TaskBoard({ children, title, open = false }: TaskBoardProps) {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <div>
            <div className="bg-neutral-100 flex items-center justify-between space-x-4 p-1 rounded-lg w-(--w-board-full) lg:w-(--w-board) sticky left-4">
                <div className="flex items-center space-x-2 min-w-0">
                    <Button variant="light" size="icon" className={twMerge("shrink-0", isOpen && "rotate-90")} onClick={() => setIsOpen((prev) => !prev)}>
                        <RiArrowRightSLine size={16} />
                    </Button>
                    <p className="font-semibold truncate">{title}</p>
                </div>
                <Button variant="outline-primary" size="sm">
                    <RiAddLine size={16} />
                    <span>Add</span>
                </Button>
            </div>
            {isOpen && children}
        </div>
    );
}

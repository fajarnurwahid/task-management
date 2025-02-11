import { RiCalendarLine, RiDeleteBinLine, RiEditLine, RiExpandDiagonalLine, RiFocusLine, RiMoreLine, RiPulseLine, RiUserLine } from "@remixicon/react";
import Button from "../../../../components/Button";
import { Dialog, DialogTrigger, DialogContent } from "../../../../components/Dialog";
import { Breadcrumb, BreadcrumbDivider, BreadcrumbItem } from "../../../../components/Breadcrumb";
import { Dropdown, DropdownTrigger, DropdownBody, DropdownBodyItem } from "../../../../components/Dropdown";
import TaskDetailDialogTab from "./TaskDetailDialogTab";

type TaskDetailDialogProps = {
    children: React.ReactNode;
};

export default function TaskDetailDialog({ children }: TaskDetailDialogProps) {
    return (
        <Dialog>
            <DialogTrigger className="truncate cursor-pointer">{children}</DialogTrigger>
            <DialogContent>
                <div className="py-2 px-4 border-b border-b-neutral-200 flex items-center space-x-2">
                    <Button variant="light" size="icon-sm" className="shrink-0">
                        <RiExpandDiagonalLine size={16} />
                    </Button>
                    <Breadcrumb className="min-w-0">
                        <BreadcrumbItem to={"/"}>Website Folder</BreadcrumbItem>
                        <BreadcrumbDivider />
                        <BreadcrumbItem to={"/"}>Saas Website</BreadcrumbItem>
                        <BreadcrumbDivider />
                        <BreadcrumbItem to={"/"} isActive>
                            Todo
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Dropdown
                        config={{
                            placement: "bottom-end",
                        }}
                        className="ml-auto"
                    >
                        <DropdownTrigger asChild>
                            <Button variant="light" size="icon-sm" className="group-[.active]/dropdown:bg-neutral-100">
                                <RiMoreLine size={16} />
                            </Button>
                        </DropdownTrigger>
                        <DropdownBody>
                            <DropdownBodyItem>
                                <RiEditLine size={16} className="shrink-0" />
                                <span>Rename</span>
                            </DropdownBodyItem>
                            <DropdownBodyItem className="text-red-500">
                                <RiDeleteBinLine size={16} className="shrink-0" />
                                <span>Delete</span>
                            </DropdownBodyItem>
                        </DropdownBody>
                    </Dropdown>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-medium leading-tight mb-4">Task Name</h2>
                    <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0 w-28 flex items-center space-x-2 text-sm text-neutral-500">
                                <RiPulseLine size={16} className="shrink-0" />
                                <span>Status</span>
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center bg-indigo-100 text-indigo-500 h-6 rounded-lg space-x-2 text-sm px-2">
                                    <div className="w-2 h-2 rounded-full shrink-0 bg-indigo-500"></div>
                                    <span>On Progress</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0 w-28 flex items-center space-x-2 text-sm text-neutral-500">
                                <RiCalendarLine size={16} className="shrink-0" />
                                <span>Due Date</span>
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm">11 February 2025</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0 w-28 flex items-center space-x-2 text-sm text-neutral-500">
                                <RiFocusLine size={16} className="shrink-0" />
                                <span>Priority</span>
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center bg-red-100 text-red-500 h-6 rounded-lg space-x-2 text-sm px-2">
                                    <span>High</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="shrink-0 w-28 flex items-center space-x-2 text-sm text-neutral-500">
                                <RiUserLine size={16} className="shrink-0" />
                                <span>Assignee</span>
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center space-x-1 text-sm">
                                    <img src="https://placehold.co/24x24" alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                                    <span>John Doe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TaskDetailDialogTab />
                </div>
            </DialogContent>
        </Dialog>
    );
}

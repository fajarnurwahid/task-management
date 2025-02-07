import {
    RiAddLine,
    RiCalendarLine,
    RiDeleteBinLine,
    RiEditLine,
    RiFilterLine,
    RiMenuLine,
    RiMoreLine,
    RiShareLine,
    RiTableLine,
    RiTimelineView,
} from "@remixicon/react";
import { Breadcrumb, BreadcrumbDivider, BreadcrumbItem } from "../../../components/Breadcrumb";
import Button from "../../../components/Button";
import { Dropdown, DropdownTrigger, DropdownBody, DropdownBodyItem } from "../../../components/Dropdown";
import { UserGroup, UserGroupImage } from "../../../components/UserGroup";
import { Link } from "react-router";
import { TabPane, TabPaneItem } from "../../../components/Tab";
import Input from "../../../components/Input";
import { TableTask, Td, TGroup, TGroupBody, TGroupTrigger, Th, Tr } from "./components/TableTask";
import TaskBoard from "./components/TaskBoard";
import { useDashboardLayoutContext } from "../../../layouts/dashboard/DashboardLayout";

export default function Task() {
    const { setIsSidebarOpen } = useDashboardLayoutContext();

    return (
        <>
            <div className="sm:flex sm:items-center sm:justify-between px-4 py-2 border-b border-b-neutral-200 sm:space-x-4 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2">
                    <Button variant="outline-light" size="icon" className="shrink-0 lg:hidden" onClick={() => setIsSidebarOpen(true)}>
                        <RiMenuLine size={16} />
                    </Button>
                    <Breadcrumb className="min-w-0">
                        <BreadcrumbItem to={"/"}>Website Folder</BreadcrumbItem>
                        <BreadcrumbDivider />
                        <BreadcrumbItem to={"/"} isActive>
                            Saas Website
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline-light" size="icon">
                        <RiShareLine size={16} />
                    </Button>
                    <Dropdown
                        config={{
                            placement: "bottom-end",
                        }}
                    >
                        <DropdownTrigger asChild>
                            <Button variant="outline-light" size="icon" className="group-[.active]/dropdown:bg-neutral-100">
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
            </div>
            <div className="sm:flex sm:items-center sm:justify-between sm:space-x-4 space-y-2 sm:space-y-0 px-4 py-2 border-b border-b-neutral-200">
                <h1 className="text-xl font-medium">Saas Website</h1>
                <div className="flex items-center space-x-2">
                    <UserGroup>
                        <UserGroupImage src="https://placehold.co/24x24" alt="Image" />
                        <UserGroupImage src="https://placehold.co/24x24" alt="Image" />
                        <UserGroupImage src="https://placehold.co/24x24" alt="Image" />
                        <UserGroupImage src="https://placehold.co/24x24" alt="Image" />
                        <UserGroupImage src="https://placehold.co/24x24" alt="Image" />
                    </UserGroup>
                    <Button asChild variant="primary-soft" size="sm">
                        <Link to={"/"}>
                            <RiAddLine size={16} className="shrink-0" />
                            <span>Invite</span>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-between border-b border-b-neutral-200 px-4 py-2 sm:space-x-4 space-y-2 sm:space-y-0">
                <TabPane>
                    <TabPaneItem to={"/"} isActive>
                        <RiTableLine size={16} className="shrink-0" />
                        <span>Table</span>
                    </TabPaneItem>
                    <TabPaneItem to={"/"}>
                        <RiTimelineView size={16} className="shrink-0" />
                        <span>Timeline</span>
                    </TabPaneItem>
                    <TabPaneItem to={"/"}>
                        <RiCalendarLine size={16} className="shrink-0" />
                        <span>Calendar</span>
                    </TabPaneItem>
                </TabPane>
                <form className="flex items-center space-x-2">
                    <Input type="text" placeholder="Search..." className="sm:max-w-40 w-full" />
                    <Button variant="outline-light" className="shrink-0" size="icon">
                        <RiFilterLine size={16} />
                    </Button>
                    <Dropdown
                        config={{
                            placement: "bottom-end",
                        }}
                    >
                        <DropdownTrigger asChild>
                            <Button variant="outline-light" size="icon" className="group-[.active]/dropdown:bg-neutral-100">
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
                </form>
            </div>
            <div className="py-4 overflow-x-auto flex">
                <div className="w-4 shrink-0 sticky left-0 bg-white"></div>
                <div className="space-y-4 w-min">
                    <TaskBoard title="Todo" open>
                        <TableTask>
                            <Tr>
                                <Th className="flex items-center space-x-2 w-72">
                                    <Input type="checkbox" className="shrink-0" />
                                    <span className="truncate">Task</span>
                                </Th>
                                <Th className="w-64">Description</Th>
                                <Th className="w-64">Assignee</Th>
                                <Th className="w-64">Priority</Th>
                                <Th className="w-64">Due Date</Th>
                                <Th className="w-64">Due Date</Th>
                                <Th className="w-64">Due Date</Th>
                                <Th className="w-64">Due Date</Th>
                            </Tr>
                            <Tr>
                                <Td className="flex items-center space-x-2 w-72">
                                    <Input type="checkbox" className="shrink-0" />
                                    <span className="truncate">Task Name</span>
                                </Td>
                                <Td className="w-64">Description</Td>
                                <Td className="w-64">Assignee</Td>
                                <Td className="w-64">Priority</Td>
                                <Td className="w-64">Due Date</Td>
                                <Td className="w-64">Due Date</Td>
                                <Td className="w-64">Due Date</Td>
                                <Td className="w-64">Due Date</Td>
                            </Tr>
                            <TGroup>
                                <Tr>
                                    <Td className="flex items-center space-x-2 w-72">
                                        <TGroupTrigger />
                                        <Input type="checkbox" className="shrink-0" />
                                        <span className="truncate">Task Name</span>
                                    </Td>
                                    <Td className="w-64">Description</Td>
                                    <Td className="w-64">Assignee</Td>
                                    <Td className="w-64">Priority</Td>
                                    <Td className="w-64">Due Date</Td>
                                    <Td className="w-64">Due Date</Td>
                                    <Td className="w-64">Due Date</Td>
                                    <Td className="w-64">Due Date</Td>
                                </Tr>
                                <TGroupBody>
                                    <Tr>
                                        <Td className="flex items-center space-x-2 w-72">
                                            <Input type="checkbox" className="shrink-0" />
                                            <span className="truncate">Task Name</span>
                                        </Td>
                                        <Td className="w-64">Description</Td>
                                        <Td className="w-64">Assignee</Td>
                                        <Td className="w-64">Priority</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                    </Tr>
                                    <Tr>
                                        <Td className="flex items-center space-x-2 w-72">
                                            <Input type="checkbox" className="shrink-0" />
                                            <span className="truncate">Task Name</span>
                                        </Td>
                                        <Td className="w-64">Description</Td>
                                        <Td className="w-64">Assignee</Td>
                                        <Td className="w-64">Priority</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                    </Tr>
                                </TGroupBody>
                            </TGroup>
                            <Tr>
                                <Td className="flex items-center space-x-2 w-72">
                                    <Input type="checkbox" className="shrink-0" />
                                    <span className="truncate">Task Name</span>
                                </Td>
                                <Td className="w-64">Description</Td>
                                <Td className="w-64">Assignee</Td>
                                <Td className="w-64">Priority</Td>
                                <Td className="w-64">Due Date</Td>
                                <Td className="w-64">Due Date</Td>
                                <Td className="w-64">Due Date</Td>
                                <Td className="w-64">Due Date</Td>
                            </Tr>
                            <TGroup open>
                                <Tr>
                                    <Td className="flex items-center space-x-2 w-72">
                                        <TGroupTrigger />
                                        <Input type="checkbox" className="shrink-0" />
                                        <span className="truncate">Task Name</span>
                                    </Td>
                                    <Td className="w-64">Description</Td>
                                    <Td className="w-64">Assignee</Td>
                                    <Td className="w-64">Priority</Td>
                                    <Td className="w-64">Due Date</Td>
                                    <Td className="w-64">Due Date</Td>
                                    <Td className="w-64">Due Date</Td>
                                    <Td className="w-64">Due Date</Td>
                                </Tr>
                                <TGroupBody>
                                    <Tr>
                                        <Td className="flex items-center space-x-2 w-72">
                                            <Input type="checkbox" className="shrink-0" />
                                            <span className="truncate">Task Name</span>
                                        </Td>
                                        <Td className="w-64">Description</Td>
                                        <Td className="w-64">Assignee</Td>
                                        <Td className="w-64">Priority</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                    </Tr>
                                    <Tr>
                                        <Td className="flex items-center space-x-2 w-72">
                                            <Input type="checkbox" className="shrink-0" />
                                            <span className="truncate">Task Name</span>
                                        </Td>
                                        <Td className="w-64">Description</Td>
                                        <Td className="w-64">Assignee</Td>
                                        <Td className="w-64">Priority</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                        <Td className="w-64">Due Date</Td>
                                    </Tr>
                                </TGroupBody>
                            </TGroup>
                        </TableTask>
                    </TaskBoard>
                </div>
                <div className="w-4 shrink-0 sticky right-0 bg-white"></div>
            </div>
        </>
    );
}

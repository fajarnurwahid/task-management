import { useState } from "react";
import Input from "../../../../components/Input";
import { TabPane, TabPaneItem } from "../../../../components/Tab";
import Button from "../../../../components/Button";
import { RiDownloadLine } from "@remixicon/react";

export default function TaskDetailDialogTab() {
    const tabs = ["Descriptions", "Subtasks", "Comments", "Attachments"] as const;
    const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Descriptions");

    return (
        <>
            <TabPane className="mb-2">
                {tabs.map((tab, i) => (
                    <TabPaneItem key={i} to={"/"} isActive={activeTab === tab} onClick={() => setActiveTab(tab)}>
                        <span>{tab}</span>
                    </TabPaneItem>
                ))}
            </TabPane>
            {activeTab === "Descriptions" && (
                <div className="space-y-2">
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quaerat.</p>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quis itaque culpa eum tempore voluptatem laborum suscipit expedita.
                        Repellat, assumenda.
                    </p>
                </div>
            )}
            {activeTab === "Subtasks" && (
                <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 border border-neutral-200 rounded-lg">
                        <Input type="checkbox" id="check-1" />
                        <label htmlFor="check-1" className="text-sm font-medium cursor-pointer">
                            Task Name
                        </label>
                    </div>
                    <div className="flex items-center space-x-2 p-2 border border-neutral-200 rounded-lg">
                        <Input type="checkbox" id="check-2" />
                        <label htmlFor="check-2" className="text-sm font-medium cursor-pointer">
                            Task Name
                        </label>
                    </div>
                </div>
            )}
            {activeTab === "Comments" && (
                <>
                    <div className="space-y-2 mb-2 max-h-80 overflow-y-auto">
                        <div className="flex items-start space-x-2">
                            <img src="https://placehold.co/24x24" alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                            <div className="p-2 rounded-lg border border-neutral-200 min-w-0 w-full">
                                <p className="text-xs font-medium text-neutral-500 mb-1">John Doe</p>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <img src="https://placehold.co/24x24" alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                            <div className="p-2 rounded-lg border border-neutral-200 min-w-0 w-full">
                                <p className="text-xs font-medium text-neutral-500 mb-1">John Doe</p>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <img src="https://placehold.co/24x24" alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                            <div className="p-2 rounded-lg border border-neutral-200 min-w-0 w-full">
                                <p className="text-xs font-medium text-neutral-500 mb-1">John Doe</p>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <img src="https://placehold.co/24x24" alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                            <div className="p-2 rounded-lg border border-neutral-200 min-w-0 w-full">
                                <p className="text-xs font-medium text-neutral-500 mb-1">John Doe</p>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <img src="https://placehold.co/24x24" alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                            <div className="p-2 rounded-lg border border-neutral-200 min-w-0 w-full">
                                <p className="text-xs font-medium text-neutral-500 mb-1">John Doe</p>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <img src="https://placehold.co/24x24" alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                            <div className="p-2 rounded-lg border border-neutral-200 min-w-0 w-full">
                                <p className="text-xs font-medium text-neutral-500 mb-1">John Doe</p>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <img src="https://placehold.co/24x24" alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                            <div className="p-2 rounded-lg border border-neutral-200 min-w-0 w-full">
                                <p className="text-xs font-medium text-neutral-500 mb-1">John Doe</p>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-2">
                            <img src="https://placehold.co/24x24" alt="Image" className="w-6 h-6 rounded-full object-cover shrink-0" />
                            <div className="p-2 rounded-lg border border-neutral-200 min-w-0 w-full">
                                <p className="text-xs font-medium text-neutral-500 mb-1">John Doe</p>
                                <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <form className="flex items-center space-x-2">
                        <Input type="text" className="w-full" />
                        <Button variant="primary">Send</Button>
                    </form>
                </>
            )}
            {activeTab === "Attachments" && (
                <div className="space-y-2">
                    <div className="p-2 flex items-center justify-between space-x-4 border border-neutral-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-lg bg-neutral-200 flex items-center justify-center text-center uppercase font-bold text-xs text-neutral-500 shrink-0">
                                PDF
                            </div>
                            <div>
                                <p className="font-medium text-sm mb-1">Lorem ipsum dolor sit.</p>
                                <p className="text-xs text-neutral-500">6MB</p>
                            </div>
                        </div>
                        <Button variant="outline-light" size="icon" className="shrink-0">
                            <RiDownloadLine size={16} />
                        </Button>
                    </div>
                    <div className="p-2 flex items-center justify-between space-x-4 border border-neutral-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-lg bg-neutral-200 flex items-center justify-center text-center uppercase font-bold text-xs text-neutral-500 shrink-0">
                                PDF
                            </div>
                            <div>
                                <p className="font-medium text-sm mb-1">Lorem ipsum dolor sit.</p>
                                <p className="text-xs text-neutral-500">6MB</p>
                            </div>
                        </div>
                        <Button variant="outline-light" size="icon" className="shrink-0">
                            <RiDownloadLine size={16} />
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
}

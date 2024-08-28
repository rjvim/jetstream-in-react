import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import Welcome from "@/Components/Welcome";

const Dashboard: React.FC = () => {
    return (
        <AppLayout
            title="Dashboard"
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-xl dark:bg-gray-800 sm:rounded-lg">
                        <Welcome />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Dashboard;

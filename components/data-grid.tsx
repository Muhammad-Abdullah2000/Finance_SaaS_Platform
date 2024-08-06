"use client";

import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { formatDateRange } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

import { FaPiggyBank } from "react-icons/fa";
import {FaArrowTrendUp, FaArrowTrendDown} from "react-icons/fa6"
import { DataCard } from "./data-card";

export const DataGrid = () => {

    const { data } = useGetSummary();

    const params = useSearchParams();
    const to = params.get("to") || undefined;
    const from = params.get("from") || undefined;

    console.log(data);

    const dateRangeLabel = formatDateRange({ to, from });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
            <DataCard
                title="Remaninig"
                value={data?.remainingAmount}
                percentageChange={data?.remainingAmount}
                icon={FaPiggyBank}
                dateRange={dateRangeLabel}
            />
             <DataCard
                title="Income"
                value={data?.incomeAmount}
                percentageChange={data?.incomeAmount}
                icon={FaArrowTrendUp}
                dateRange={dateRangeLabel}
            />
             <DataCard
                title="Expenses"
                value={data?.expensesAmount}
                percentageChange={data?.expensesAmount}
                icon={FaArrowTrendDown}
                dateRange={dateRangeLabel}
            />
        </div>
    );
};
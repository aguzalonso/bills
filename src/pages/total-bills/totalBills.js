import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

const Tabs = lazy(() => import("../../componets/tabs"));
const Monthly = lazy(() => import("../monthly/monthly"));
const Anual = lazy(() => import("../anual/anual"));

const tabs = [
    { name: 'Monthly' },
    { name: 'Anual' }
]

const screns = [<Monthly />, <Anual />]

const TotalBills = () => {
    const tabValue = useSelector(state => state.tabValue.value);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Tabs tabs={tabs} />
            {screns[tabValue]}
        </Suspense>
    )
}

export default TotalBills
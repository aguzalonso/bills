import React, { lazy } from "react";
import image from '../../assets/images/moneybag.png'

const EmptyView = lazy(() => import("../../componets/emptyView"));

const Anual = () => {
    return (
        <EmptyView icon={image} text='Coming Soon...' />
    )
}

export default Anual
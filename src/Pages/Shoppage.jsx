import React, { useEffect } from "react";
import {handleLoading, handleError, storeData, getData} from "../Redux/Products/action"
import { useDispatch } from "react-redux";

const Shoppage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(getData())
    }, [])
    return (
        <h1>Shop page</h1>
    )
}


export {Shoppage}
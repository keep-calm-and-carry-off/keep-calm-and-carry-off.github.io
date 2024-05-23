import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { toggle } from "src/stores/globalStore/globalStore"
import { selectorModal } from "src/stores/globalStore/modal"

export const useModal = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()
    const show = useSelector(selectorModal)

    useEffect(() => {
        searchParams.has('showModal') && dispatch(toggle(true))
    }, [searchParams])

    const close = () => {
        dispatch(toggle(false))
        setSearchParams((params) => {
            params.delete('showModal');
            params.delete('content');
            params.delete('productId');
            return params
        })
    }

    

    const getState = () => show.isOpen
    return  { close, getState }
}
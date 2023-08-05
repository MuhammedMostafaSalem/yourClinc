import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteDoctor, getDoctors } from "../../Redux/Actions/DocAction";

const DocContainerHook = () => {
    const [selectedData, setSelectedData] = useState(null);
    const dispatch = useDispatch();

    const {posts, isloading } = useSelector(state => state.doctor);


    useEffect(() => {
        dispatch(getDoctors())
    }, [dispatch]);


    const getDocId = (id)=> {
        const selectedDoc = posts.find((item) => item.id === id);
        setSelectedData((prev)=> {return {...prev , ...selectedDoc}})
    }


    return [isloading, posts, deleteDoctor, dispatch, getDocId, selectedData]
}

export default DocContainerHook
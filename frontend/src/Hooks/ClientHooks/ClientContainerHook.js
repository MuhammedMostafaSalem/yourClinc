import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, getClients } from "../../Redux/Actions/ClientAction";

const ClientContainerHook = () => {
    const [selectedData, setSelectedData] = useState(null);
    const dispatch = useDispatch();

    const {comments, isloading } = useSelector(state => state.client);


    useEffect(() => {
        dispatch(getClients())
    }, [dispatch]);


    const getClientId = (id)=> {
        const selectedClient = comments.find((item) => item.id === id);
        setSelectedData((prev)=> {return {...prev , ...selectedClient}})
    }

    return [isloading, comments, deleteClient, dispatch, getClientId, selectedData]
}

export default ClientContainerHook
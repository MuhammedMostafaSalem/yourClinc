import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { insertClients } from "../../Redux/Actions/ClientAction";

const AddClientHook = () => {
    const dispatch = useDispatch();
    const [nameClient, setNameClient] = useState('')
    const [nameDoc, setNameDoc] = useState('')
    const [appointmentTime, setAppointmentTime] = useState('')
    const [appointmentDay, setAppointmentDay] = useState('')

    const onChangNameClient = (e) => {
        e.persist();
        setNameClient(e.target.value)
    }
    
    const onChangNameDoc = (e) => {
        e.persist();
        setNameDoc(e.target.value)
    }
    
    const onChangAppointmentTime = (e) => {
        e.persist();
        setAppointmentTime(e.target.value)
    }
    
    const onChangAppointmentDay = (e) => {
        e.persist();
        setAppointmentDay(e.target.value)
    }

    const validationValues = () => {
        if(nameClient === '') {
            toast.warning('Please enter Yout Name')
            return;
        }
        if(nameDoc === '') {
            toast.warning('Please enter time Name Doctor')
            return;
        }
        if(appointmentTime === '') {
            toast.warning('Please enter time your appointment time')
            return;
        }
        if(appointmentDay === '') {
            toast.warning('Please enter your appointment day')
            return;
        }
    }

    const onSubmit= async(e)=> {
        e.preventDefault();
        validationValues();
        await dispatch(insertClients({
            nameClient,
            nameDoctor: nameDoc,
            appointmentTime,
            appointmentDay,
        }));
        setNameClient('')
        setNameDoc('')
        setAppointmentTime('')
        setAppointmentDay('')
        setTimeout(() => {
            toast.success('add successfully')
        }, 1000)
    }

    const {comments, isloading} = useSelector(state => state.client);
    const {posts} = useSelector(state => state.doctor);

    useEffect(() => {
        if(isloading === false) {
            if(comments) {
                console.log(comments)
            }
        }
    }, [isloading])

    return [nameClient, onChangNameClient, nameDoc, onChangNameDoc, appointmentTime, onChangAppointmentTime, appointmentDay, onChangAppointmentDay, onSubmit]
}

export default AddClientHook
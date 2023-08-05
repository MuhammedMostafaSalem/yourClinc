import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { insertDoctors } from "../../Redux/Actions/DocAction";

const AddDocHook = () => {
    const dispatch = useDispatch();
    const [name, sertName] = useState('')
    const [startShift, sertStartShift] = useState('')
    const [endShift, sertEndShift] = useState('')
    const [description, sertDescription] = useState('')
    
    const onChangName = (e) => {
        e.persist();
        sertName(e.target.value)
    }
    
    const onChangStartShift = (e) => {
        e.persist();
        sertStartShift(e.target.value)
    }
    
    const onChangEndShift = (e) => {
        e.persist();
        sertEndShift(e.target.value)
    }
    const onChangDescription = (e) => {
        e.persist();
        sertDescription(e.target.value)
    }
    
    const validationValues = () => {
        if(name === '') {
            toast.warning('Please enter Name Doctor')
            return;
        }
        if(startShift === '') {
            toast.warning('Please enter time start shift')
            return;
        }
        if(endShift === '') {
            toast.warning('Please enter time end shift')
            return;
        }
        if(description === '') {
            toast.warning('Please enter description job doctor')
            return;
        }
    }
    
    const onSubmit= async(e)=> {
        e.preventDefault();
        validationValues();
        await dispatch(insertDoctors({
            name,
            startShift,
            endShift,
            description,
        }));
        sertName('')
        sertStartShift('')
        sertEndShift('')
        sertDescription('')
        setTimeout(() => {
            toast.success('add successfully')
        }, 1000)
    }

    const {posts, isloading } = useSelector(state => state.doctor);

    useEffect(() => {
        if(isloading === false) {
            if(posts) {
                console.log(posts)
            }
        }
    }, [isloading])

    return [name, onChangName, startShift, onChangStartShift, endShift, onChangEndShift, description, onChangDescription, onSubmit]
}

export default AddDocHook
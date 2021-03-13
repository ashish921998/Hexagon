import axios from "axios"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getusers } from "../../Redux/User/actionTypes"
import { useParams } from 'react-router'

const BookingInfo = () => {
    const { name } = useParams()
    console.log(name)

    // const details = useSelector((store)=>store.loginDetails.loginData)
    // const userdetails = useSelector((store)=>store.userDetails.userData)
    // let userId=""
    // for(let key in userdetails)
    // {
    //     if(userdetails[key].googleId===details.googleId)
    //     {
    //         userId = userdetails[key]._id
    //     }
    //     else{
    //         console.log(userdetails[key].name)
    //     }
    // }
    // console.log(userdetails)
    React.useEffect(() => {
        return axios.get("http://localhost:6878/booking")
            .then((res) => console.log(res))
    }, [])
    return (
        <div style={{ marginTop: "150px" }}>
            <div>
                { }
            </div>
        </div>
    )
}

export { BookingInfo }
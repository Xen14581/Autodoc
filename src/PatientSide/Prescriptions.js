import React,{useState,useEffect} from 'react'
import './Prescriptions.css'
import axios from 'axios'
import Tabs from './Tabs'
import { getUser } from '../Utilities/UserServices'

function Prescriptions() {
 
    const [appointments,setAppointments] = useState([])
    const [meds,setMeds] = useState([])
    const auth = `Bearer ${sessionStorage.getItem('token')}`
    const user = getUser()
    const [render,setRender] = useState([])
    const [unique,setUnique] = useState([])
    useEffect(async()=>{
         await axios.get('http://localhost:8080/getAppointments',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
     let response = res.data
   setAppointments(
       response.filter((r)=>{
          return r.p_id === 3 
       })
       )
})
    },[setAppointments,auth])

    useEffect(()=>{
        appointments.map(async (app)=>{
        let data =     await axios.get('http://localhost:8080/getMedications/'+app.a_id,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
     }})
     let response = await data.data
     setMeds(oldArray=>{
        return[...oldArray,response]
         })
        })
    },[setMeds,appointments,auth])
    
useEffect(()=>{
    appointments.map((app)=>{
       return meds.filter((med)=>{
          return med.filter((m)=>{
               if(app.a_id === m.a_id)
           {
               const data = {
                   slot : app.a_datetime,
                   med:med
               }
               setRender((oldArray)=>{
                   return [...oldArray,data]
               })
           }
          })
          
          
       })
    })
},[appointments,meds,setRender])
    const table = (val)=>{      
        
        return(
                   <tr>
                    <td>
                        {val.slot}
                    </td>
                    <td>    
                        <table id ="meds">
                            <th>MedName</th>
                            <th>Dosage</th>
                            <th>Strength</th>
                            {val.med.map((v)=>{
                                return(
                                    <tr>
                                        <td>{v.med_name}</td>
                                        <td>{v.med_dosage}</td>
                                        <td>{v.med_str}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </td>
                   </tr>
               )
   
    }
    
   useEffect(()=>{
       setUnique(
           render.filter ( (ele, ind) => ind ===render.findIndex( elem => elem.slot === ele.slot))
       )
   },[setUnique,render])

    return (
        <>
        <div className="prescriptions">
            <Tabs/>
            <div className="prescriptions__meds">
                 <table id="patients">
                            <th >Appointment</th>
                        <th>Meds</th>
                         {unique.map(table)}                                                                                
                         </table> 
            </div>
        </div>
    </>
    )
}

export default Prescriptions

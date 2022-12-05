import React, { useState } from "react"
import './App.css'
const _ =require('lodash')

export default function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const [allData, setAllData] = useState([])
    const [searchData,setsearchData] =useState("")
    const [filteredData,setFilteredData]=useState([])
    const searchFunction=()=>{
        if(searchData.length >3){
            let filterDataItems = _.filter(allData, {"firstName":searchData})
            setFilteredData(filterDataItems)
        }
    }      
    return (
        
        <div id="maindiv">
            <center>
            <h1>User Data & Search Bar</h1>
            <input type="text" placeholder="First Name" onChange={(e) => {
                setFirstName(e.target.value)
            }} />
            <input type="text" placeholder="Last Name" onChange={(e) => {
                setLastName(e.target.value)
            }} />
            <input type="email" placeholder="Email" onChange={(e) => {
                setEmail(e.target.value)
            }} />
            <input type="password" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value)
            }} />

            <button onClick={() => {

                let tempObj = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }
                setAllData([...allData,tempObj])
            }}>Signup</button>
            <div>
                <input type="text" placeholder="Search..." onChange={(e)=>{
                    setsearchData(e.target.value)
                    searchFunction()
                }}/>
            </div>
            </center>
            {
                searchData.length>3?filteredData.map((item,index)=>{
                    return(
                        <div>
                            <center>
                            <table>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Password</th>
                                <tr>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            </tr> 
                            </table>
                            </center>
                        </div>
                    )
                }) :allData.map((item,index)=>{
                    return(
                        <div>
                            <center>
                            <table>
                            <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Password</th>
                                <tr>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            </tr>
                            </table>
                            </center>
                        </div>
                    )
                })
            
        }
        </div>  

    ) 
}
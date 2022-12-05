import React, { useState } from "react"
const _ =require('lodash')

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [allData, setAllData] = useState([])
    const [searchItem,setSearchItem] =useState("")
    const [filteredData,setFilteredData]=useState([])

    const searchFunction=()=>{
        if(searchItem.length >3){
            let filteredItems = _.filter(allData, {"firstName":searchItem})
            setFilteredData(filteredItems)
            console.log(filteredItems)
        }
    }
    return (
        <div>
            <div>
                <input type="text" placeholder="Search" onChange={(e)=>{
                    setSearchItem(e.target.value)
                    searchFunction()
                }}/>
            </div>
            <input type="text" placeholder="Enter first name" onChange={(e) => {
                setFirstName(e.target.value)
            }} />
            <input type="text" placeholder="Enter last name" onChange={(e) => {
                setLastName(e.target.value)
            }} />
            <input type="text" placeholder="Enter  email" onChange={(e) => {
                setEmail(e.target.value)
            }} />
            <input type="password" placeholder="Enter password" onChange={(e) => {
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
            }}>Submit</button>
            {
                searchItem.length>3?filteredData.map((item)=>{
                    return(
                        <div>
                            <h1>{item.firstName}</h1>
                            <h1>{item.lastName}</h1>
                        </div>
                    )
                }) :allData.map((item)=>{
                    return(
                        <div>
                            <h1>{item.firstName}</h1>
                            <h1>{item.lastName}</h1>
                        </div>
                    )
                })
        }

{
            allData.map((item)=>{
                return(
                    <div>
                    <table>
                        <tr>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                        </tr>
                    </table>
                    </div>
                )
            })
        }

        </div>
    )
}

export default App;
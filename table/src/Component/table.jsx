import React,{useState,useEffect} from 'react'
import Styles from './table.module.css'
const Api = 'https://jsonplaceholder.typicode.com/users';

const Table = () => {
  
    const [user,setUser] = useState([]);
     
 const fetchUser =async (url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        if(data.length > 1)
        {
            setUser(data);
        }
    }
    catch(e){
        console.error(e);
    }
 }

useEffect(() => {
   fetchUser(Api);
},[]);

  return (
    <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
         {user.map((userData)=>(
           <tr key ={userData.id}>
           <td>{userData.id}</td>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
            <td>{userData.address.street},{userData.address.city},{" "} {userData.address.zipcode}</td>
           </tr>
        ))}
        </tbody>
    </table>
  )
}

export default Table;
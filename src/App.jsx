import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "@firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newMobile, setnewMobile] = useState(0);
  const [newAge, setnewAge] = useState(0);
  const [users, setUsers] = useState([]); // Empty array when you are calling First
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    console.log("Create User");
    await addDoc(usersCollectionRef,{name:newName,mobile:newMobile,age:newAge})
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);

      setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <>
      <input
        type="text"
        placeholder="name "
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input type="number" placeholder="Mobile" onChange={(e) => {
          setnewMobile(e.target.value);
        }}/>
      <input type="number" placeholder="age" onChange={(e) => {
          setnewAge(e.target.value);
        }} />

      <button onClick={createUser}>Create User</button>

      {users.map(user => {
        return (
          <div key={user.id}>
            <h1>Name : {user.name}</h1>
            <h1>Mobile : {user.mobile}</h1>
            <h1>Age : {user.age}</h1>
          </div>
        );
      })}
    </>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";


function App() {
  const [UserName, setUserName] = useState("");
  const [fist_name, setFist_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [create_by, setCreate_by] = useState("");
  const [create_dete, setCreate_dete] = useState("");
  const [last_update_by, setLast_update_by] = useState("");
  const [last_update_date, setLast_update_date] = useState("");
  const [address, setAddress] = useState("");
  const [Province, setProvince] = useState("");
  const [Khet, setKhet] = useState("");
  const [khwang, setKhwang] = useState("");
  const [email, setEmail] = useState("");
  const [provinceList , setProvinceList] = useState("")
  


  const [usersList, setUserList] = useState([]);

  const getUsers = () => {
    Axios.get("http://localhost:3001/usermanage/users").then((response) => {
      setUserList(response.data);
      
    });
  };

  const addUsers = () => {
    Axios.post("http://localhost:3001/usermanage/users", {
      UserName: UserName,
      fist_name: fist_name,
      last_name: last_name,
      address: address,
      Province:Province,
      email:email,
      Khet:Khet,
      khwang:khwang,
      create_by: UserName,
      create_dete: Date.now(),
      last_update_by: UserName,
      last_update_date: Date.now(),
    }).then((res) => {
      console.log(res.data)
      setUserList([
        ...usersList,
        {
          UserName: UserName,
          fist_name: fist_name,
          last_name: last_name,
          create_by: UserName,
          create_dete: create_dete,
          last_update_by: UserName,
          last_update_date: last_update_date,
        },
      ]);
    });
  };

  // useEffect(() => {
  //    axios.get("http://localhost:3001/usermanage/province").then((res)=>{
  //     setProvinceList(res.data)
  //     console.log(provinceList)
  //    })
    
  // });
  const updateUser= (id) => {
    Axios.put("http://localhost:3001/update", { id: id ,UserName: UserName,
    fist_name: fist_name,
    last_name: last_name,
    address: address,
    email:email,
   }).then(
      (response) => {
        setUserList(
          usersList.map((val) => {
            return val.id == id
              ? {
                fist_name: val.fist_name,
                last_name: val.last_name,
                address: val.address,
                email:val.email,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3001/usermanage/users/${id}`).then((response) => {
      setUserList(
        usersList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App container">
      <h1>Maintenance User</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            UserName:
            <input
              type="text"
              placeholder="Enter name"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            fist_name:
            <input
              type="text"
              placeholder="Enter fist_name"
              onChange={(event) => {
                setFist_name(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            last_name:
            <input
              type="text"
              placeholder="Enter last_name"
              onChange={(event) => {
                setLast_name(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            email:
            <input
              type="text"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            Address
            <input
              type="text"
              placeholder="Enter Address"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            Province:
       
        {/* <select>
        {provinceList.map((res)=>(
          <>
          <select>
          <option value={res.ProvinceName}></option>
          
        </select>
          </>
        ))}
        </select> */}
    
            <input
              type="text"
              className=" ml-10"
              placeholder="Enter Province"
              onChange={(event) => {
                setProvince(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            Khet:
            <input
              type="text"
              className="ml-2"
              placeholder="Enter Khet"
              onChange={(event) => {
                setKhet(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            Khwang:
            <input
              type="text"
              placeholder="Enter Khwang"
              onChange={(event) => {
                setKhwang(event.target.value);
              }}
            />
          </div>

          <button onClick={addUsers} class="btn btn-success">
            Add User
          </button>
        </form>
      </div>
      <hr />
      <div className="employees">
        <button class="btn btn-primary" onClick={getUsers}>
          Show User
        </button>
        <br />
        <br />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">no</th>
              <th scope="col">Username</th>
              <th scope="col">fist_name</th>
              <th scope="col">last_name</th>
              <th scope="col">create_by</th>
              <th scope="col">create_date</th>
              <th scope="col">last_update_by</th>
              <th scope="col">last_update_date</th>
              <th scope="col">edit</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((val, key) => (
              <>
                <tr>
                  <th scope="row">{val.id}</th>
                  <td>{val.UserName}</td>
                  <td>{val.fist_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.create_by}</td>
                  <td>{val.create_dete}</td>
                  <td>{val.last_update_by}</td>
                  <td>{val.last_update_date}</td>
                  <td><button onClick={updateUser} >edit</button></td>
                  <td><button onClick={() => {deleteUser(val.id)}} >delete</button></td>
                </tr>
          
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

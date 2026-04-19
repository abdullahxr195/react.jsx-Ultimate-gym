import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 const[users , setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const existedUsers = JSON.parse(localStorage.getItem("users"));
    if (existedUsers) {
      setUsers(existedUsers);
      
    }

    const user = JSON.parse(localStorage.getItem("currentUser"));

      if(user){

        setCurrentUser(user);

      }


  }, []);

  const register = (formData) => {
    if (!formData.email || !formData.name || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isExist = allUsers.find((user) => user.email === formData.email);

    if (isExist) {
      toast.error("your email is already exists");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: "user",
    };

    const updatedUsers = [...allUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("Registerd successful");
    navigate("/login");
    return;
  };

  const login = (formData) => {
    if (!formData.email || !formData.password) {
      toast.error("please fill all fields");
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isExist = allUsers.find((user) => user.email === formData.email);
    if (!isExist) {
      toast("user not found please create new account.");
      return;
    }

    if (isExist.password !== formData.password) {
      toast.error("password is not correct");
      return;
    }

    toast.success("login successfully");
    setCurrentUser(isExist);
    
if(isExist.role==="user"){

     navigate("/user-dashboard");

}

    
    
if(isExist.role==="admin"){
    navigate("/admin-dashboard");
    }


    localStorage.setItem("currentUser", JSON.stringify(isExist));



  };

  return (
    <UserContext.Provider value={{ users, register, login, currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

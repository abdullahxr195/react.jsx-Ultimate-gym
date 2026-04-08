import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";


 export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const {users, setUsers} = useState(null);

    useEffect(() => {
        const existedUsers = JSON.parse(localStorage.getItem("user")) ;
         if(existedUsers) {

            setUsers(existedUsers);
            return;
         }
   
    },[]);

    const register =(formData) => {
        
        if((!formData.email || !formData.name || !formData.password)) {
                toast.error("Please fill in all fields");
                return;

        }

        if(formData.password.length < 8) {

            toast.error("Password must be at least 8 characters long");
            return;
        }

        const allUsers =JSON.parse(localStorage.getItem("users")) || [];
        const isExist = allUsers.find((user) => user.email === formData.email);

        if(isExist) {
            toast.error("your email is already exists");
            return;
        }

        const newUser = {
            id: Date.now(),
            username: formData.username,
            email: formData.email,
            password: formData.password,
            role: "user"
        };

        const updatedUsers = [...allUsers, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        toast.success("Registerd successful");
        return ;
        

        const login =(formData)=> {
            if(!formData.email || !formData.password){
                toast.error("please fill all fields");
                return;

            }


            const allUsers = JSON.parse(localStorage.getItem("user")) || [];
            const isExist =allUsers.find((users) => user.email === formData);
            if(!isExist){
                    toast("user not found please create new account.")
                    return;


            }
            
            if(isExist.password !== formData.password){

                toast.error("password is not correct");
                return;

            }

                toast.success("login successfully");


        }






    }

    return (
        <UserContext.Provider value={{ users , register, login}}>
            {children}
        </UserContext.Provider>
    );



























}
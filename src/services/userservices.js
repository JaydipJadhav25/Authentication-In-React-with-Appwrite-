import { useDispatch } from "react-redux";
import { currentUser } from "../redux/slices/user";

const disapatch = useDispatch();

class Userservices{

    async currentuser(){
       return  disapatch(currentUser());

    }



}

const user = new Userservices();

export default user;
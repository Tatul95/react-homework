import { useSelector } from "react-redux"
import { store } from "../../store/store"

export const Result = () =>{

    //  store hamarjeq e state 
    const userList = useSelector(state=>state.user.userList)

    console.log(userList);

    return <div> {userList.map((item,index)=>{

        return <div>
            {item}
        </div>
    })}

    </div>
}
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import {useState, useEffect} from "react";
import {useRequest} from "../../requestMethod";

export default function WidgetSm() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getUser = async ()=>{
      try{
        const res = await useRequest.get('users/?new=true');
        setUsers(res.data);
      }
    
      catch(err){
        console.log(err)
      };
    }  
    getUser();
    
  },[])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map(user =>(
         <li className="widgetSmListItem">
           <img
             src={user.img || "data:image/png;base64,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"}
             alt=""
             className="widgetSmImg"
           />
           <div className="widgetSmUser">
             <span className="widgetSmUsername">{user.username}</span>
             <span className="widgetSmUserTitle">{user.join || 'Software Engineer'}</span>
           </div>
           <button className="widgetSmButton">
             <Visibility className="widgetSmIcon" />
             Display
           </button>          
         </li>
        ))}
      </ul>
    </div>
  );
}

import React, {Component} from "react";
import 'antd/dist/antd.css';
import myimage from "./bojack.0.0.jpg"



class ProfilePhoto extends Component {
  render(){
 return (
   <div className="ProfilePhoto">
    <img src={myimage} alt ='bojack.0.0.jpg' />

   </div>
       
        
 );
}
}
export default ProfilePhoto;
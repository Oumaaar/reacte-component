
import React, {Component} from "react";

import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto'
import Address from './component/profile/Address'
import FullName from './component/profile/FullName'



class App extends Component {
  render(){
 return (
   <div className="App">
     <h3> Hello
     <FullName />
        </h3>
     <ProfilePhoto />
     <Address />
    
   </div>
 );
}
}
export default App;
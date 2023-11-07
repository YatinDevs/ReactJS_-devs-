import React,{useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile(){

    const {user} = useContext(UserContext);

    if(!user) return (
        <div>
            please login!
        </div>
    )
    return <div>Welcome!!!         <br></br>

        UserName : {user.username}{" "}          <br></br>

        Password : {user.password}
        </div>
}

export default Profile;
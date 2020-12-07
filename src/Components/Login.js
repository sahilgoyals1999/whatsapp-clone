import React from 'react'
import "./Login.css"
import { auth, provider } from "../firebase"
import { actionType } from "../reducer";
import { useStateValue } from "../StateProvider"
 
function Login() {
	const [{}, dispatch] = useStateValue();

	const signIn = () => {
		auth.signInWithPopup(provider)
		.then(result => {
			console.log("restulr" , result);
			dispatch({
				type: actionType.SET_USER,
				user: result.user
			})
		})
		.catch(err => alert(err.message));
	}

	return (
		<div className="login">
			<div className="login_container">
			 <img 
			  src="https://i.pinimg.com/originals/99/0b/7d/990b7d2c2904f8cd9bc884d3eed6d003.png" 
			  alt="logo"
			 />
			 <div className="login_text">
			 	<h1>Sign In to Whatsapp</h1>
			 </div>				
			 <button type="submit" onClick={signIn}>
			  Sign In With Google
			 </button>
			</div>
		</div>
	)
}

export default Login
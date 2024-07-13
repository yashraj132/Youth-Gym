import React from 'react'

const Login = () => {
  return (
    <>
      <div class = "Login">
      </div>
      <div class="body-l">
      <div class="main">  	
		<input class="l-in" type="checkbox" id="chk" aria-hidden="true"></input>

			<div class="signup">
				<form>
					<label class="lab-l"for="chk" aria-hidden="true">Sign up</label>
					<input class="l-in" type="text" name="txt" placeholder="User name" required=""></input>
					<input class="l-in" type="email" name="email" placeholder="Email" required=""></input>
					<input class="l-in" type="password" name="pswd" placeholder="Password" required=""></input>
					<button class="btn2">Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label class="lab-l"for="chk" aria-hidden="true">Login</label>
					<input class="l-in" type="email" name="email" placeholder="Email" required=""></input>
					<input class="l-in" type="password" name="pswd" placeholder="Password" required=""></input>
					<button class="btn2">Login</button>
				</form>
			</div>
	</div>
  </div>
    </>
  )
}

export default Login

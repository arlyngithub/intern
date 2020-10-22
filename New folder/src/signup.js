import React,{Component} from 'react';
import Axios from 'axios';
import './Login.css';
        

class signup extends Component {
   constructor() {
      super();
      this.state = {
        // fields: {},
        // errors: {}
        name:"",
        email: "",
        password: ""
      }

     

    };
  
  submituserRegistrationForm=async(event)=> {
      event.preventDefault();
     
      try {
      var signupRes = await Axios.post("http://localhost:5000/register",{ 
      name:this.state.name,
      email: this.state.email,
      password: this.state.password
    });
      window.alert("Successful Login");
      this.props.history.push("/bookings");
    } catch (err) {
      window.alert(err.response.data);
    } 
      }
  
  render()
  {
    return (
      
   <div class="bg">
  <article class="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 bnn">

   <main className ="pa4 black-80">
  <form 
  class="measure center" 
  name="userRegistrationForm"  
  onSubmit= {this.submituserRegistrationForm} >
    <fieldset 
    id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">sign_up Page</legend>
       <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>

        <input 
        class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"  
        onChange={(e) =>this.setState({
                              email: e.target.value
                            })
                          } 
        type="email" 
        name="email-address"  
        id="email-address"/>

        </div>
         <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">UserName</label>

        <input 
        class="pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100"  
        onChange={(e) =>this.setState({
                              name: e.target.value
                            })
                          } 
        type="text" 
        name="username"  
        id="username"/>

        </div>
       

        <div class="mv3">

        <label class="db fw6 lh-copy f6" for="password">Password</label>

        <input 
        class="b pa2 input-reset ba bg-transparent hover-bg-black hover-black w-100" 
        type="password" 
        name="password" 
        onChange={(e) =>this.setState({
                              password: e.target.value
                            })
                          }  
        id="password"/>

  
      </div>
      <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
    </fieldset>
    <div class="">
      <input 
      class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
      type="submit" 
      value="Sign up"/>
    </div>
    
  </form>
</main>
   
 </article>

 </div>
      );
  }
} 
export default signup;
import React,{Component} from 'react';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = { 
        }
    }

    logout = ()=>{
        localStorage.removeItem('user')
        window.location.reload();
    }

    render(){
        return(
            <div>
               hello {localStorage.getItem("user")}
               <button onClick={this.logout}>Log out</button>
            </div>
            
         );
    }
}

// TODO
// button -> balance
// text field + button -> withdraw (Deduction)
//   - update balance
// text field + button -> deposit (Add)
//   - update balance

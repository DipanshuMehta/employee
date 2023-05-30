import React, { Component } from 'react'
import "./Feedback.css"

 class FeedbackForm extends Component {
    constructor(){
        super();
        this.state={
            nameIp: '',
            deparmentIp: '',
            ratingIp: '',
            myobj: {},
            users: [],
            isSubmitted: false
        }
    }
  render() {
    const handleChange = (e) =>{
        console.log('typing..');
        this.setState({
            [e.target.id]:e.target.value,
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let tempobj = {
            nameIp: this.state.nameIp,
            departmentIp: this.state.departmentIp,
            ratingIp: this.state.ratingIp
        }
        console.log(tempobj);
        let tempArr = this.state.users;
        tempArr.push(tempobj);
        this.setState({
            users: tempArr,
            isSubmitted: !this.state.isSubmitted
        })
        console.log(this.state.users);
    }
    const handleBack = () =>{
        this.setState({
            isSubmitted: !this.state.isSubmitted
        })
    }
    return (
        <>
        <h1>Employee Feedback Form</h1>
        {!this.state.isSubmitted ?
        <form>
          <label>Name : </label>
          <input type="text" placeholder='enter your name' id='nameIp' onChange={handleChange}/>
          <br />
          <label>Department : </label>
          <input type="text" placeholder='enter your department' id='departmentIp' onChange={handleChange}/>
          <br />
          <label>Rating : </label>
          <input type="text" placeholder='enter your rating' id='ratingIp' onChange={handleChange}/>
          <br />
          <button onClick={handleSubmit}>Submit</button>
          </form>
          :
          <div>
            {this.state.users.map((item,index)=>{
                return(
                    <div key={index}>
                        <p>Name : {item.nameIp} | Department : {item.departmentIp} | 
                        Rating : {item.ratingIp}</p>       
                    </div>
                )
            })}
            <button onClick={handleBack}>Go Back</button>
          </div>
  }
        </>
    )
  }
}
export default FeedbackForm

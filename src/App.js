import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SecHeading from './Sec-heading/SecHeading';
import Header from './Header/Header';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labelValues: [''],
      labelStatus: [0],
      isAllSelected: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAllSelection = this.handleAllSelection.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  //  this.countActiveLabels -this.countActiveLabels.bind(this);
  }
  createUI() {
    return this.state.labelValues.map((el, i) =>
      <div key={i}>
        <div className="ro">
          <div className="col col-1">
            <div className="checkbox"
              style={this.state.labelStatus[i] ? { background: '#3252C9' } : { background: 'transparent' }}
              onClick={this.handleCheckbox.bind(this, i)}>
              <span id="checkmark"></span>
            </div>
          </div>
          <div className="col col-2">
            <input type="text" className="label" placeholder={`Label ${i + 1}`} value={el || ''} onChange={this.handleChange.bind(this, i)} />
          </div>
          <div className="col col-3">
            <button type="button" className="btn-remove"
              style={i > 0 ? { display: 'block' } : { display: 'none' }}
              onClick={this.removeClick.bind(this, i)}>Remove
             </button>
          </div>
        </div>
      </div>
    )
  }

  handleChange(i, event) {
    let values = [...this.state.labelValues];
    values[i] = event.target.value;
    this.setState({
      labelValues: values,
    });
  }

  addClick() {

    let labelValues = [...this.state.labelValues];
    let labelStatus = [...this.state.labelStatus];
    labelValues.push(0);
    labelStatus.push(0);
    this.setState({
      labelValues: labelValues,
      labelStatus: labelStatus
    });
    if(this.state.isAllSelected){
      this.setState({
        isAllSelected:false
      })
    }
  }

  removeClick(i) {
    let labelValues = [...this.state.labelValues];
    let labelStatus = [...this.state.labelStatus];
    labelStatus.splice(i,1);
    labelValues.splice(i, 1);
    this.setState({
      labelValues: labelValues,
      labelStatus:labelStatus
    })
    //this.countActiveLabels();
  }
  handleCheckbox(i) {
   // this.countActiveLabels();
    let labelStatus = [...this.state.labelStatus];
    labelStatus[i] = !labelStatus[i];
    this.setState({
      labelStatus: labelStatus
    })
  
  }
  handleAllSelection() {
    if(this.state.labelValues.length>1){

    
    let labelStatus = [...this.state.labelStatus];
    this.setState({
      isAllSelected: !this.state.isAllSelected
    }, () => {
      if (this.state.isAllSelected) {


        for (let i = 1; i < labelStatus.length; i++) {
          labelStatus[i] = 1;
        }
        this.setState({
          labelStatus: labelStatus,

        })
      }
      else {

        for (let i = 1; i < labelStatus.length; i++) {
          labelStatus[i] = 0;
        }
        this.setState({
          labelStatus: labelStatus,

        })
      }
    })
  }
 // this.countActiveLabels();
  }
  // countActiveLabels(){
  //   console.log("rannn",this.state.labelStatus);
  //   let count=0;
  //   for(let i = 0; i< this.state.labelStatus.length;i++){
  //     if(this.state.labelStatus[i] ==1){
  //       count++;
  //     }
  //   }
  //  this.setState({
  //    activeLabelCount:count
  //  })
  // }
  handleRemoveAll() {
    let labelStatus = [...this.state.labelStatus];
    let labelValues = [...this.state.labelValues];

    let newStatus = labelStatus.filter((el) => el == 0);
    this.setState({
      labelStatus: newStatus,
      labelValues: newStatus
    },()=>{
      console.log(this.state.labelStatus,this.state.labelValues);
    });
  }
  handleSubmit(event) {
    console.log(this.state.selectedLabel)
    event.preventDefault();
  }

  render() {
    return (
      <div>
          <Header/>
          <br/>
      <div className="container">
      
        <SecHeading
          selectAll={this.handleAllSelection}
          isAllSelected ={this.state.isAllSelected}
          labelCount ={this.state.labelStatus}
          removeAll = {this.handleRemoveAll}
        />
        <form onSubmit={this.handleSubmit}>
          {this.createUI()}
          <div className="ro ro-line">
            <div className="col col-1 col-line">

            </div>
            <div className="col col-2 col-line">
              <hr className="line1" />
            </div>

            <div className="col col-3 col-line">

            </div>
          </div>
          <div className="ro">
            <div className="col col-1">
            </div>
            <div className="col col-2 col-btn">
              <button type="button" id="addLabel" onClick={this.addClick.bind(this)}>+ADD LABEL</button>
            </div>
            <div className="col col-3">
            </div>
          </div>

          <div className="ro">
            <div className="col">
              <button type="submit" id="submit">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default App;

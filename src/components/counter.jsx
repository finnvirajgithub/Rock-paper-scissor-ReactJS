import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count : this.props.value,
    tags : ['tag1','tag2','tag3']
  };

  styles = {
    fontSize : 50,
    fontWeight : "bold"
  };

  renderTags(){
    if (this.state.tags.length === 0) return <p className='badge badge-secondary m-2'>There are no tags!</p>;

    return <ul>
    {this.state.tags.map(tag => <li key = {tag}>{ tag }</li>)}
  </ul>;
  }

  handleIncrement= (product) => {
    console.log(product)
    this.setState({ count : this.state.count + 1 });
  }
  handleDecrement= () => {
    this.setState({ count : this.state.count - 1 });
  }
 
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 })
  } 
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  
  render() { 
    let classes = this.badgeClasses();
    console.log('props',this.props);

    return (
    <div>
      { this.props.children };
      <span style= { this.styles } className={ classes }>{ this.formatCount() }</span>
      <button onClick={this.doHandleIncrement} className='btn  btn-success btn-sm m-2'>Increment</button>
      <button onClick={this.handleDecrement} className='btn  btn-danger btn-sm m-2'>Increment</button>

      {/* {this.renderTags()} */}
    </div>
    );
  }

  

  badgeClasses() {
    let classes = "badge ";
    classes += this.state.count === 0 ? "badge-warning m-2" : "badge-primary m-2";
    return classes;
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? "Zero" : count;
  }
}
 
export default Counter;
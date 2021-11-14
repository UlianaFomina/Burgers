import React from 'react';

class EditBurgerForm extends React.Component{
  hendleChange = event => {
    
    const updatedBurger = {
      ...this.props.burger,
      [event.currentTarget.name]:event.currentTarget.value,
    }
    this.props.updateBurger(this.props.index, updatedBurger);
  }
  render(){
    return(
      <div className='burger-edit'>
        <input onChange={this.hendleChange} name='name' type='text' value={this.props.burger.name} />
        <input onChange={this.hendleChange} name='price' type='text' value={this.props.burger.price} />
        <select onChange={this.hendleChange} name='status' className='status' value={this.props.burger.status}> 
          <option value='available'>Available</option>
          <option value='unavailable'>Remote from menu</option>
        </select>
        <textarea onChange={this.hendleChange} name='desc' value={this.props.burger.desc} />
        <input onChange={this.hendleChange} name='image' type='text' value={this.props.burger.image} />
      </div>
    )
  }
}
export default EditBurgerForm;
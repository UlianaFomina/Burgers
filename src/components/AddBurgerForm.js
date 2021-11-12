import React from 'react';

class AddBurgerForm extends React.Component{
  createBurger = event => {
    event.preventDefault();
    console.log('add');
  }
  render(){
    return(
      <form className='burger-edit' onSubmit={this.createBurger}>
        <input name='name' type='text' placeholder="Name" autoComplete='off'/>
        <input name='price' type='text' placeholder="Price" autoComplete='off'/>
        <select name='status' className='status'> 
          <option value='available'>Available</option>
          <option value='unavailable'>Remove from menu</option>
        </select>
        <textarea name='desc' placeholder="Desc"/>
        <input name='image' type='text' placeholder="Image" autoComplete='off'/>
        <button type="submit">Add to menu</button>
      </form>
    );
  }
}
export default AddBurgerForm;
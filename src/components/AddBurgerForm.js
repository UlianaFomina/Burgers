import React from 'react';

class AddBurgerForm extends React.Component{

  nameRef = React.createRef();
  priseRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBurger = event => {
    event.preventDefault();
    const burger = {
      name: this.nameRef.current.value,
      prise: parseFloat(this.priseRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,

    }
    this.props.addBurger(burger);
    event.currentTarget.reset();//для обновления формы
  };

  render(){
    return(
      <form className='burger-edit' onSubmit={this.createBurger}>
        <input ref={this.nameRef} name='name' type='text' placeholder="Name" autoComplete='off'/>
        <input ref={this.priseRef} name='price' type='text' placeholder="Price" autoComplete='off'/>
        <select ref={this.statusRef} name='status' className='status'> 
          <option value='available'>Available</option>
          <option value='unavailable'>Remove from menu</option>
        </select>
        <textarea ref={this.descRef} name='desc' placeholder="Desc"/>
        <input ref={this.imageRef} name='image' type='text' placeholder="Image" autoComplete='off'/>
        <button type="submit">Add to menu</button>
      </form>
    );
  }
}
export default AddBurgerForm;
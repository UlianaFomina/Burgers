import React from 'react';
import AddBurgerForm from './AddBurgerForm';

class MenuAdmin extends React.Component{
  render(){
    return(
      <div className="menu-admin">
        <h2>Menu control</h2>
        <AddBurgerForm />
      </div>
    );
  }
}
export default MenuAdmin;
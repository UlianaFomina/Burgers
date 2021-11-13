import React from 'react';
import AddBurgerForm from './AddBurgerForm';

class MenuAdmin extends React.Component{
  render(){

    return(
      <div className="menu-admin">
        <h2>Menu control</h2>
        <AddBurgerForm addBurger={this.props.addBurger} />
        <button onClick={this.props.LoadSampleBurgers}>Load burgers</button>
      </div>
    );
  }
}
export default MenuAdmin;
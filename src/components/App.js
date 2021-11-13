import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from "../sample-burgers";
import Burger from './Burger';


class App extends React.Component{
  state = {
    burgers: {},
    order: {}
  }

  addToOrder = (key) => {
    // 1 копия
    const order = { ...this.state.order };
    //2 берём ключ бургера и добавляем в ордкр
    order[key] = order[key] + 1 || 1;
    //3 записываем в state
    this.setState({order});
    
  };

  addBurger = burger => {
    // 1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Добавить новый бургер в переменную burgers
    burgers[`burger${Date.now()}`] = burger;
    // 3. Записать наш новый объект burgers в state
    this.setState({ burgers });
  };

  loadSampleBurgers = () =>{
    this.setState({burgers:sampleBurgers});
  };

  render(){
    return(
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very hot Burger"/>
          <ul className="burgers">
            {Object.keys(this.state.burgers).map(key => {
                  return <Burger
                  addToOrder = {this.addToOrder} 
                  key={key} 
                  index={key}
                  details = {this.state.burgers[key]}
                  />
                }
              )
            }
          </ul>
        </div>
        <Order burgers={this.state.burgers} order={this.state.order}/> 
        <MenuAdmin addBurger={this.addBurger}
        LoadSampleBurgers={this.loadSampleBurgers} />
      </div>
    );
  }
}
export default App;

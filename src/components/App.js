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

  addBurger = (burger) => {
    //1 Делаем копию объекта state
    const burgers = {...this.state.burgers};
    //2 Добавляем burger в burgers
    burgers[`burger${Date.now()}`]= burgers;
    //3 Зписать обновлённый новый burgers в state
    this.setState({burgers}); 
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
                  return <Burger key={key} 
                  index={key}
                  details = {this.state.burgers[key]}
                  />
                }
              )
            }
          </ul>
        </div>
        <Order/>
        <MenuAdmin addBurger={this.addBurger}
        LoadSampleBurgers={this.loadSampleBurgers} />
      </div>
    );
  }
}
export default App;

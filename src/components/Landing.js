import React from 'react';
import restaurants from '../sample-restaurants';
import PropTypes from 'prop-types';

class Landing extends React.Component{

  static propTypes = {
    history: PropTypes.object
  }

  state = {
    display: false,
    title: '',
    url: '' 
  };

  displayList = () => {
    const {display} = this.state; // const display = this.state.display
    this.setState({display: !display}); 
  };
  getTitle = restaurant => {
    console.log(restaurant);
    const {title, url} = restaurant;
    this.setState({title,url, display:false});//this.setState({title: title, url:url, display: false})
  };
  goToRestaurant = () => {
    const { url } = this.state;
    this.props.history.push(`/restaurant/${url}`);
  };
  render(){
    //return React.createElement('p', {className: 'first'}, 'Hello') //как вариант
    return (
        <div className='restaurant_select'>
          <div className='restaurant_select_top'>
            <div onClick={this.displayList} className='restaurant_select_top-header'>
              {this.state.title ? this.state.title: 'Choose a restaurant'}
            </div>
            <div className='arrow_picker'>
              <div className='arrow_picker-up'></div>
              <div className='arrow_picker-down'></div>
            </div>
          </div>
          {this.state.display? (<div className='restaurant_select_bottom'>
            <ul>
              {restaurants.map(restaurant =>{ //стрелочная функция выводит назване каждого ресторана
              return <li onClick={() => this.getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>;
              })}
            </ul>
          </div>):null}
          {this.state.title && !this.state.display?<button onClick={this.goToRestaurant}>Go to restaurant</button>:null}
        </div>
    );
  }
}
export default Landing;
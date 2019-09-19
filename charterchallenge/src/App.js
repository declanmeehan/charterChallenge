import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

var usersInfo = [
  {id:1,"name":"Mike","totalPurchases":300.56,"points":0},
  {id:2,"name":"Rachel","totalPurchases":103.22,"points":0},
  {id:3,"name":"Steve","totalPurchases":253.66,"points":0},
  {id:4,"name":"Hannah","totalPurchases":752.07,"points":0},
];
var points;
/*var usersPoints = usersInfo.map((user) => 
  <div key={user.id}>{user.name} {user.points} </div>); */

    var usersInfo = [
  {id:1,"name":"Mike","totalPurchases":300.56,"points":0},
  {id:2,"name":"Rachel","totalPurchases":103.22,"points":0},
  {id:3,"name":"Steve","totalPurchases":253.66,"points":0},
  {id:4,"name":"Hannah","totalPurchases":752.07,"points":0},
  ]


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  } 


  componentDidMount() {
    var i = 0
    usersInfo.forEach((user) => {
      usersInfo[i].totalPurchases = 100
      i++
    })
    var pointsCopy = usersInfo.filter((user) => user.points)
/*    this.setState({
      usersInfo: {
        ...this.state.usersInfo,
        points: [100],
        }
    }) */
    console.log(this.state)
  }


           //<div key={user.id}>{user.name} {user.points} </div>
  render() {
    return (
      <div className="App" >
        {usersInfo.map((user) =>
          user.name )}
      </div>
    );    
  }
}

export default App;

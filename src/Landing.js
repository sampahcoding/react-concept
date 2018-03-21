// will be container and handle datas redux etc
import React from 'react';
import List from './List';

class Landing extends React.Component {
  render() {
    var options = [
      {id: 1, name: "List 3"},
      {id: 2, name: "List 2"},
      {id: 3, name: "List 1"}
    ];

    return <div>
            <h1>Sample List</h1>
            <List options={options}/>
          </div>;
  }
}

export default Landing;

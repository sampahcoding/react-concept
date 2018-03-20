import React from 'react';

class List extends React.Component {

  render() {
    var buildList = function(option) {
      return <li key={option.id} value={option.id}>
              {option.name}
            </li>;
    }

    var options = this.props.options;

    return <ol>
              {options.map(buildList)}
           </ol>;
  }
}

export default List;

var React = require('react');
var {Link, IndexLink} = require('react-router');


// var Nav = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h2>Nav component</h2>
//         <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
//         <IndexLink to="/examples" activeClassName="active" activeStyle={{color: 'red'}}>examples</IndexLink>
//
//         <a href="#/about">Go to About</a>
//       </div>
//     );
//   }
// });
var Nav = () => {
  return(
    <div>
      <h2>Nav component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
      <IndexLink to="/examples" activeClassName="active" activeStyle={{color: 'red'}}>examples</IndexLink>

      <a href="#/about">Go to About</a>
    </div>
  )
}
module.exports = Nav;

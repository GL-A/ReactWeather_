var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return(
//       <h3>About component</h3>
//     );
//   }
// });
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a small weather app I built While learning React.</p>
      <p>I build this app with</p>
      <ul>
        <li>
          React
        </li>
        <li>
          Webpack
        </li>
        <li>
          Open Weather Map
        </li>
      </ul>
    </div>
  )
}
module.exports = About;

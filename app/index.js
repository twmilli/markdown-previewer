var React = require('react');
var MainContainer = require('./components/MainContainer');
require('./stylesheets/main.scss');
var ReactDOM = require("react-dom");

ReactDOM.render(
  <MainContainer />,
  document.getElementById("app")
);

var React = require('react');
var PropTypes = React.PropTypes;

var DisplayHTML = function(props){
    return(
      <div className = "display"
        dangerouslySetInnerHTML={{__html: props.html}} />

    )
}

DisplayHTML.PropTypes = {
  html: PropTypes.string.isRequired
}

module.exports = DisplayHTML;

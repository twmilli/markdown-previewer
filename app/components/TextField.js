var React = require('react');
var PropTypes = React.PropTypes;

var TextField = function(props){
    return(
        <textarea cols="60" rows="30"
        className="text-field"
        onChange={props.handleChange}
        defaultValue={props.text}/>
    )
  }

TextField.PropTypes = {
  handleChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

module.exports = TextField;

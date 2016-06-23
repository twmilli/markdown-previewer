var React = require('react');
var TextField = require('./TextField');
var marked = require('marked');
var DisplayHTML = require('./DisplayHTML');

marked.setOptions({
  sanitize:true
});

var MainContainer = React.createClass({

  getInitialState: function(){
    var initialText = ("Don't know markdown?\n" +
    "check out *[Markdown Tutorial](http://www.markdowntutorial.com/)*\n\n" +
    "Heading\n=======\n\nSub-heading\n-----------\n"+
    "\n### Another deeper heading \n\n" +
    "Paragraphs are separated\n" +
    "by a blank line.\n\n" +
    "Leave 2 spaces at the end of a line to do a\n" +
    "line break\n\n" +
    "Text attributes *italic*, **bold**,\n" +
    "`monospace`, ~~strikethrough~~ .\n" +
    "Shopping list:\n\n" +
    "* apples\n" +
    "* oranges\n" +
    "* pears\n\n" +
    "Numbered list:\n\n"+

  "1. apples\n" +
  "2. oranges\n" +
  "3. pears\n\n" +

"The rain---not the reign---in\n" +
"Spain.\n\n" +

 "Coded by *[Taylor Milliman](https://www.freecodecamp.com/twmilli)*");
    return{
      initialText: initialText,
      displayText: marked(initialText)
    }
  },

  removeFormatting: function(text){
    return text.replace(/(\r\n|\n|\r)/gm,"");
  },

  convertText:function(){

  },


  handleTextChange: function(e){
    this.setState({
      displayText: marked(e.target.value)
    });
    console.log(e.target.value);
  },

  render: function(){
    return(
      <div>
        <h1 className="title"> Markdown Previewer </h1>
        <TextField text={this.state.initialText} handleChange={this.handleTextChange}/>
        <DisplayHTML html={this.state.displayText}/>
      </div>
    )
  }
});

module.exports = MainContainer;

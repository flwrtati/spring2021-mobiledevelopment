// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  constructor (title, author, text) {
    // Send what it gets to its parent object
    super(title, author, text)
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      <Article>
        <Title>${this.props.title}</Title>
        <Author>${this.props.author}</Author>
        <Text>${this.props.text}</Text>
      </Article>
    `
    );
    
  }

}

export default Article;

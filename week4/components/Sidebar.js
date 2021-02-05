import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';
    
    this.props.menu.forEach( (item) => {

      //Renders items to be included in a list
      responseHTML += '<li>'+ item +'</li>' ;

      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });

    //Renders list to be included in bullet list. 
    responseHTML = '<ul>'+ responseHTML +'</ul>' ;
    return responseHTML;
  }
}

export default Sidebar;

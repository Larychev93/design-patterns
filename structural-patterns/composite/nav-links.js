/**
 * Leaf class
 */
const Component = require('./component');


class NavLinks extends Component{
  update() {
    console.log(this.props.name + ' updated');
  }
}

module.exports = NavLinks;

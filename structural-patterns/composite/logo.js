/**
 * Leaf class
 */
const Component = require('./component');


class Logo extends Component{
  update() {
    console.log(this.props.name + ' updated');
  }
}

module.exports = Logo;


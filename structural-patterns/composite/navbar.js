/**
 * Composite class (компоновщик)
 */
const Component = require('./component');

class Navbar extends Component {
  update() {
    for (const child of this.props.children) {
      child.update();
    }
  }
}

module.exports = Navbar;

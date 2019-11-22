/**
 * Composite class (компоновщик)
 */
const Component = require('./component');

class Sidebar extends Component {
  update() {
    for (const child of this.props.children) {
      child.update();
    }
  }
}

module.exports = Sidebar;

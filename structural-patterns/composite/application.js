/**
 * Composite class (компоновщик)
 */
const Component = require('./component');

class Application extends Component {
  update() {
    for (const child of this.props.children) {
      child.update();
    }
  }
}

module.exports = Application;

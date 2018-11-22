import MaterialTopbarMenuIcon from './MaterialTopbarMenuIcon.js';
import BaseComponent from '../BaseComponent.js';

class MaterialTopbar extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};

    this.render();
  }

  render() {
    this.innerHTML = `
            <header class="material-topbar">
                <div class="inner">
                    <h6>${this.props.title}</h6>
                </div>
            </header>
        `;

    if (this.props.showMenu) {
      const menuIcon = new MaterialTopbarMenuIcon({ menu: this.props.menu });
      const inner = this.querySelector('.inner');
      inner.insertBefore(menuIcon, inner.firstChild);
    }
  }
}

MaterialTopbar.propTypes = {
  title: { type: 'string', isRequired: true },
  showMenu: { type: 'boolean' },
  menu: { type: 'MaterialMenu' },
};

customElements.define('material-topbar', MaterialTopbar);

export default MaterialTopbar;

import MaterialTopbarMenuIcon from './MaterialTopbarMenuIcon.js';
import BaseComponent from '../BaseComponent.js';
import MaterialLinkIcon from './MaterialLinkIcon.js';

class MaterialTopbar extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};

    this.render();
    window.addEventListener('pokemon-unit-load', this.loadTitle.bind(this), false);
  }

  loadTitle(e) {
    this.props.subTitle = e.detail.title;
    this.props.showReturn = e.detail.showReturn;
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

    const inner = this.querySelector('.inner');

    if (this.props.showReturn) {
      const returnIcon = new MaterialLinkIcon({ icon: 'chevron_left', link: '#/' });
      inner.insertBefore(returnIcon, inner.firstChild);
      this.querySelector('h6').innerText = this.props.subTitle;
    } else if (this.props.showMenu) {
      const menuIcon = new MaterialTopbarMenuIcon({ menu: this.props.menu });
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

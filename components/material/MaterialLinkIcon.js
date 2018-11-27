
import BaseComponent from '../BaseComponent.js';

class MaterialLinkIcon extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="${this.props.link}"><i class="material-icons">${this.props.icon}</i></a>
    `;
  }
}

MaterialLinkIcon.propTypes = {
  icon: { type: 'string', isRequired: true },
  link: { type: 'string' },
};

customElements.define('material-link-icon', MaterialLinkIcon);

export default MaterialLinkIcon;

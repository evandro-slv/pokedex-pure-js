import BaseComponent from '../BaseComponent.js';

class MaterialTopbarMenuIcon extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};
    this.render();
  }

  menuOnClick(e) {
    e.preventDefault();
    this.props.menu.style.display = 'block';

    setTimeout(() => {
      this.props.menu.querySelector('.overlay').style.opacity = 0.2;
      this.props.menu.querySelector('.material-nav').style.left = 0;
    }, 100);
  }

  render() {
    this.innerHTML = '<a href=""><i class="material-icons">menu</i></a>';
    this.onclick = this.menuOnClick;
  }
}

MaterialTopbarMenuIcon.propTypes = {
  menu: { type: 'MaterialMenu', isRequired: true },
};

customElements.define('material-topbar-menu-icon', MaterialTopbarMenuIcon);

export default MaterialTopbarMenuIcon;

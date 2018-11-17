class Menu extends HTMLElement {
  constructor(props) {
    super();
    this.props = props;

    if (!this.props.items) throw new Error('Component <Menu>: prop [items] is required.');

    this.render();

    const overlay = this.querySelector('.overlay');

    overlay.addEventListener('click', this.overlayOnClick.bind(this));
    overlay.addEventListener('transitionend', this.overlayOnTransitionEnd.bind(this));
  }

  overlayOnClick() {
    const overlay = this.querySelector('.overlay');

    overlay.style.opacity = 0;
    this.querySelector('.material-nav').style.left = '-18rem';
  }

  overlayOnTransitionEnd() {
    if (this.querySelector('.overlay').style.opacity === '0') {
      this.style.display = 'none';
    }
  }

  render() {
    this.innerHTML = `
            <nav class="material-nav">
                ${this.props.title ? `<h6>${this.props.title}</h6>` : ''}
                <ul>
                    ${this.props.items.map(item => `<li><a href=''>${item.icon ? `<i class="material-icons">${item.icon}</i>` : ''
  } <span>${item.title}</span></a></li>`).join('')}
                </ul>
            </nav>
            <div class="overlay"></div>
        `;
  }
}

customElements.define('material-menu', Menu);

export default Menu;

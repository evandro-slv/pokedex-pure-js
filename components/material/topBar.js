import TopBarMenuIcon from './topBarMenuIcon.js';

class TopBar extends HTMLElement {
  constructor(props) {
    super();
    this.props = props;

    if (!this.props.title) throw new Error('Component <TopBar>: prop [title] is required.');

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
      const menuIcon = new TopBarMenuIcon({ menu: this.props.menu });
      const inner = this.querySelector('.inner');
      inner.insertBefore(menuIcon, inner.firstChild);
    }
  }
}

customElements.define('material-topbar', TopBar);

export default TopBar;

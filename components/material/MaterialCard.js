import BaseComponent from '../BaseComponent.js';

class MaterialCard extends BaseComponent {
  constructor(props) {
    super(props);
    this.props = props || {};
    this.render();
  }

  set sprite(sprite) {
    this.props.sprite = sprite;
    this.render();
  }

  render() {
    if (this.props.skeleton) {
      this.innerHTML = `
                <div class="content loading">
                    <h6>...</h6>
                    <div class="placeholder"></div>
                </div>
            `;
    } else {
      this.innerHTML = `
                <div class="content">
                    <h6>${this.props.title}</h6>
                </div>
            `;

      if (this.props.sprite) {
        const img = document.createElement('img');
        img.src = this.props.sprite;
        img.alt = this.props.title;
        this.querySelector('.content').appendChild(img);
      }
    }
  }
}

MaterialCard.propTypes = {
  skeleton: { type: 'boolean' },
  title: { type: 'string' },
  sprite: { type: 'string' },
};

customElements.define('material-card', MaterialCard);

export default MaterialCard;

class Card extends HTMLElement {
  render() {
    if (this.skeleton) {
      this.innerHTML = `
                <div class="content loading">
                    <h6>...</h6>
                    <div class="placeholder"></div>
                </div>
            `;
    } else {
      this.innerHTML = `
                <div class="content">
                    <h6>${this.title}</h6>
                </div>
            `;

      if (this.sprite) {
        const img = document.createElement('img');
        img.src = this.sprite;
        img.alt = this.title;
        this.querySelector('.content').appendChild(img);
      }
    }
  }
}

customElements.define('material-card', Card);

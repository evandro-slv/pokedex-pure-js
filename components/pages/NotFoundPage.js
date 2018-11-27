import BaseComponent from '../BaseComponent.js';

class NotFoundPage extends BaseComponent {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <h4>404</h4>
      <p>Sorry, but the page you're looking for doesn't exist.</p>
      <button class="material-button">Go to home page</button>
    `;

    this.querySelector('button').onclick = () => {
      window.location.hash = '#/';
    };
  }
}

customElements.define('not-found-page', NotFoundPage);

export default NotFoundPage;

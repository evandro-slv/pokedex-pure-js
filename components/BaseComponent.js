class BaseComponent extends HTMLElement {
  constructor(props) {
    super();
    this.checkPropTypes(props || {});
  }

  checkPropTypes(props) {
    const { propTypes } = this.constructor;
    const keys = Object.keys(propTypes);

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const propType = propTypes[key];
      const value = props[key];

      if (propType.isRequired && value === undefined) {
        throw new Error(`Required prop [${key}] of component <${this.tagName.toLowerCase()}> is required`);
      }

      if (value !== undefined && propType.type !== undefined) {
        const type = typeof value;
        if (propType.type !== type) {
          const constructorName = value.constructor.name;

          if (propType.type !== constructorName) {
            throw new Error(`Prop [${key}] of component <${this.tagName.toLowerCase()}> with invalid value, expected [${propType.type}], got [${type}<${constructorName}>]`);
          }
        }
      }
    }
  }
}

export default BaseComponent;

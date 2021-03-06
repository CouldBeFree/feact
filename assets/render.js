class FeactDOMComponent {
  constructor(element) {
    this._currentElement = element
  }

  mountComponent(container) {
    const domElement = document.createElement(this._currentElement.type);
    const text = this._currentElement.props.children;
    const textNode = document.createTextNode(text);
    domElement.appendChild(textNode);

    container.appendChild(domElement);

    this._hostHode = domElement;
    return domElement;
  }
}

const Feact  = {
  createElement(type, props, children) {
    const element = {
      type,
      props: props || {}
    };

    if(children) {
      element.props.children = children
    }

    return element
  },

  render(element, container) {
    const componentInstance = new FeactDOMComponent(element);
    return componentInstance.mountComponent(container)
  }
};

Feact.render(
  Feact.createElement('h1', null, 'I am from Feact render function'),
  document.getElementById('root')
);
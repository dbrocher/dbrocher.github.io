const template = document.createElement('template');

template.innerHTML = `
  <style>
    button {
      font-size: xx-large;
      border-radius: 10px;
      border-style: solid;
      border-width: 1px;
      border-color: gainsboro; 
      color: gray;
      cursor: pointer;
      transition: box-shadow 0.2s;
      height: 100%;
      width:100%;
    }
    button:hover {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
        0 3px 10px 0 rgba(0, 0, 0, 0.19);
      color: black;
    }
    </style>
    <button id="control"><slot></slot></button>
`;

class KeypadKey extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
    this.button = this.shadowRoot.getElementById('control');
  }
  connectedCallback() {
    switch (this.buttonType) {
      case 'denomination':
        this.button.style.fontSize = '12pt';
        this.button.style.backgroundColor = 'lightblue';
        break;
      case 'clear':
        this.button.style.backgroundColor = 'grey';
        this.button.style.color = 'white';
        break;
      case 'operation':
        this.button.style.backgroundColor = '#C5C4FC';
        break;
      case 'enter':
        this.button.style.backgroundColor = '#F9E3A6';
        break;
      case 'extra':
        this.button.style.color = 'Orchid';
        this.button.style.backgroundColor = '#E6B0AA';
        break;
      default:
    }
  }

  static get observedAttributes() {
    return ['buttonType'];
  }

  get buttonType() {
    return this.getAttribute('buttonType');
  }
  set buttonType(value) {
    this.setAttribute('buttonType', value);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(name);
    if (name.toLowerCase() === 'buttontype') {
      this.style.fontSize = 'xxsmall';
    }
  }
}

window.customElements.define('keypad-key', KeypadKey);

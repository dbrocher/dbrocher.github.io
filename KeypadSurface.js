const template = document.createElement('template');
template.innerHTML = `
<style>
#keypad-display {
  background-color: white;
  color: grey;
  height: 100%;
  width: 100%;
  font-size: xxx-large;
  text-align: end;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color: gainsboro;
}
td {
  height: 60px;
  width: 60px;
}
</style>
<table id="layout">
<tr>
  <td>
    <keypad-key buttonType="denomination">1000</keypad-key>
  </td>
  <td><keypad-key buttonType="denomination">500</keypad-key></td>
  <td colspan="4"><div id="keypad-display">$0.00</div></td>
</tr>
<tr>
  <td><keypad-key buttonType="denomination">200</keypad-key></td>
  <td><keypad-key buttonType="denomination">100</keypad-key></td>
  <td><keypad-key buttonType="clear">C</keypad-key></td>
  <td><keypad-key buttonType="clear">CE</keypad-key></td>
  <td><keypad-key buttonType="operation">x</keypad-key></td>
  <td><keypad-key buttonType="operation">/</keypad-key></td>
</tr>
<tr>
  <td><keypad-key buttonType="denomination">50</keypad-key></td>
  <td><keypad-key buttonType="denomination">20</keypad-key></td>
  <td><keypad-key>7</keypad-key></td>
  <td><keypad-key>8</keypad-key></td>
  <td><keypad-key>9</keypad-key></td>
  <td><keypad-key buttonType="operation">-</keypad-key></td>
</tr>
<tr>
  <td><keypad-key buttonType="denomination">10</keypad-key></td>
  <td><keypad-key buttonType="denomination">5</keypad-key></td>
  <td><keypad-key>4</keypad-key></td>
  <td><keypad-key>5</keypad-key></td>
  <td><keypad-key>6</keypad-key></td>
  <td><keypad-key buttonType="operation">+</keypad-key></td>
</tr>
<tr>
  <td><keypad-key buttonType="denomination">2</keypad-key></td>
  <td><keypad-key buttonType="denomination">1</keypad-key></td>
  <td><keypad-key>1</keypad-key></td>
  <td><keypad-key>2</keypad-key></td>
  <td><keypad-key>3</keypad-key></td>
  <td rowspan="2">
    <keypad-key buttonType="enter">
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="grey"
          stroke-width="2"
          d="M9,4 L4,9 L9,14 M18,19 L18,9 L5,9"
          transform="matrix(1 0 0 -1 0 23)"
        />
      </svg>
    </keypad-key>
  </td>
</tr>
<tr>
  <td><keypad-key buttonType="denomination">0.50</keypad-key></td>
  <td><keypad-key buttonType="denomination">0.20</keypad-key></td>
  <td><keypad-key>00</keypad-key></td>
  <td><keypad-key>0</keypad-key></td>
  <td><keypad-key>.</keypad-key></td>
</tr>
<tr>
  <td><keypad-key buttonType="denomination">0.10</keypad-key></td>
  <td><keypad-key buttonType="denomination">0.05</keypad-key></td>
  <td colspan="2">
    <keypad-key buttonType="extra">
      <img src="./images/list.svg" alt="" />
    </keypad-key>
  </td>
  <td colspan="2"><keypad-key buttonType="extra">?</keypad-key></td>
</tr>
</table>
`;
class KeypadSurface extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const table = this.shadowRoot.getElementById('layout');
    console.log(table.clientWidth);
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldVal, newVal) {}

  adoptedCallback() {}
}

window.customElements.define('keypad-surface', KeypadSurface);

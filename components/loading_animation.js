/** Displays a loading animation */
export default class DsLoadingAnimation extends HTMLElement {


  // Properties
  style = `
    .ds-loading-animation {
      width: 100%;
      height: 100%;
    }
    .ds-loading-animation img {
      width: 100%;
      height: auto;
      background-color: hsl(186,100%,12%);
    }
    
  `
  template = `
    <style>${ this.style }</style>
    <img src="../assets/img/ds-pulser.svg">
  `


  // Getters
  static get observedAttributes() { 
    return [
      'hidden'
    ]
  }
  

  // Constructor
  constructor() {
    super()
    this.createShadowDOM()
  }


  // Methods

  createShadowDOM() {
    // Create a shadow root
    this.attachShadow({mode: 'open'}) // sets and returns 'this.shadowRoot'
    const container = document.createElement('div')
    container.className = 'ds-loading-animation'
    container.innerHTML = this.template
    // Attach the elements to the shadow DOM
    this.shadowRoot.append(container)
  }


  // Lifecycle

  attributeChangeCallback(name, old_value, new_value) {
    
  }

}

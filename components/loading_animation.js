/** Displays a loading animation */
export class DsLoadingAnimation extends HTMLElement {


  // Properties
  style = `
    [hidden] {
      display: none;
    }
  `
  template = `
    <style>${ this.style }</style>
    <h1>I AM TOTALLY LOADING</h1>
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
    container.innerHTML = this.template
    // Attach the elements to the shadow DOM
    this.shadowRoot.append(container)
  }


  // Lifecycle

  attributeChangeCallback(name, old_value, new_value) {
    if (name === 'hidden' && new_value !== null) {
      console.log('I must hide')
    }
  }

}

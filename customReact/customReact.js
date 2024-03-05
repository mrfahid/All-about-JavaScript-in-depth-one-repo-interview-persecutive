const rootContainer = document.getElementById('root')

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "click me navigate to google.com"
}

function render(rootContainer, reactElement) {
  // const domElement = document.createElement(reactElement.type)
  // domElement.innerHTML = reactElement.children
  // domElement.setAttribute('href',reactElement.props.href)
  // domElement.setAttribute('target',reactElement.props.target)
  
  // rootContainer.appendChild(domElement)

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if (prop === "children") continue 
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  rootContainer.appendChild(domElement)
}

render(rootContainer, reactElement)
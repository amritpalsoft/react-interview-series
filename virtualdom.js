// when we use plain html,css, js then when a small change occurs in the dom 
// then whole dom, again recreates , so this slows down the application 

// So in react we started using Virtual DOM which is created before the actual DOM 
// so when a small change change is detected by the Diffing Algo of react it brought
// changes in the virtual DOM 
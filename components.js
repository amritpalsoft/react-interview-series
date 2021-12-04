// Components are isolated, independent, reusable piece of code

// There are two types of components in React 
// i. Class based
// ii. Function  based

// Class based components are defined as stateful 
// But Functional components are stateless 
// But after the introduction of Hooks, Functional components can also use state


// Structure of Class components 

//        class component extends React Component{
//            constructor(props){
//                super(props);
//            }
//            render(){
//                return(
//                    jsx
//                )
//            }
//        }
// to use props write      this.props.name
// to use state write      this.state={}
// to set state            this.setState({})
// uses LifeCycle methods


// Structure of Functional components


//           function component(props){
//               return(
//                   jsx
//               )
//           }

// to use props write   props.name 
// to use state write   const{state,setState}=usestate()
// to set state         setState()
// useEffect is a hook used instead of lifecycle method
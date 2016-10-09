class HelloWorld extends React.Component {
  render() {
    return (
       <h1>Hellow World with React and ES6!!!</h1>
    );
  }
}

ReactDOM.render(
  <HelloWorld />, document.getElementById('container')
)

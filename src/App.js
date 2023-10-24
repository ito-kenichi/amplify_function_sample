import { Component } from 'react';
import './App.css';
import { API, graphqlOperation } from 'aws-amplify';
import * as query from './graphql/queries';
import * as subscriptions from './graphql/subscriptions';
import * as mutations from './graphql/mutations';

class App extends Component {

  state = {
    todos: [],
    statusCode: 0,
    returnMessage: '',
  }
  
  componentDidMount() {

    try {
      this.subscribeTodo()
    } catch (e) {
      console.log("error : ", e);
    }
  }
  
  subscribeTodo = () => {
    try {

      API.graphql({
        query: subscriptions.onCreateTodo,
      }).subscribe({
        
        next: async() => {
          const listTodo = await API.graphql(graphqlOperation(query.listTodos))
          const tmpList = listTodo.data.listTodos.items.sort((first, second) => {
            if(first.createdAt > second.createdAt) {
              return 1;
            }
            if(first.createdAt < second.createdAt) {
              return -1;
            }
              return 0;
          })
          console.log(tmpList)

          const result = await API.graphql(graphqlOperation(query.helloWorld, {msg: 'test'}));
          console.log(result.data.helloWorld);
          this.setState({
            statusCode: result.data.helloWorld.statusCode,
            returnMessage: result.data.helloWorld.returnMessage,
            todos: tmpList
          })

        },
        error: (err) => {
          console.log("subscription error : ", err);
        }
      });
    } catch (e) {
      console.log("createTodo error : ", e)
    }
  }

  createNewTodo = async() => {
    // 新規登録 mutation
    const todo = {
      name: "Todo " + Math.floor(Math.random() * 10),
    }

    // 登録処理
    try {
      await API.graphql(graphqlOperation(mutations.createTodo, { input: todo }))

    } catch (e) {
      console.log("createTodo error : ", e)
    }
  }

  render() {
    
    return (
      <div className="App">
        <p>statusCode: {this.state.statusCode}</p>
        <p>returnMessage: {this.state.returnMessage}</p>
        <button onClick={this.createNewTodo}>Add Todo</button>
        <div>
          {this.state.todos.map((todo) => <p key={todo.id}>{todo.name} ({todo.createdAt})</p>)
          }
        </div>
      </div>
    );
  }
}

export default App;
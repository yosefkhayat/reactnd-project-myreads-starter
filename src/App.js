import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './component/ListBooks'
import './App.css'
import SearchPage from './component/SearchPage'

class BooksApp extends React.Component {
  state = {
    MyBooks:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((MyBooks) => {
      this.setState({ MyBooks })
    })
  }

 changeBook=(newbook,newshelf)=>{
    BooksAPI.update(newbook,newshelf)
    newbook.shelf=newshelf

      switch (newshelf){

        case 'none':
          this.setState(state=>({
            MyBooks:state.MyBooks.filter((b)=> newbook.id!==b.id)
          }))
          break
        default:
          this.setState(state=>({
            MyBooks:state.MyBooks.filter((b)=> newbook.id!==b.id)
          }))
          this.setState(state=>({
            MyBooks:state.MyBooks.concat([ newbook ])
          }))
      }
 }
  render() {
    return (
      <div className="app">
         <Route path='/search' render={() => (
          <SearchPage 
          MyBooks={this.state.MyBooks}
          onChangeBook={this.changeBook}
          />
        )}/>
        <Route exact path='/' render={() => 
          <ListBooks 
          MyBooks={this.state.MyBooks}
          onChangeBook={this.changeBook}
          />
        }/>
      </div>
    )
  }
}

export default BooksApp

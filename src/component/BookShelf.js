import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component{
    render(){
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.id}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.shelf.map((book)=>(
                        <li key={book.id}>
                        <Book book={book} onChangeBook={this.props.onChangeBook}/>
                        </li>
                      ))
                      }
                    </ol>
                  </div>
                </div>
        )
    }
}
export default BookShelf
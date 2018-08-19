import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'


class ListBooks extends Component{
  static propTypes = {
    MyBooks: PropTypes.array.isRequired
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf shelf={this.props.MyBooks.filter((book) => book.shelf === 'currentlyReading')} id={'Currently Reading'} onChangeBook={this.props.onChangeBook}/>
            <BookShelf shelf={this.props.MyBooks.filter((book) => book.shelf === 'wantToRead')} id={'Want To Read'} onChangeBook={this.props.onChangeBook} />
            <BookShelf  shelf={this.props.MyBooks.filter((book) => book.shelf === 'read')} id={'Read'} onChangeBook={this.props.onChangeBook} />
          </div>
        </div>
        <div className="open-search">
            <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}
export default ListBooks
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI';
import Book from './Book'


class SearchPage extends Component{
    state = {
        allBooks:[]
    }


    updateQuery = (query) => {
        if(query===''){
            this.setState({
                allBooks: []
            })
        }
        else{
            BooksAPI.search(query.trim(),20).then((Books) => {
                if (Books.length>0){
    
                    for (let index in Books) {
                        
                        let book = this.props.MyBooks.find(x => x.id === Books[index].id)
                        if (book)
                            Books[index].shelf = book.shelf
                        else{
                            Books[index].shelf='none'
                        }
                    }
                    
                    this.setState({
                        allBooks: Books
                    })
                }
                else 
                this.setState({
                    allBooks: []
                })
    
            })
        }
        

                
    }

    
    render() {
       
        return (<div className="search-books">
              <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                  />
  
                </div>
              </div>
              <div className="search-books-results">
              <div className="bookshelf-books">
                <ol className="books-grid">
                    
                    {this.state.allBooks.map((book)=>(
                        <li key={book.id}>
                            <Book book={book} onChangeBook={this.props.onChangeBook}/>
                        </li>
                    ))}
                </ol>
                </div>
              </div>
            </div>
          )
    }
}
export default SearchPage
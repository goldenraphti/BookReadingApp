import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class ListBooks extends Component {
    
    displayBook(book) {
        
        return (
            <li key={book.industryIdentifiers[0].identifier} >
               {console.log(book)}
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
        
    }
    
    
    render() {
        
        const booksList = this.props.books;
        
        return (
            
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                
                <div className="list-books-content">
                  <div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Currently Reading</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        
                            {booksList.map(book => book.shelf === 'currentlyReading' && (this.displayBook(book)))}
                        
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">

                            {booksList.map(book => book.shelf === 'wantToRead' && (this.displayBook(book)))}
                        
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        
                            {booksList.map(book => book.shelf === 'read' && (this.displayBook(book)))}
                       
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
          </div>
            
        )
    }
}

export default ListBooks;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookDisplay from './BookDisplay'

const ListBooks = (props) => {
    const booksList = props.books;
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
                        
                            {booksList.map(book => book.shelf === 'currentlyReading' && (
                                <BookDisplay
                                    key={book.id}
                                    bookToDisplay={book}
                                    onUpdateBook={props.onUpdateBook}
                                />
                            ))}
                        
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                            {console.log(booksList)}
                            {booksList.map(book => book.shelf === 'wantToRead' && (
                                <BookDisplay
                                    key={book.id}
                                    bookToDisplay={book}
                                    onUpdateBook={props.onUpdateBook}
                                />
                            ))}
                        
                        </ol>
                      </div>
                    </div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        
                            {booksList.map(book => book.shelf === 'read' && (
                                <BookDisplay
                                    key={book.id}
                                    bookToDisplay={book}
                                    onUpdateBook={props.onUpdateBook}
                                />
                            ))}
                       
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

export default ListBooks;
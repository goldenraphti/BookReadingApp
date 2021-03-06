import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends Component {
    
    state= {
        books:[],
    }

    componentDidMount() {
        this.retrieveBooks();
    }

    retrieveBooks() {
        BooksAPI.getAll().then(books => {
                this.setState({books:books});
            })
    }
    
    updateBook = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then( () => this.retrieveBooks() )
    }

    render() {
        return (
          <div className="app">

                 <Route exact  path="/" render={() => (
                    <ListBooks 
                        onUpdateBook={this.updateBook}
                        retrieveBooks={this.retrieveBooks}
                        books={this.state.books}
                    />
                )} />

                <Route path="/search" render={() => (
                    <SearchPage
                        onUpdateBook={this.updateBook}
                        retrieveBooks={this.retrieveBooks}
                        books={this.state.books}
                     />
                )} />
          </div>
        )
    }
}

export default BooksApp




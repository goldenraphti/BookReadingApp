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
        BooksAPI.getAll().then(books => {
                this.setState({books:books});
            })
    }
    
    updateBook = (book, shelf) => {

        BooksAPI.update(book, shelf).then( () => {
            
            book.shelf= shelf
            this.setState({})

        })
        
    }

    render() {
        return (
          <div className="app">

                 <Route exact  path="/" render={() => (
                    <ListBooks 
                        onUpdateBook={this.updateBook}
                        books={this.state.books}
                    />
                )} />

                <Route path="/search" render={() => (
                    <SearchPage />
                )} />
          </div>
        )
    }
}

export default BooksApp




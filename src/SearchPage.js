import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import BookDisplay from './BookDisplay'

class SearchPage extends Component {
    
    state = {
        books:[],
        query: '',
        searchTerms: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
    }
    
    updateQuery = (query) => {
        BooksAPI.search(query).then(books => {
            if(books) {
                this.setState({ books }) 
            }
        })
        this.setState({ query });
//        console.log(this.state.books)
    }
    
    render() {
        
                
        const booksList = this.state.books;
    
        return (
            
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                       <input
                           type='text'
                           placeholder='Search by title or author'
                           onChange={ (event) => this.updateQuery(event.target.value) }    
                       />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">

                        {booksList.map(book => (
                            <BookDisplay
                                bookToDisplay={book}
                            />
                        ))}

                    </ol>
                </div>
            </div>
            
        )
    }
}

export default SearchPage;
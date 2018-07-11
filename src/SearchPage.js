import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import BookDisplay from './BookDisplay'

class SearchPage extends Component {
    
    state = {
        books:[],
        query: '',
        queryCondition:'',
        searchTerms: ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'],
    }
    
    filterQuery = (query) => {
        
        const match = new RegExp(escapeRegExp(query), 'i')
  
        if (query === '') {
            console.log('query is empty')
            this.setState({queryCondition:'empty'})
        } else if (match.test(this.state.searchTerms) ) {
            this.updateQuery(query)
            this.setState({queryCondition:'validSearch'})
        } else {
            console.log('query not matching any allowed topic')
            this.setState({queryCondition:'error'})
            
        }
    }


    updateQuery = (query) => {
        
        console.log(query);
        
        BooksAPI.search(query).then(books => {
            if(books) {
                this.setState({ books }) 
            }
        })
        this.setState({ query });
    }
    
    render() {
        
                
        const booksList = this.state.books;
        
        const searchTermsStyle = {
            color: 'grey',
            fontSize: '0.9em',
            fontStyle: 'italic'
        }
    
        return (
            
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                       <input
                           type='text'
                           placeholder='Search by title or author'
                           onChange={ (event) => this.filterQuery(event.target.value) }    
                       />

                    </div>
                </div>
                <div className="search-books-results">
                   
                    {(this.state.queryCondition === 'validSearch' && (

                        <ol className="books-grid">
                            {booksList.map(book => (
                            <BookDisplay
                                bookToDisplay={book}
                                onUpdateBook={this.props.onUpdateBook}
                            />
                            ))}
                        </ol> 
                        ))}
                        
                    {(this.state.queryCondition === 'error' && (
                        <p>Your search does not return any result from our catalog. Please use one of the following search terms:
                            <span style={searchTermsStyle}>
                                {this.state.searchTerms.map((term) => (
                                    <span> {term},</span>
                                ))}
                            </span>
                        </p>
                    ))}
                    
                </div>
            </div>
            
        )
    }
}

export default SearchPage;
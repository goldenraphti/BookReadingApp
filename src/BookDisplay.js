import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const BookDisplay = (props) => {
        
    const book = props.bookToDisplay;

    const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No+thumbnail';

    const bookCoverStyle = {
        width: 128,
        height: 193,
        backgroundImage: `url(${thumbnail})`
    }

    const authors=  book.authors ? book.authors : 'Authors not mentionned';


    return (
        <li key={book.id} >
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={bookCoverStyle}></div>
                    <div className="book-shelf-changer">
                        <select onChange={e => props.onUpdateBook(book, e.target.value)} value={book.shelf}  aria-label="Modify reading category of the book?" id="reading-category-select" name="reading-category">
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{authors}</div>
            </div>
        </li>
    )

}


export default BookDisplay;
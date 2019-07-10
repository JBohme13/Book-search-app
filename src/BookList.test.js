import React from 'react'
import ReactDOM from 'react-dom'
import BookList from './BookList'

describe('BookList Component', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BookList />, div);
        React.DOM.unmountComponentAtNode(div);
    })
})
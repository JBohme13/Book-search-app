import React from 'react'
import ReactDOM from 'react-dom'
import BookItem from './BookItem'

describe('BookItem Component', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        RenderDOM.render(<BookItem />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})
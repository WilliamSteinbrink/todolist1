import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('ToDo test', () => {
    const {getByText, getByRole} = render(<App/>);

    // after rendering our component
    // use DOM APIs {query selector} to
    // make assertions
    expect(getByText('To Do List')).not.toBeNull();
    expect(getByRole('button')).not.toBeNull();
});

// test('add items to list', () => {
//     const {getByText, getByRole} = render(<App/>);

//     // after rendering our component
//     // use DOM APIs {query selector} to
//     // make assertions
//     expect(getByText('To Do List')).not.toBeNull();
//     const input = getByText('Enter a new ToDo and click Submit.');
//     fireEvent.change(input, {todo: 'wash car'});
//     fireEvent.click(getByText('Submit'));

//     // confirm data
//     getByText('wash car');
// });

test('user-events allow users to add...', () => {
    const { getByText, getByRole } = render(<App />);

    const input = getByText('Enter a new ToDo and click Submit.');
    const button = getByText('Submit');

    userEvent.type(input, 'Learn spanish');
    userEvent.click(button);

    getByText('Learn spanish');

});
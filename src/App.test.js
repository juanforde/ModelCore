// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ModelCore title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ModelCore/i);
    expect(titleElement).toBeInTheDocument();
});

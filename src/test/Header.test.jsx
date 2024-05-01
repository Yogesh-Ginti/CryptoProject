import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides custom matchers
import Header from '../components/Header'; // Adjust the import path as needed

describe('Header Component', () => {
  it('should render with the correct logo and text', () => {
    render(<Header />);

    // Check for the logo image
    const logoImage = screen.getByAltText('logo'); // Looking for img with alt="logo"
    expect(logoImage).toBeInTheDocument(); // Ensure the logo image is in the document
    expect(logoImage).toHaveAttribute('src', '/images/logo.png'); // Check the src attribute

    // Check for the CryptoVerse text
    const textElement = screen.getByText(/Cryptoerse/i); // Case-insensitive match
    expect(textElement).toBeInTheDocument(); // Ensure the text is in the document
    expect(textElement).toHaveTextContent('CryptoVerse'); // Exact text content check
  });
});

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Header from '../components/Header';
describe('Header Component', () => {
  it('should render with the correct logo and text', () => {
    render(<Header />);

    // Check for the logo image
    const logoImage = screen.getByAltText('logo'); 
    expect(logoImage).toBeInTheDocument(); 
    expect(logoImage).toHaveAttribute('src', '/images/logo.png'); 

    // Check for the CryptoVerse text
    const textElement = screen.getByText(/Cryptoerse/i); // Case-insensitive match
    expect(textElement).toBeInTheDocument(); 
    expect(textElement).toHaveTextContent('CryptoVerse'); // Exact text content check
  });
});

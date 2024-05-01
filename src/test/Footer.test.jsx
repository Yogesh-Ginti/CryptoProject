// tests/Footer.test.jsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended DOM assertions
import Footer from '../components/Footer'; // Adjust the import path as needed

describe('Footer Component', () => {
  it('should render the reserved rights message correctly', () => {
    render(<Footer />);

    const rightsMessage = screen.getByText(/All Right Are Reserved By Crypto/i); // Check the main text
    expect(rightsMessage).toBeInTheDocument(); // Ensure the text is in the document
    expect(rightsMessage).toHaveClass('font-semibold'); // Ensure it has the correct styling
    expect(rightsMessage).toHaveTextContent(/CryptoV/i); // Ensure it contains the "CryptoV" part
    expect(rightsMessage).toHaveTextContent('@2024'); // Ensure it contains the correct year
  });

  it('should render the author information with correct opacity', () => {
    const { getByText } = render(<Footer />);

    const authorInfo = getByText(/Author:yogesh_ginti/i); // Find the author information
    expect(authorInfo).toBeInTheDocument(); // Ensure it's in the document
    expect(authorInfo).toHaveClass('opacity-25'); // Check the class that sets opacity
    expect(authorInfo).toHaveClass('text-end'); // Check alignment class
  });
});

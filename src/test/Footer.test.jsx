import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer'; 

describe('Footer Component', () => {
  it('should render the reserved rights message correctly', () => {
    render(<Footer />);

    const rightsMessage = screen.getByText(/All Right Are Reserved By Crypto/i); // Check the main text
    expect(rightsMessage).toBeInTheDocument(); // Ensure the text is in the document
    expect(rightsMessage).toHaveClass('font-semibold'); // Ensure it has the correct styling
    expect(rightsMessage).toHaveTextContent(/CryptoV/i); // Ensure it contains the "CryptoV" part
    expect(rightsMessage).toHaveTextContent('@2024'); // Ensure it contains the correct year
  });

  
});

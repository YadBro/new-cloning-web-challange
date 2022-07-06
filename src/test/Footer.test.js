import Footer from "../partials/Footer";
import { render, screen } from "@testing-library/react";


test('should render footer component', () => { 
    render(<Footer />);
    const footerElement   = screen.getByTestId("footer-render-test");
    expect(footerElement).toBeInTheDocument();
});
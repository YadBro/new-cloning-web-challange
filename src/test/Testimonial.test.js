import Testimonial from "../partials/Testimonial";
import { render, screen } from "@testing-library/react";


test('should render testimonial component', () => { 
    render(<Testimonial />);
    const testimonialElement   = screen.getByTestId("testimonial-render-test");
    expect(testimonialElement).toBeInTheDocument();
});
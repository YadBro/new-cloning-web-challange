import Blog from "../partials/Blog";
import { render, screen } from "@testing-library/react";
import { ids, server_url, images } from "./init";

test('should render blog component', () => { 
    render(<Blog />);
    const blogElement   = screen.getByTestId("blog-render-test");
    expect(blogElement).toBeInTheDocument();
});

test('should have correct image', () => { 
    render(<Blog />);
    const imageElement   = screen.getAllByTestId(ids.image_1280x720_id);
    imageElement.forEach(item => {
        expect(item).toHaveProperty("src", server_url + images.image_1280x720_jpg);
    });
});
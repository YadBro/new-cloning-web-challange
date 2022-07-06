import Brand from "../partials/Brand";
import { render, screen } from "@testing-library/react";
import { ids, server_url, images } from "./init";


test('should render blog component', () => { 
    render(<Brand />);
    const brandElement   = screen.getByTestId("brand-render-test");
    expect(brandElement).toBeInTheDocument();
});


test('should have correct image', () => { 
    render(<Brand />);
    const imageElement   = screen.getByTestId(ids.image_1280x720_id);
    const imageElement2   = screen.getAllByTestId(ids.image_300x300_id);
    expect(imageElement).toHaveProperty("src", server_url + images.image_1280x720_jpg);
    imageElement2.forEach(item => {
        expect(item).toHaveProperty("src", server_url + images.image_300x300_jpg);
    });
});
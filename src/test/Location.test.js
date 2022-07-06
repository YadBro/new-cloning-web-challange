import Location from "../partials/Location";
import { render, screen } from "@testing-library/react";
import { ids, server_url, images } from "./init";

test('should render location component', () => { 
    render(<Location />);
    const locationElement   = screen.getByTestId("location-render-test");
    expect(locationElement).toBeInTheDocument();
});


test('should have correct image', () => { 
    render(<Location />);
    const imageElement   = screen.getByTestId(ids.image_1280x480_id);
    expect(imageElement).toHaveProperty("src", server_url + images.image_1280x480_jpg);
});
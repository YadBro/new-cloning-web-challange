import Navbar from "../partials/Navbar";
import { render, screen } from "@testing-library/react";
import { ids, server_url, images} from "./init";

test('should render navbar component', () => { 
    render(<Navbar />);
    const navbarElement   = screen.getByTestId("navbar-render-test");
    expect(navbarElement).toBeInTheDocument();
});


test('should have correct image', () => { 
    render(<Navbar />);
    const imageElement   = screen.getByTestId(ids.image_30x30_id);
    expect(imageElement).toHaveProperty("src", server_url + images.image_30x30_jpg);
});
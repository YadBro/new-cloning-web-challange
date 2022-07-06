import App from "../App";
import { render, screen } from "@testing-library/react";


test('should render app component', () => { 
    render(<App />);
    const appElement   = screen.getByTestId("app-render-test");
    expect(appElement).toBeInTheDocument();
});
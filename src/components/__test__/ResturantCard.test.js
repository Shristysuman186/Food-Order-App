import { render, screen } from "@testing-library/react"
import ResturantCard from "../ResturantCard"
import mostPopLabel from "../ResturantCard"
import MOCK_DATA from "../Mocks/resturantData_mock.json"
import "@testing-library/jest-dom"

it("should render resturant card props data", () => {
    render(<ResturantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("MP Paratha and Omlet");
    expect(name).toBeInTheDocument();
});

//unit testing for HOC
it("should render resturant card with mostPopLabel", () => {
    
    // const name = screen.getByText("MP Paratha and Omlet");
    // expect(name).toBeInTheDocument();
})
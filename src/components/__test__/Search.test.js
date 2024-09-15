import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import {act} from 'react'
import MOCK_DATA from "../Mocks/restaurantList_mock.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});
it("should search Rest list for food", async () => {
    await act (async () => {
        render(<BrowserRouter><Body/></BrowserRouter>);
    });
        const CardsBeforeSearch = screen.getAllByTestId("resCard");
        expect (CardsBeforeSearch.length).toBe(20);
        const searchBtn = screen.getByRole("button", {name: "Search"});
        const searchInput = screen.getByTestId("searchInput");
        fireEvent.change(searchInput, {target: {value: "food"}});
        fireEvent.click(searchBtn);
        const cardsAfterSearch = screen.getAllByTestId("resCard");
        expect(cardsAfterSearch.length).toBe(2);


});

it("should render top rated resturants" , async () => {
    await act (async () => {
        render(
            <BrowserRouter><Body/></BrowserRouter>
        );
    });
    const CardsBeforeFilter= screen.getAllByTestId("resCard");
        expect (CardsBeforeFilter.length).toBe(20);
        const filterBtn = screen.getByRole("button", {name: "Top Rated Resturants"});
        fireEvent.click(filterBtn);
        const CardsAfterFilter = screen.getAllByTestId("resCard");
        expect(CardsAfterFilter.length).toBe(7);

})
import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import RestaurantInfo from "../RestaurantInfo"
import Cart from "../Cart"
import MOCK_DATA from "../Mocks/menuItem_mock.json"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should render the number of added items in the cart", async () => {
    await act(async () => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                <RestaurantInfo/>
                <Cart/>
                </BrowserRouter>
            </Provider>
        );
            
    })
    const totalItemsBeforeAddingToCart = screen.getAllByTestId("foodItem");
    expect(totalItemsBeforeAddingToCart.length).toBe(20);
    const addBtn = screen.getAllByRole("button", {name: "Add to Cart"});
    console.log(addBtn.length);
    fireEvent.click(addBtn[0]);
    const totalItemsAfterAddingToCart = screen.getAllByTestId("foodItem");
    expect(totalItemsAfterAddingToCart.length).toBe(21);

})

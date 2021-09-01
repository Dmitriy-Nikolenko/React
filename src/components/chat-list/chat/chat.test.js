import userEvent from "@testing-library/user-event"
import { renderWithRedux } from "../../../utils/render-with-redux"
import { Chat } from "./chat"

let state = null

beforeEach(() => {
  state = {
    messages: {
      messages: { room1: [{ author: "User", message: "text" }] },
    },
  }
})

describe("chat component", () => {
  it("render chat with title", () => {
    const { container } = renderWithRedux(<Chat title="room1" />, {
      initialState: state,
    })

    const nodes = [...container.querySelectorAll(".text")]

    expect(nodes[0]).toHaveTextContent("room1")
    expect(nodes[1]).toHaveTextContent("User: text")
  })

  it("render chat with selected", () => {
    const { getByRole } = renderWithRedux(<Chat title="room1" selected={true}/>, {
      initialState: state,
    })

    expect(getByRole("button")).toHaveClass("Mui-selected")
   
  })

  it("render chat with handleListItemClick", () => {
    const handleListItemClick = jest.fn()
    const { getByRole } = renderWithRedux(<Chat title="room1" handleListItemClick={handleListItemClick}/>, {
      initialState: state,
    })
    userEvent.click(getByRole("button"))
    expect(handleListItemClick).toBeCalledTimes(1)
   
  })
})

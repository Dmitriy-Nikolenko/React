import { gistsStart } from "../../gist/actions"
import { getGists } from "../../middlewares/thunk_gists"

describe("gists thunk", () => {
  it("get gists", async () => {
    const dispatch = jest.fn()
    const thunk = getGists()

    await thunk(dispatch)

    expect(dispatch).toBeCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, gistsStart())
  })

  
})

import { createBrowserRouter } from "react-router-dom"

import HomePage from "../user/pages/homepage"

const router = createBrowserRouter([
  {
    path : "/",
    element : (
      <HomePage/>
    ),
  },
  {
    path : "/about",
    element : (
      <div>
        <h1>About</h1>
      </div>
    ),
  }
])

export default router
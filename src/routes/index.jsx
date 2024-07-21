import { createBrowserRouter } from "react-router-dom"

import HomePage from "../user/pages/homepage"
import NotFoundPage from "../global/pages/404"

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
  },
  {
    path : "/*",
    element : (
      <>
        <NotFoundPage />
      </>
    )
  }
])

export default router
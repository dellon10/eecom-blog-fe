import { createBrowserRouter } from "react-router-dom"

import NotFoundPage from "../global/pages/404"
import { FooterComponent, NavbarComponent, JumbotronComponent } from "../global/components"

import HomePage from "../user/homepage"
import MarsEecom from "../user/mars-eecom"


const router = createBrowserRouter([
  {
    path : "/",
    element : (
      <>
        <NavbarComponent />
        <HomePage/>
        <FooterComponent />
      </>
    ),
  },
  {
    path : "/about/mars-eecom",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="MARS EECOM" />
        <MarsEecom />
        <FooterComponent />
      </>
    ),
  },
  {
    path : "/about/profile",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="PROFILE" />
        <MarsEecom />
        <FooterComponent />
      </>
    ),
  },
  {
    path : "/v2-gate",
    element : (
      <>
        <NotFoundPage />
      </>
    )
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
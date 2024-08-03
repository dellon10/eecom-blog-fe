import { createBrowserRouter } from "react-router-dom"

import NotFoundPage from "../global/pages/404"
import { FooterComponent, NavbarComponent, JumbotronComponent } from "../global/components"

import HomePage from "../user/homepage"
import MarsEecom from "../user/mars-eecom"
import ProfileEecom from "../user/profile"
import LogoEecom from "../user/logo-eecom"


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
    path : "/mars-eecom",
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
    path : "/profile",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="PROFILE EECOM" />
        <ProfileEecom />
        <FooterComponent />
      </>
    ),
  },
  {
    path : "/logo-eecom",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="LOGO EECOM" />
        <LogoEecom />
        <FooterComponent />
      </>
    ),
  },
  {
    path : "/v1-gate",
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
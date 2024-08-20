import { createBrowserRouter } from "react-router-dom"

import NotFoundPage from "../global/pages/404"
import { FooterComponent, NavbarComponent, JumbotronComponent } from "../global/components"

import HomePage from "../user/homepage"
import MarsEecom from "../user/mars-eecom"
import ProfileEecom from "../user/profile"
import LogoEecom from "../user/logo-eecom"
import StrukturOrganisasi from "../user/struktur-organisasi"
import DivisionPage from "../user/divisi"


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
    path : "/organisasi/struktur",
    element : (
      <>
        <NavbarComponent />
        <JumbotronComponent textPage="STRUKTUR ORGANISASI" />
        <StrukturOrganisasi />
        <FooterComponent />
      </>
    ),
  },
  {
    path : `/organisasi/:division/:year`,
    element : (
      <>
        <DivisionPage />
      </>
    ),
  },
  {
    path : "/v1-gate",
    element : (
      <>
        <h1>ADMIN</h1>
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
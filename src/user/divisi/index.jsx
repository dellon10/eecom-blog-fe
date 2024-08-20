import { useParams } from "react-router-dom"
import { FooterComponent, JumbotronComponent, NavbarComponent } from "../../global/components"
import NotFoundPage from "../../global/pages/404"
import CardPersonDivision from "./components/card-person"

export default function DivisionPage() {
  
  const { division, year } = useParams()

  // validate division and year
  const validDivision = ["ph", "entre", "ic", "hrd", "rnd"]
  const validYear = ["2024"]

  if (!validDivision.includes(division) || !validYear.includes(year)) {
    return <NotFoundPage />
  }
  
  // define title page
  const titlePageMap = {
    ph : "DAILY MANAGER",
    entre : "ENTREPRENEURSHIP",
    ic : "INFORMATION AND COMMUNICATION",
    hrd : "HUMAN RESOURCE DEVELOPMENT",
    rnd : "RESERCH AND DEVELOPMENT"
  }

  const titlePage = titlePageMap[division]

  return (
    <>
      <NavbarComponent />

      <JumbotronComponent textPage={titlePage} />
      
      <CardPersonDivision />
    
      <FooterComponent />
    </>
  )
}
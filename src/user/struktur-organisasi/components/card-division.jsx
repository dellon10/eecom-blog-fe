import CardDivisionComponents from "./card-org-comps";

// icons
import phIcons from "../assets/ph.png"
import hrdIcons from "../assets/hrd.png"
import rndIcons from "../assets/rnd.png"
import icIcons from "../assets/ic.png"
import entreIcons from "../assets/entre.png"

export default function CardDivision() {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row justify-around">
        
        <CardDivisionComponents
          links={"/organisasi/ph/2024"}
          icons={phIcons}
          titles={"Daily Manager"}
          deskrips={"Berperan penting dalam mencapai tujuan organisasi dan memastikan operasional harian berjalan lancar."} 
        />

      </div>
      
      <div className="flex flex-col gap-4 md:flex-row justify-around">
        <CardDivisionComponents
          links={"/organisasi/hrd/2024"}
          icons={hrdIcons}
          titles={"Human Resource Development"}
          deskrips={"Berperan untuk menjaga kekeluargaan anggota UKM-FT EECOM baik internal maupun ekstetrnal."} 
        />

        <CardDivisionComponents
          links={"/organisasi/rnd/2024"}
          icons={rndIcons}
          titles={"Research And Development"}
          deskrips={"Bergerak untuk meningkatkan dan menggali setiap potensi sumberdaya pengurus UKM-FT EECOM."} 
        />

      </div>
      
      <div className="flex flex-col gap-4 md:flex-row justify-around">
        <CardDivisionComponents
          links={"/organisasi/ic/2024"}
          icons={icIcons}
          titles={"Information Communication"}
          deskrips={"Bergerak di bidang informasi dan komunikasi serta sosial media UKM-FT EECOM."} 
        />

        <CardDivisionComponents
          links={"/organisasi/entre/2024"}
          icons={entreIcons}
          titles={"Entrepreneurship"}
          deskrips={"Bergerak di bidang wirausaha UKM-FT EECOM. Memberikan pemasukan dana kepada UKM-FT EECOM."} 
        />

      </div>
    </>
  );
}
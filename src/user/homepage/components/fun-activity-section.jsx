import mdPhoto from "../assets/maroon-day.jpg";

export default function FunActivitySection() {
  return (
    <section className="bg-red-500 md:px-24 px-4 py-7 md:py-20">
      <h1 className="text-white text-center w-full text-4xl font-bold mb-10">FUN ACTIVITY</h1>

      <div className="flex flex-col">
        {/* card-atas */}
        
        <div className="flex flex-col md:flex-row md:justify-between items-center md:gap-3">
          <div className="flex flex-row bg-white p-8 md:w-3/5 w-full rounded-lg justify-between gap-3">
            <div className="flex flex-col w-3/5 justify-center">
              <h1 className="font-bold">MAROON DAY</h1>
              <h5 className="text-justify">Maroon Day is a routine agenda of UKM-FT EECOM aimed at improving the English skills of EECOM members and is usually held on Wednesdays.</h5>
            </div>
            
            <div className="w-56 h-56 overflow-hidden rounded-xl">
              <img src={mdPhoto} alt="Maroon Day 2024" className="object-cover w-full h-full"/>
            </div>
          </div>

          <div className="flex flex-col bg-white p-8 md:w-2/5 md:mt-0 mt-3 gap-3 w-full rounded-lg justify-between">
            <div className="h-36 overflow-hidden rounded-xl">
              <img src={mdPhoto} alt="NUDC Training 2024" className="object-cover w-full h-full" />
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold">NUDC TRAINING</h1>
              <h5 className="text-justify">UKM-FT EECOM organizes training and mentoring for EECOM members who want to participate in the National University Debate Championship (NUDC)</h5>
            </div>
          </div>
        </div>


        {/* card-bawah */}

        <div className="flex flex-col md:flex-row md:justify-between md:gap-3 mt-3">
          <div className="bg-white p-8 md:w-2/5 w-full rounded-lg justify-between">
            <div>
              <img src="" alt="" />
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold">TOEFL SEMINAR</h1>
              <h5 className="text-justify">UKM-FT EECOM holds TOEFL seminars aimed at providing EECOM members wiith insights about the TOEFL test. Additionally, EECOM also organizes TOEFL simulation sessions.</h5>
            </div>
          </div>

          <div className="flex flex-row bg-white p-8 md:w-3/5 w-full rounded-lg justify-between gap-3">
            <div className="w-56 h-56 overflow-hidden rounded-xl">
              <img src={mdPhoto} alt="Maroon Day 2024" className="object-cover w-full h-full"/>
            </div>

            <div className="flex flex-col w-3/5 justify-center">
              <h1 className="font-bold">COMPERATIVE STUDY</h1>
              <h5 className="text-justify">Comperative Study is an agenda organized by EECOM with the aim of sharing knowledge with external parties that have similar organizational backgrounds and building new connections.</h5>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
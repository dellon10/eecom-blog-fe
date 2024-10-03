import maroonDay from '../assets/maroon-day.jpg';
import comperativeStudy from '../assets/comperative-study.jpeg';

export default function FunActivitySection() {
  return (
    <section className="bg-red-700 md:px-24 px-4 py-7 md:py-20">
      <h1 className="text-white text-center w-full text-2xl md:text-4xl font-bold md:mb-10 mb-5">FUN ACTIVITY</h1>

      <div className="flex md:flex-row flex-col gap-4">

        <div className="flex flex-col md:w-1/2 w-full gap-3">
          
          <div className="flex md:flex-row flex-col p-8 bg-white rounded-xl justify-between">
            <div className="flex flex-col md:w-3/5">
              <h1 className="text-black text-lg md:text-xl font-semibold">MAROON DAY</h1>
              <p className="text-black text-sm md:text-base mt-3 text-justify">Maroon Day is a routine agenda of UKM-FT EECOM aimed at improving the English skills of EECOM members and is usually held on Wednesdays.</p>
            </div>

            <div className="md:w-40 md:h-40 overflow-hidden rounded-xl mt-5 md:mt-0">
              <img src={maroonDay} alt="" className="object-cover w-full h-full"/>
            </div>
          </div>
          
          <div className="flex md:flex-row flex-col p-8 bg-white rounded-xl justify-between">
            <div className="flex flex-col md:w-3/5">
              <h1 className="text-black text-lg md:text-xl font-semibold">NUDC TRAINING</h1>
              <p className="text-black text-sm md:text-base mt-3 text-justify">UKM-FT EECOM organizes training and mentoring for EECOM members who want to participate in the National University Debate Championship (NUDC)</p>
            </div>

            <div className="md:w-40 md:h-40 overflow-hidden rounded-xl mt-5 md:mt-0">
              <img src={maroonDay} alt="" className="object-cover w-full h-full"/>
            </div>
          </div>

        </div>

        <div className="flex flex-col bg-white rounded-xl md:w-1/2 w-full p-8 justify-between">
          <div className='flex flex-col w-full text-justify'>
            <h1 className="text-black text-lg md:text-xl font-semibold">COMPERATIVE STUDY</h1>
            <p className="text-black text-sm md:text-base mt-3">Comperative Study is an agenda organized by EECOM with the aim of sharing knowledge with external parties that have similar organizational backgrounds and building new connections.</p>
          </div>
          <div className='w-auto h-60 overflow-hidden rounded-xl mt-5'>
            <img src={comperativeStudy} alt="" className='object-cover w-full h-full'/>
          </div>
        </div>
      </div>
    </section>
  );
}
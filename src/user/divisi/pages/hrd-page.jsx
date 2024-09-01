import SliderMember from "../components/slider-member";
import data from "../data/data-member.json";

export default function HRDPages() {
  return (
    <>

      <img src={data.hrd.struktur} alt={data.hrd.name} />
      
      <p className="text-justify text-sm md:text-base mt-3">
        {data.hrd.jobdesk}
      </p>

      <h1 className="font-semibold mt-3 text-red-600">Our Staff : </h1>

      {/* slider */}
      <div className="md:mt-3 md:mb-5">
        <SliderMember data={data.hrd} />
      </div>
    </>
  );
}
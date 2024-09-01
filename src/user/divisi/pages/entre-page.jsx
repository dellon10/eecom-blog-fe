import SliderMember from "../components/slider-member";
import data from "../data/data-member.json";

export default function EntrePages() {
  return (
    <>

      <img src={data.entre.struktur} className="" alt={data.entre.name}/>

      <p className="text-justify text-sm md:text-base mt-3">
        {data.entre.jobdesk}
      </p>

      <h1 className="font-semibold mt-3 text-red-600">Our Staff : </h1>

      {/* slider */}
      <div className="md:mt-3 md:mb-5">
        <SliderMember data={data.entre} />
      </div>
    </>
  );
}
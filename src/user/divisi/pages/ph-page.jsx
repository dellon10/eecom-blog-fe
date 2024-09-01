import SliderMember from "../components/slider-member";
import data from "../data/data-member.json";

export default function PHPages() {
  return (
    <>

      <p className="text-justify text-sm md:text-base">
        {data.ph.jobdesk}
      </p>

      <h1 className="font-semibold mt-3 text-red-600">Our Staff : </h1>

      {/* slider */}
      <div className="mt-3">
        <SliderMember data={data.ph} />
      </div>
    </>
  );
}
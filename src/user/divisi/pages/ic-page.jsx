import SliderMember from "../components/slider-member";
import data from "../data/data-member.json";

export default function ICPages() {
  return (
    <>

      {/* slider */}
      <div className="w-full m-auto">
        <div className="mt-20">
          <SliderMember data={data.ic} />
        </div>

      </div>
    </>
  );
}
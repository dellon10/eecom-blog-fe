import SliderMember from "../components/slider-member";
import data from "../data/data-member.json";

export default function EntrePages() {
  return (
    <>

      {/* slider */}
      <div className="w-full m-auto">
        <div className="mt-20">
          <SliderMember data={data.entre} />
        </div>

      </div>
    </>
  );
}
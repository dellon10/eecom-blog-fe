import PropTypes from 'prop-types';
import Slider from 'react-slick';

const SliderMember = ({ data }) => {

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-slate-300 py-4 px-2">
      <Slider {...settings}>
        {data.member.map((member, index) => (
          <div key={index} className="px-3">

            {/* CARD */}
            <div className="bg-white text-black rounded-lg border border-slate-400 shadow-md overflow-hidden flex flex-col h-[500px]">

              {/* FOTO */}
              <div className="bg-red-500 flex justify-center items-center py-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-44 w-44 object-cover rounded-full bg-white"
                />
              </div>

              {/* ISI CARD */}
              <div className="flex flex-col items-center text-center p-4 flex-1">

                {/* BAGIAN TEKS */}
                <div className="flex-1 flex flex-col justify-start">

                  <h5 className="text-2xl font-semibold">
                    {member.name}
                  </h5>

                  <h5 className="text-lg font-semibold text-red-600 mt-2">
                    {member.as}
                  </h5>

                  <h5 className="text-base mt-3">
                    {member.major}&apos;{member.akt}
                  </h5>

                </div>

                {/* BUTTON */}
                <button className="bg-red-500 text-white text-lg px-8 py-2 rounded-2xl hover:bg-red-600 transition mt-auto">
                  More
                </button>

              </div>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

SliderMember.propTypes = {
  data: PropTypes.any.isRequired
};

export default SliderMember;
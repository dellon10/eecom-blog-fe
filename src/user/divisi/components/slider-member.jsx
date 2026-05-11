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
    <div className="bg-slate-300 py-3 px-2">
      <Slider {...settings}>
        {data.member.map((member, index) => (
          <div key={index} className="px-2 h-full">
            
            <div className="bg-white text-black rounded-lg border border-slate-400 h-full flex flex-col shadow-md">
              
              {/* FOTO */}
              <div className="rounded-t-lg bg-red-500 flex justify-center items-center py-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-44 w-44 object-cover rounded-full bg-white"
                />
              </div>

              {/* ISI CARD */}
              <div className="flex flex-col justify-between items-center p-4 flex-1 text-center">
                
                <div>
                  <h5 className="text-lg font-semibold">
                    {member.name}
                  </h5>

                  <h5 className="text-base font-semibold text-red-600">
                    {member.as}
                  </h5>

                  <h5 className="my-2 text-sm">
                    {member.major}&apos;{member.akt}
                  </h5>
                </div>

                {/* BUTTON */}
                <button className="bg-red-500 text-white text-lg px-6 py-1 rounded-xl mt-4 hover:bg-red-600 transition">
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
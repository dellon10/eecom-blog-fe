import PropTypes from 'prop-types';

const JumbotronComponent = ({textPage}) => {
  return (
    <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-5 md:py-20">
        <h1 className="text-2xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{textPage}</h1>
      </div>
    </section>
  )
}

JumbotronComponent.propTypes = {
  textPage: PropTypes.string.isRequired,
};

export default JumbotronComponent
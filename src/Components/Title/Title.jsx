const Title = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center my-16 md:w-4/12">
      <p className="text-[#D99904] mb-2">--- {subHeading} ---</p>
      <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default Title;

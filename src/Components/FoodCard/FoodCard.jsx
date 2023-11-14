const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Img" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-2 rounded-lg text-[#D99904] bg-slate-900 text-lg font-bold">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-center">
          <button className="btn text-[#D99904] border-b-[#D99904] border-b-2 hover:bg-black">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

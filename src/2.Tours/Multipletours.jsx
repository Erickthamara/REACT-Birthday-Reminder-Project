const SingleTour = (props) => {
  const tour = { ...props };

  const { id, image, info, name, price, removeTour } = tour;
  return (
    <div key={id} className="single-tour">
      <img src={image} alt="Tour Image" className="single-tour" />
      <h4>{name}</h4>
      <h4>{price}</h4>
      <p className="tour-info">{info}</p>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        Delete Tour
      </button>
    </div>
  );
};

export default SingleTour;

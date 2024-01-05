import { useEffect, useState } from "react";
import Loading from "./Loading";
import IsError from "./IsError";

const Tour = () => {
  const url = "https://course-api.com/react-tours-project";
  const [error, setIsError] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  // const [singleTour, setSingleTour] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const allTours = await fetch(url);
        const tourData = await allTours.json();
        // console.log(tourData);
        if (tourData) {
          setTours(tourData);
        }
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <IsError />;
  }

  return (
    <div>
      {tours.map((myTour) => {
        const { id, image, info, name, price } = myTour;
        console.log(name);
        console.log("Hello");
        return (
          <div key={id} className="single-tour">
            <img src={image} alt="Tour Image" className="single-tour" />
            <h4>{name}</h4>
            <h4>{price}</h4>
            <p className="tour-info">{info}</p>
            <button className="delete-btn">Delete Tour</button>
          </div>
        );
      })}
    </div>
  );
};
export default Tour;

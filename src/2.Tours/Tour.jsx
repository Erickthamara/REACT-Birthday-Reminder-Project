import { useEffect, useState } from "react";
import Loading from "./Loading";
import IsError from "./IsError";
import SingleTour from "./Multipletours";

const Tour = () => {
  const url = "https://course-api.com/react-tours-project";
  const [error, setIsError] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

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
  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    const remainingTours = tours.filter((test) => {
      return test.id != id;
    });

    setTours(remainingTours);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <IsError />;
  }
  if (tours.length === 0) {
    return <Refresh fetchData={fetchData} />;
  }

  return (
    <div>
      {!tours ? (
        <Refresh fetchData={fetchData} />
      ) : (
        tours.map((myTour) => {
          return (
            <div key={myTour.id}>
              <SingleTour {...myTour} removeTour={removeTour} />
            </div>
          );
        })
      )}
    </div>
  );
};
export default Tour;

export const Refresh = (props) => {
  const func = { ...props };
  const { fetchData } = func;
  return (
    <div>
      <button className="delete-btn" onClick={() => fetchData()}>
        Refresh
      </button>
    </div>
  );
};

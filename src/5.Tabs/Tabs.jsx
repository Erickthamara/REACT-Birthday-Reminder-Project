import { useEffect, useState } from "react";
import LoadingMessage from "../2.Tours/Loading";
import ErrorMessage from "../2.Tours/IsError";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [companyData, setcompanyData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);
  const [checkoder, setCheckOrder] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const cleanData = await data.json();
        setcompanyData(cleanData);

        console.log(cleanData);
      } catch (error) {
        //console.log("nooooo");
        setIsError(true);
        console.log(`There was an error: ${error}`);
      }
    };
    fetchData();
    setIsLoading(false);
  }, []);

  //    const changeName=()=>{
  //     if company==
  //    }

  if (loading) {
    return <LoadingMessage />;
  }
  if (iserror) {
    return <ErrorMessage />;
  }

  return (
    <div className="jobs-center">
      {companyData.map((person) => {
        const { company, dates, duties, id, order, title } = person;

        return (
          <div key={order}>
            <div className="btn-container">
              <button
                className="job-btn"
                onClick={() => {
                  if (company == company) {
                    setCheckOrder(order);
                  }
                }}
              >
                {company}
              </button>
            </div>

            {
              checkoder === order ? (
                <div className="job-info">
                  <h3>{title}</h3>
                  <h4>{company}</h4>
                  <div className="job-date">{dates}</div>
                  <div className="job-desc">
                    {duties.map((duty) => {
                      return <p>{duty}</p>;
                    })}
                    <div className="job-icon">{`<<`}</div>
                  </div>
                </div>
              ) : (
                <h2>No number</h2>
              )
              /* <div className="job-info">
                <h3>{title}</h3>
                <h4>{company}</h4>
                <div className="job-date">{dates}</div>
                <div className="job-desc">
                  {duties.map((duty) => {
                    return <p>{duty}</p>;
                  })}
                  <div className="job-icon">{`<<`}</div>
                </div>
              </div> */
            }
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;

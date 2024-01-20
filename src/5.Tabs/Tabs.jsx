import { useEffect, useState } from "react";
import LoadingMessage from "../2.Tours/Loading";
import ErrorMessage from "../2.Tours/IsError";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [companyData, setcompanyData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);
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

  if (loading) {
    return <LoadingMessage />;
  }
  if (iserror) {
    return <h2>not working</h2>;
  }
  return (
    <div>
      {}
      <div className="jobs-center">
        <div className="btn-container">
          <button className="job-btn">Click Me</button>
        </div>
        <div className="job-info">
          <h3>engineer</h3>
          <h4>company</h4>
          <div className="job-date">date</div>
          <div className="job-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              similique ducimus aliquam nemo possimus architecto tenetur
              provident quos fuga voluptate cupiditate ea natus sunt, veniam
              eaque est explicabo, atque repellat!
            </p>
            <div className="job-icon">{`<<`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

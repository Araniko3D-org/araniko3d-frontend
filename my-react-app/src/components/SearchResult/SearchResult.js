import { useNavigate } from "react-router-dom";

export const SearchResult = (data) => {
  const navigate = useNavigate();

  const navigateToDescriptionPage = () => {
    navigate("/description-page");
  };

  return (
    <div className="info">
      <div className="flex m-0 p-0 gap-2">
        <img src="monument.svg" alt="" />
        <h4 className="m-0 p-0">{data.data.title.toUpperCase()}</h4>
      </div>
      <p className="m-0 p-0">
        {data.data.description.split(" ").slice(0, 50).join(" ")}
        {data.data.description.split(" ").length > 50 ? "..." : ""}
        {/* {data.data.description}
         */}
        {/* Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        eiusmod tempor <br /> incididunt ut labore et dolore magna... */}
      </p>
      <div className="flex m-0 p-0 right gap-2">
        <div className="flex m-0 p-0 gap-2" onClick={navigateToDescriptionPage}>
          <img src="info.svg" alt="" className="m-0 p-0" />
          <p className="m-0 p-0"> Details</p>
        </div>
        <div
          className="flex m-0 p-0 gap-2"
          onClick={() => navigate(data.data.mapUrl)}
        >
          <img src="location.svg" alt="" className="m-0 p-0" />
          <p className="m-0 p-0"> Map</p>
        </div>
      </div>
    </div>
  );
};

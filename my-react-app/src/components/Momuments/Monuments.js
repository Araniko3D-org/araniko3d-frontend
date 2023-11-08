// import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
// import { AiFillHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
// import Cookies from "universal-cookie";
// import { toast } from "react-toastify";
// import axios from "axios";

export const Monument = ({ data }) => {
  const navigate = useNavigate();
  //   const cookies = new Cookies();
  //   const [user, setUser] = useState({});
  //   const [favResponse, setFavResponse] = useState({});
  //   const [favProperty, setFavProperty] = useState(false);

  //   const token = cookies.get("token");

  //   const routeChange = () => {
  //     const path = `/properties/${data._id}`;
  //     navigate(path);
  //   };
  //   useEffect(() => {
  //     const token = cookies.get("token");

  //     if (!token) {
  //       return;
  //       const notify = () => toast.error("Login for booking");
  //       notify();
  //       navigate("/login");
  //     }
  //     const fetchData = async () => {
  //       try {
  //         const result = await axios.get(
  //           "http://localhost:4000/api/user/verifytoken",
  //           {
  //             withCredentials: true,
  //           }
  //         );
  //         if (
  //           result.status === 401 ||
  //           result.status === 400 ||
  //           result.status === 404
  //         ) {
  //           const notify = () => toast.error(result.response.data.message);
  //           notify();
  //         }
  //         setUser(result.data);
  //         const favProperties = result.data.favPropertiesId;
  //         // return true if present
  //         const isIdPresent = favProperties.some((obj) => obj.id === data._id);

  //         setFavProperty(isIdPresent);
  //       } catch (error) {
  //         const notify = () => toast.error(error.response.data.message);
  //         notify();
  //       }
  //     };
  //     fetchData(); // Call the async function immediately
  //   }, [favResponse]);

  //   const toggleFavorite = async () => {
  //     if (!token) {
  //       const notify = () => toast.error("Login to add to favorites");
  //       notify();
  //       return;
  //     }

  //     const result = await axios.post(
  //       `http://localhost:4000/api/property/favorite/${data._id}`,
  //       "",
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     if (
  //       result.status === 401 ||
  //       result.status === 400 ||
  //       result.status === 404
  //     ) {
  //       const notify = () => toast.error(result.response.data.message);
  //       notify();
  //     }
  //     if (result.data === "Removed from favorites") {
  //       const notify = () => toast.error(result.data);
  //       notify();
  //     } else {
  //       const notify = () => toast.success(result.data);
  //       notify();
  //     }
  //     setFavResponse(result);
  //   };

  return (
    <div className="  w-[300px]  rounded-[20px]  border shadow-xl cursor-pointer hover:scale-105 transition-transform duration-[0.2s] relative">
      {/* {!favProperty && (
        <div
          className=" absolute right-2 top-1 text-white hover:text-red-400  hover:duration-[0.3s]"
          onClick={toggleFavorite}
        >
          <AiFillHeart size={24} />
        </div>
      )}
      {favProperty && (
        <div
          className=" absolute right-2 top-1 text-red-400 "
          onClick={toggleFavorite}
        >
          <AiFillHeart size={24} />
        </div>
      )} */}
      {/* //for image // hover:scale-10 */}
      <img
        src={`monuments/${data.images[0]}`}
        className="w-full  rounded-t-[20px] h-[200px] object-cover transition-all duration-[0.3s]"
      />
      {/* <div className="py-3 px-3" onClick={routeChange}> */}
      <div className="py-3 px-3">
        {/* <h3 className="font-bold flex items-center gap-2">
          <span className="text-light-green">
            <GoDotFill />
          </span>
          Appartment
        </h3> */}
        <p>रु {data.price.toLocaleString()}</p>
        <p>
          <span>{data.bed} </span>
          bed <span>{data.bath} </span>
          bath <span>{data.sqft}</span>
          sqft
        </p>
        <p>
          {data.address}, {data.city}, {data.country}
        </p>
      </div>
    </div>
  );
};

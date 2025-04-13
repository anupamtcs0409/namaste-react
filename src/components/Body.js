import ResturantCard from "./ResturantCard";
import resList from "../utils/mock-data";
import { useState, useEffect } from "react";

// Normal Js Variable
// let listofRes = [
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "1",
//       name: "KFC",
//       cuisine: ["Burger", "Biryani", "Indian"], // Correct spelling
//       costForTwo: 200,
//       deliveryTime: 35, // Match property naming convention
//       rating: 4.8,
//       img: "https://cdn.dummyjson.com/recipe-images/1.webp",
//     },
//   },
//   {
//     type: "restaurant",
//     data: {
//       type: "F",
//       id: "2", // Use a unique id
//       name: "McDonald's",
//       cuisine: ["Burger", "Fries", "Fast Food"],
//       costForTwo: 150,
//       deliveryTime: 30,
//       rating: 4.3,
//       img: "https://cdn.dummyjson.com/recipe-images/2.webp",
//     },
//   },
// ];
const Body = () => {
  const [listofRes, setListofRes] = useState(resList);
  const [searchText, setSearchText] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  // useEffect(() => {fetchData()}, []); 
  // const fetchData = async () => {
  //   const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61981438395715&lng=77.42135100066662&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
  
  //   const json = await data.json();
  //   console.log(json, 'json');

  // }


  console.log('body render')



  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input className="search-box" type="text" value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}></input>
          <button className="search-btn"
          onClick={() =>{
            const filteredResturant = listofRes.filter(res => {
             return  res.data.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRes(filteredResturant);
            console.log('çlcikedd')
          }}
          >
            Search</button>
        </div>
       
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listofRes.filter(
              (res) => res.data.rating > 4.5
            );
            setListofRes(filteredlist);
          }}
        >
          Top Rated resturants
        </button>
      </div>
      <div className="res-container">
        {/* {listofRes.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))} */}

         <div className="res-container">
  {(filteredRes.length > 0 ? filteredRes : listofRes).map((resturant) => (
    <ResturantCard key={resturant.data.id} resData={resturant} />
  ))}
</div>
 
      </div>
    </div>
  );
};

export default Body;

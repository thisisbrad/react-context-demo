import React, { useState, useEffect } from "react";
// import React, { Component } from "react";

const Profile = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  //create state to add items in
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://randomuser.me/api/?gender=female");

    //convert to json
    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  };
  return (
    <div className="App">
      {items.map((item) => (
        <h1 key={item.resultsId}>{item.phone}</h1>
      ))}
    </div>
  );
};

export default Profile;

import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Header from "./Header";

export default function CoffeeListing() {
  const [coffeeList, setCoffeeList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
      .catch((error) => console.error("Fetching the coffee: ", error));
  }, []);

  return (
    <div className="coffeeListing">
      <Header />
      <div className="btn-gp">
        <Button
          title="All Products"
          filter={filter === "all"}
          handleFilter={() => setFilter("all")}
        />
        <Button
          title="Available Now"
          filter={filter === "available"}
          handleFilter={() => setFilter("available")}
        />
      </div>
      <div className="list">
        {coffeeList
        .filter((coffee) => filter === "available" ? coffee.available : coffee)
        .map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

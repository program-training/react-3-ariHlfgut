import { useState, useEffect } from "react";
import { User } from "../../interfaces/users";
import UserCard from "../UserCard/UserCard";
import "./UsersFromServer.css";

function UsersFromServer(): JSX.Element {
  const [items, setItems] = useState<User[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        let dataBaseJson = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        let dataBase = await dataBaseJson.json();
        setItems(dataBase);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="cards row">
      {items.map((item) => (
        <UserCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default UsersFromServer;

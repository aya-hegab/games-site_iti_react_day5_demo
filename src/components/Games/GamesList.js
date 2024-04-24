import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { axiosInstance } from "../../apis/config";

const GamesList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/gamehub" , {
        params : {
            title : 'super'
        }
      })
      .then((res) => setGames(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteGame = (id) => {
    const filteredGamesList = games.filter((game) => game.id !== id);
    setGames(filteredGamesList);
  };

  return (
    <>
      <h1>Games list</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {games.map((game) => {
          return (
            <div className="col" key={game.id}>
              <GameCard
                gameItem={game}
                handleDeleteGameFn={(id) => deleteGame(id)}
              />
              {/* <GameCard gameItem={game} handleDeleteGameFn={deleteGame}/> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GamesList;

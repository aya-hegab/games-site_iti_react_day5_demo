import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../apis/config";

export default function GameDetails() {
    const [gameDetails, setGameDetails] = useState({})
    const params = useParams();
    console.log(params);
    const location = useLocation();
    console.log(location);
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("name"));

    useEffect(() => {
        axiosInstance
            .get(`/gamehub/${params.id}`)
            .then((res) => setGameDetails(res.data))
            .catch((err) => console.log(err));
    }, []);

    return <div>
        <img src={gameDetails.image}/>
        <h2>{gameDetails.title}</h2>
        <p>{gameDetails.description}</p>
    </div>;
}

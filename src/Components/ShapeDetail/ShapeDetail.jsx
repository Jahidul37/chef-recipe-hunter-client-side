// import React from 'react';

import { useLoaderData } from "react-router-dom";
import RecipeCards from "./RecipeCards";
import { useEffect, useState } from "react";

const ShapeDetail = () => {
    const chefData = useLoaderData();
    // console.log(chefData);
    const [recipies, setRecipies] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/recipesdata/${chefData.recipeId}`)
            .then(res => res.json())
            .then(data => {
                setRecipies(data);
            })
    }, [])
    return (
        <div>

            <RecipeCards recipies={recipies}></RecipeCards>
        </div>
    );
};

export default ShapeDetail;
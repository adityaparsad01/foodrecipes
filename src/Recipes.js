import React from 'react';
import style from './recipe.module.css'; 

const Recipe = ({title,Calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 key={title.id}>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p className={style.p} key={Calories.id}>Total Calories: {Calories}</p>
            <img key={image.id} className={style.image} src={image} alt=""/>


        </div>
    );
}

export default Recipe;
import React from 'react';
import style from './recipe.module.css'; 

const Recipe = ({title,Calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.title} key={title.id}>{title}</h1>
            <ul className={style.card}>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <p className={style.p} key={Calories.id}>Total Calories: {Calories}</p>
            <img key={image.id} className={style.image} src={image} alt=""/>


        </div>
    );
}

export default Recipe;
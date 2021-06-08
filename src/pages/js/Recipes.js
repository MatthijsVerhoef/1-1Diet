import { IonButton, IonInput, IonCard, IonSlide, IonSlides, IonContent } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import TopNav from '../js/TopNav'
import '../styles/Recipes.css'
import RecipeData from '../../Data/RecipesData.json'
import RecipeStyle from '../js/Recipes/Recipestyle'

function Recipes() {
    const [recipes, setRecipes] = useState([])
    const [searchFilter, setSearchFilter] = useState("")

    const filteredRecipes = RecipeData.filter( recipe => {
        return recipe.title.toLowerCase().includes( searchFilter.toLowerCase() )
    })

    return (
        <IonContent>
            <div className="recipes">
                <TopNav />
                <div className="recipeContent">
                    <h1 onClick={() => console.log(RecipeData)}>Recepten</h1>
                    <IonInput placeholder="Zoeken..." className="recipeSearch" onIonChange={(e) => setSearchFilter(e.target.value)}></IonInput>
                    <div className="buttonSlider">
                        <IonSlides color="none">
                            <IonSlide className="recipeFilter">Alle</IonSlide>
                            <IonSlide className="recipeFilter">Shakes</IonSlide>
                            <IonSlide className="recipeFilter">Soepen</IonSlide>
                            <IonSlide className="recipeFilter">Repen & Bites</IonSlide>
                            <IonSlide className="recipeFilter">Warme maaltijden</IonSlide>
                            <IonSlide className="recipeFilter">Desserts</IonSlide>
                            <IonSlide className="recipeFilter">Soepen</IonSlide>
                        </IonSlides>
                    </div>
                    <div className="results">
                        {filteredRecipes.map((recipedetail, index) => {
                            return <RecipeStyle key={index} documentId={recipedetail.recipe_id} titel={recipedetail.title} stap={recipedetail.step} omschrijving={recipedetail.description} img={recipedetail.banner_image} recept={recipedetail.preparation} />
                        })}
                    </div>
                </div>
                <a className="borderBottom"></a>
            </div>
        </IonContent>
    )
}

export default Recipes

import { CompleteMeal } from "./interfaces";

export const DietMeal = ({ timeMeal, meal }: CompleteMeal) => {
    return (
        <h1>
            <strong>{timeMeal.toUpperCase()}:</strong>{meal}
        </h1>
    );
}; 

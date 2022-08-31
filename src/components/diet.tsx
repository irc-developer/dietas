import { Dieta, Comida } from "./interfaces";
import { DietMeal, DietHeader } from "./";
import dietas from "../dietas.json";

export const Diet = () => {
    return (
        <>
            <DietHeader title="encabezado" />

            {
                Object.entries(dietas).map((item) => {
                    item.forEach((key, value) => {
                        console.log(key, value);
                    })
                })
            }

            {/* {Object.entries(dietasJSON).forEach(([key, value]) => {
                Object.entries(value).forEach(([key2, value2]) => {
                    console.log(key2, value2);
                  return <DietMeal key={key2} timeMeal={key2} meal={value2} />;
                });
            })} */}

            <h1>Dietas</h1>
        </>
    );
};

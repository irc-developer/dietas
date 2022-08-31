export interface CompleteMeal {
    meal:       string;
    timeMeal:   string;
}
 
export interface Dieta {
    titulo:  string;
    comidas: Comida[];
}

export interface Comida {
    dia:      string;
    desayuno: string;
    almuerzo: string;
    comida:   string;
    merienda: string;
    cena:     string;
}

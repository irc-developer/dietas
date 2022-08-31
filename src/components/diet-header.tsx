interface headerInterface {
    headerText:string;
}

export const DietHeader = ({title = ''})  => {

    return(
        <h1>Encabezado de la dieta: {title} </h1>
    )
}
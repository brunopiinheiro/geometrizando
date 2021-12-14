import Square from "../Square"
import Triangle from "../Triangle"
import Retangle from "../Retangle"
import Circle from "../Circle"
import Capslock from "../Capslock"

const Figure = ({ type, titulo, bg }) => {

    return (
        <>
            <Capslock>{titulo}</Capslock>
            {type === "triangulo" && <Triangle background={bg} />}
            {type === "circulo" && <Circle background={bg} />}
            {type === "retangulo" && <Retangle background={bg} />}
            {type === "quadrado" && <Square background={bg} />}
        </>
    )
}
export default Figure
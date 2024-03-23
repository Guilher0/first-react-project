import { useState } from "react";


export default function useCounter() {
    const [contador, setContador] = useState(0)

    const increment = () => {
        setContador(contador + 1)
    }

    return {contador, increment}
}
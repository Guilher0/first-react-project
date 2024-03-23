import type { MetaFunction } from "@remix-run/node";
import styles from "app/styles/styles.module.css";
import useCounter from "hooks/useCounter";



export const meta: MetaFunction = () => {
  return [
    { title: "React" },
    { name: "description", content: "Welcome to React!" },
  ];
};

export default function Index() {

  const counter = useCounter ()

  return (
  <div className={styles.main}>
    <div className="">
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", padding:"35px 0", background: "rgb(114, 166, 181)", textAlign:"center"}}>
        <img src="img/react.png" alt="React Remix" title="react remix"/>
        <h1>Welcome to  React Remix </h1>
        
        <button
        onClick={counter.increment}
        style={{}}
        >
          Contador {counter.contador}
        </button>
        <p>A biblioteca para interfaces de usuários Web e Nativas</p>
      </div>

      <div style={{padding:"35px 0", background: "rgb(114, 166, 175)", textAlign:"center", marginTop:"10px"}} >
        <form action="" method="post" style={{display:"flex",marginInline:"auto" ,justifyContent:"space-between", maxWidth:"300px"}}>
        <input type="button" value="Aprenda React" />
        <input type="button" value="Referencia da API" />
        </form>
      </div>
      <hr />
      <div>
      <ul>
          <li>Uso de dados dinâmicos no JSX</li>
          <li>Criação de novos componentes</li>
          <li>Estilização de componentes</li>
          <li>Reutilização de componentes</li>
          <li>Uso de props e children</li>
          <li>Uso de eventos do JavaScript</li>
        </ul>
      </div>

    </div>
  </div>
  );
}


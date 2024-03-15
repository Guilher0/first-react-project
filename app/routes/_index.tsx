import type { MetaFunction } from "@remix-run/node";



export const meta: MetaFunction = () => {
  return [
    { title: "React" },
    { name: "description", content: "Welcome to React!" },
  ];
};

export default function Index() {
  return (
  <div className="main">
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.6", padding:"35px 0", background: "rgb(114, 166, 181)", textAlign:"center"}}>
      <img src="img/react.png" alt="React Remix" title="react remix"/>
      <h1>Welcome to  React Remix</h1>
      
      <p>A biblioteca para interfaces de usuários Web e Nativas</p>
    </div>

    <div style={{padding:"35px 0", background: "rgb(114, 166, 175)", textAlign:"center", marginTop:"10px"}} >
      <form action="" method="post" style={{display:"flex",marginInline:"auto" ,justifyContent:"space-between", maxWidth:"300px"}}>
      <input type="button" value="Aprenda React" />
      <input type="button" value="Referencia da API" />
      </form>
    </div>


  </div>
  );
}


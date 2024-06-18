import "./App.css";
import { TablaProductos } from "./TablaProductos";

export const App = () => {
  return (
    <>
      <section id="tituloPrincipal">
        <h1 id="tituloDelCafe">ÁNIMA café</h1>
      </section>

      <section id="filaCategoriaSeccion">
        <TablaProductos />
      </section>
    </>
  );
};

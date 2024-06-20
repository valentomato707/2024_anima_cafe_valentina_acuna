import "./style/App.scss";
import { FilaCategoria } from "./FilaCategoria";
import { TablaProductos } from "./TablaProductos";

export const App = () => {
  return (
    <>
      <header id="encabezado">
        <h1 id="tituloDelCafe">ÁNIMA café</h1>
        <img src="src/assets/sign.png" alt="Sign" class="encabezadoImagen" />
      </header>

      <section id="filaCategoriaSeccion">
        <FilaCategoria />
      </section>
    </>
  );
};

import { FilaCategoria } from "./FilaCategoria";

export const TablaProductos = () => {
  return (
    <>
      <div id="tablaProductos">
        <h2 id="tituloNombre">Nombre</h2>

        <h2 id="tituloPrecio">Precio</h2>

        <h2 id="tituloStock">Stock</h2>
      </div>

      <FilaCategoria />
    </>
  );
};

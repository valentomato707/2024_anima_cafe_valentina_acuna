import { FilaProductos } from "./FilaProductos";

export const FilaCategoria = () => {
  return (
    <>
      <h3 id="tituloCafeteria">Cafetería</h3>

      <FilaProductos categoria={"Cafetería"} />

      <h3 id="tituloPanaderia">Panadería</h3>

      <FilaProductos categoria={"Panadería"} />

      <h3 id="tituloDulces">Dulces</h3>

      <FilaProductos categoria={"Dulces"} />
    </>
  );
};

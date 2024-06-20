import { FilaProductos } from "./FilaProductos";
import { TablaProductos } from "./TablaProductos";

export const FilaCategoria = () => {
  return (
    <>
      <div>
        <div class="tituloImagen">
          <h2 id="tituloCafeteria">Cafetería</h2>

          <img src="src/assets/coffee.png" alt="Coffee" class="imagenChica" />
        </div>

        <TablaProductos />

        <FilaProductos categoria={"Cafetería"} />

        <div class="tituloImagen">
          <h2 id="tituloPanaderia">Panadería</h2>

          <img
            src="src/assets/croissant.png"
            alt="Croissant"
            class="imagenChica"
          />
        </div>

        <TablaProductos />

        <FilaProductos categoria={"Panadería"} />

        <div class="tituloImagen">
          <h2 id="tituloDulces">Dulces</h2>

          <img src="src/assets/cupcake.png" alt="Cupcake" class="imagenChica" />
        </div>

        <TablaProductos />
        <div id="productos">
          <FilaProductos categoria={"Dulces"} />
        </div>
      </div>
    </>
  );
};

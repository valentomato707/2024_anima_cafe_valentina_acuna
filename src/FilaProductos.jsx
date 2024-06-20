import { productos } from "./productos";

export const FilaProductos = ({ categoria }) => {
  const productosPorCategoria = productos.filter(
    (producto) => producto.categoria === categoria
  );
  return (
    <>
      {productosPorCategoria.map((producto, index) => {
        const strikeThrough = producto.stock === 0 ? "strikethrough" : "";
        return (
          <div id="productosData" key={index}>
            <p id="nombre" class={strikeThrough}>
              {producto.nombre}
            </p>
            <p id="precio">{producto.precio}</p>
            <p id="stock">{producto.stock}</p>
          </div>
        );
      })}
    </>
  );
};

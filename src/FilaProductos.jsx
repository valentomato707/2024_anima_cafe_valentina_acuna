import { productos } from "./productos";

export const FilaProductos = ({ categoria }) => {
  const productosPorCategoria = productos.filter(
    (producto) => producto.categoria === categoria
  );
  return (
    <>
      {productosPorCategoria.map((producto) => {
        return (
          <div>
            <p>{producto.nombre}</p>
            <p>{producto.precio}</p>
            <p>{producto.stock}</p>
          </div>
        );
      })}
    </>
  );
};

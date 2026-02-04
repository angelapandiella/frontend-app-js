document.addEventListener('DOMContentLoaded', () => {

  const botonCargar = document.getElementById('btn-cargar-mas');
  const contenedorProductos = document.getElementById('contenedor-productos');

  botonCargar.addEventListener('click', () => {

    fetch('productos.json')
      .then(response => response.json())
      .then(data => {

        data.forEach(producto => {

          const card = document.createElement('article');
          const figure = document.createElement('figure');
          const img = document.createElement('img');
          const nombre = document.createElement('h3');
          const precio = document.createElement('p');

          img.src = producto.imagen_url;
          img.alt = producto.nombre;

          nombre.textContent = producto.nombre;
          precio.textContent = `${producto.precio} €`;

          figure.appendChild(img);
          card.appendChild(figure);
          card.appendChild(nombre);
          card.appendChild(precio);

          contenedorProductos.appendChild(card);

        });

        botonCargar.disabled = true;
        botonCargar.textContent = 'Productos cargados';

      })
      .catch(error => {
        console.error('Error al cargar los productos:', error);
      });

  });

});

/*
INTEGRACIÓN CON BACKEND

En una aplicación real, los productos no se cargarían desde un archivo JSON local,
sino desde un servidor mediante una petición a una API.
El backend se encargaría de obtener los datos desde una base de datos y enviarlos
al frontend en formato JSON.

Además, se podría controlar cuántos productos se cargan en cada petición
para evitar cargar demasiada información de golpe y mejorar el rendimiento.


USABILIDAD

– Evitar recargas de página:
  Al cargar los productos de forma dinámica, el usuario puede seguir navegando
  sin interrupciones, lo que mejora la experiencia de uso.

– Comunicación con el usuario:
  Como mejora, se podría mostrar un mensaje o un indicador visual mientras
  se están cargando los productos, para que el usuario sepa que la acción
  se está realizando correctamente.

- Además, he aplicado estilos de CSS básicos para mejorar la visualización de las imagenes.
*/


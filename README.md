# 🌱 Ecommers - Tienda de Plantas: Bosque

Es una aplicación de e-commerce enfocada en la venta de plantas. Esta Single Page Application (SPA) fue desarrollada en **React** y ofrece una experiencia de usuario fluida y moderna. La app permite a los usuarios explorar un catálogo de productos, ver detalles, y gestionar su carrito de compras, integrándose con **Firebase** para almacenar datos de productos y transacciones.

---

## 🎯 Objetivos del Proyecto

- **Construir una SPA con React** que implemente patrones como el Virtual DOM y el uso de hooks.
- **Administrar datos globales** con **Context API** para mantener el estado del carrito de compras y otros datos compartidos.
- **Conectar con Firebase** para obtener y almacenar datos de productos y registrar órdenes de compra.
- **Aplicar buenas prácticas** en el desarrollo frontend, separando componentes en contenedores y de presentación.

---

## 🚀 Funcionalidades

- **Catálogo de Productos**: Muestra una lista de productos obtenidos dinámicamente desde Firestore, con opción para ver detalles de cada uno.
- **Carrito de Compras**: Gestión del carrito mediante Context API, con posibilidad de agregar, eliminar y ajustar la cantidad de productos seleccionados.
- **Detalle de Producto**: Información detallada de cada planta, con selector de cantidad y validaciones de stock.
- **Finalización de Compra**: Proceso de checkout que registra la orden en Firebase.
- **Navegación**: Utiliza **React Router** para acceder a las secciones sin recarga de página, mejorando la experiencia de usuario.

---

## 📂 Estructura de Componentes

- **NavBar y CartWidget**: Cabecera con enlaces a las distintas secciones y un widget que muestra el total de productos en el carrito.
- **ItemListContainer y ItemDetailContainer**: Componentes contenedores que gestionan la lógica de obtención y visualización de listas de productos y detalles individuales.
- **ItemCount**: Control de cantidad que permite seleccionar unidades a agregar al carrito, ocultándose tras agregar un producto.
- **Cart y CartItem**: Muestra los productos en el carrito con subtotales y total.
- **CheckoutForm**: Formulario para capturar detalles del usuario y confirmar la compra.

---

## 🛠 Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Firebase (Firestore)**: Base de datos en la nube para gestionar productos y órdenes.
- **React Router**: Navegación de SPA para manejar rutas sin recargar la página.
- **CSS y Material UI**: Estilizado de la interfaz y componentes.

---

🌟 **Funciones Destacadas**

- **Generación dinámica de productos** desde Firestore.
- **Validación de formulario** en el proceso de compra.
- **Registro de compras** con un identificador único en Firestore.
- **Diseño responsive** para adaptarse a cualquier dispositivo.

---

📝 **Autor**

- **Daniel Vásquez Gómez**
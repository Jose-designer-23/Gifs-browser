# 🔍 Gifs Browser App 🚀

¡Bienvenido a la aplicación **Gifs Browser App**! Una herramienta dinámica y atractiva desarrollada con Angular que te permite explorar los GIFs más populares del momento y buscar tus GIFs favoritos con facilidad.

Esta aplicación demuestra habilidades clave en el desarrollo frontend, incluyendo el consumo de APIs externas, la gestión eficiente del estado.

## ✨ Características Principales

* **Tendencias de GIFs:** Visualiza una galería de los GIFs más populares y en tendencia, actualizados constantemente.
* **Buscador Integrado:** Un potente buscador que te permite encontrar cualquier GIF por palabra clave, con sugerencias y resultados instantáneos.
* **Carga Infinita (Lazy Loading):** Los resultados del buscador y los GIFs en tendencia se cargan de forma eficiente a medida que el usuario se desplaza, optimizando el rendimiento y la experiencia.
* **Gestión del Estado:** Implementación clara y eficiente para manejar los resultados de búsqueda y el historial.
* **Manejo de Peticiones HTTP:** Consumo de APIs externas para obtener los datos de los GIFs.

## 🛠️ Tecnologías Utilizadas

### Frontend & Herramientas de Desarrollo:

* **[Angular](https://angular.io/) (v19.2.0, con Signals):** Framework principal para la construcción de la interfaz de usuario. Empleado para desarrollar componentes interactivos y gestionar la lógica del frontend, utilizando la funcionalidad de Signals para una gestión de estado reactiva y eficiente.
* **[TypeScript](https://www.typescriptlang.org/) (~5.7.2):** Lenguaje de programación base, superset de JavaScript, que aporta tipado estático para un desarrollo más robusto y escalable.
* **[Tailwind CSS](https://tailwindcss.com/) (v4.1.6):** Un framework CSS de utilidad para un diseño rápido y responsivo, permitiendo la creación de interfaces de usuario personalizadas directamente en el HTML.
* **[RxJS](https://rxjs.dev/) (~7.8.0):** Para la gestión de flujos de datos asíncronos, especialmente útil en el buscador para implementar el *debounce* y optimizar las llamadas a la API.
* **[PostCSS](https://postcss.org/) (v8.5.3):** Herramienta para transformar estilos CSS con plugins de JavaScript.
* **[Angular CLI](https://angular.io/cli) (v19.2.11):** Herramienta de línea de comandos fundamental para la inicialización, desarrollo, construcción y mantenimiento de aplicaciones Angular.
* **[Karma](https://karma-runner.github.io/latest/index.html) y [Jasmine](https://jasmine.github.io/):** Utilizadas para las pruebas unitarias del frontend, garantizando la calidad y el correcto funcionamiento del código.

### Integración de Datos:

* **API de Gifs:** La aplicación se conecta a una API externa (como [Giphy API](https://developers.giphy.com/) o similar) para obtener y mostrar los datos de los GIFs.

---

## 🚀 Cómo Ejecutar el Proyecto

Para poner en marcha la aplicación de GIFs en tu entorno local, sigue estos pasos:

### Requisitos Previos

* Node.js (versión 18 o superior)
* npm o Yarn
* **Clave de API:** Necesitarás una clave de API de la plataforma de GIFs que utilices (ej. Giphy). Regístrate en su sitio web y obtén tu clave.

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Jose-designer-23/Gifs-browser](https://github.com/Jose-designer-23/Gifs-browser)
    cd Gifs-browser
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas Yarn
    # yarn install
    ```

3.  **Configurar la clave de API:**
    * Dentro de la carpeta `src/environments/` (o donde tengas tus variables de entorno), abre el archivo `environment.ts` (y/o `environment.prod.ts` si la tienes).
    * Añade tu clave de API obtenida en los requisitos previos. Por ejemplo:
        ```typescript
        export const environment = {
          production: false,
          apiKey: 'TU_CLAVE_DE_API_AQUI' // <--- Inserta tu clave aquí
        };
        ```
        (El nombre de la variable `apiKey` puede variar según cómo la hayas implementado en tu código).

4.  **Iniciar la aplicación:**
    ```bash
    ng serve
    ```

5.  **Acceder a la Aplicación:**
    Abre tu navegador y ve a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques los archivos fuente.

---

## 💻 Comandos de Desarrollo (Angular CLI)

Esta sección proporciona una referencia rápida a los comandos más comunes de Angular CLI.

* **Arrancar el Servidor de Desarrollo:**
    ```bash
    ng serve
    ```
* **Generar Componentes, Servicios, etc.:**
    ```bash
    ng generate component nombre-del-componente
    ng generate service services/mi-servicio
    # Para ver una lista completa de esquemas: ng generate --help
    ```
* **Construir el Proyecto para Producción:**
    ```bash
    ng build
    ```
* **Ejecutar Pruebas Unitarias:**
    ```bash
    ng test
    ```


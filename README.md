# Mi biblioteca

Escogí el mini proyecto Mi biblioteca ya que me gusta leer y me llamó la atención explorar una nueva api (open library).
Dentro de mi alcance estimado se encuentra:

- Buscar libros por titulo o autor.
- Listar los libros con portada, titulo y autor.
- Poder agregar a favoritos (estanteria).
- Poder ver mis libros favoritos.
- Eliminar libros favoritos.

Se decidió utilizar localstorage para una implementación rápida.

## Arquitectura y dependencias
- Rutas
  - `/` Pantalla inicial de la aplicación.
  - `/favoritos` Pantalla donde se listan los libros favoritos.
- Servicios
  - `BookService` Lo utilicé como un "gestor de estado global" ya que permite guardar y acceder a los libros encontrados (tras realizar una busqueda), guardar libros, ver los libros favoritos y alternar entre una bandera de estado "cargando".
- Componentes
  - `SearchInput` Encargado de buscar tras un debounce de 300ms. Guarda resultados en el `BookService`.
  - `BookCard` Muestra la información de un libro.
  - `Home` Pantalla inicial de la aplicación, aquí se realiza la búsqueda de libros con la api.
  - `Favorites` Pantalla donde se listan los libros marcados como favoritos (estanteria).
- Dependencias
  - `axios`


## Modelo de datos
Los libros tienen la siguiente estructura:
```json
  {
    "author_name": [
        "Matthew Woodring Stover"
    ],
    "cover_edition_key": "OL24381693M",
    "key": "/works/OL2727030W",
    "title": "Star Wars Episode III - Revenge of the Sith"
  }
```
- `author_name` arreglo de autores involucrados en el libro.
- `cover_edition_key` key que me permite obtener la portada del libro.
- `key` identificador del libro en OpenLibrary API.
- `title` título del libro.

## Desiciones técnicas
- Para la persistencia de los datos decidí realizarla con `localStorage` para que la implementación fuera rápida.
- Estoy guardando en la estanteria todo el objeto del libro (titulo, autores, key, portada) para no tener que realizar consultar alternativas.
- No logré encontra como es que OpenLibrary API retorna elementos de la paginación. Es posible hacerla de manera local (operando sobre la totalidad de documentos encontrados).
- Decidí utilizar un servicio central con el que pudiera realizar facilmente operaciones entre los diferentes componentes.


## Desarrollo

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```
El build del proyecto se genera en `dist/my-library/browser`. Esa ruta se debe colocar en el archivo `firebase.json` ` hosting > public` para el correcto despliegue.

## Deploy 
```bash
  firebase deploy
```


## Uso de IA

- ¿En qué partes te apoyaste y por qué?
  - Decidí apoyarme al momento de hacer el scafffolding inicial dado que hace un tiempo no trabajo con Angular pero me ayudo a refrescarme rápidamente.
- ¿Qué sugerencias aceptaste vs. reescribiste?
  - Acepté gran casi en la totalidad el código correspondiente a hacer el fetch de los libros, y el service para el guardado de respuestas y estados. 
  - Cambié la forma en la que se visualizan los datos y la sintaxis del ngFor por un @for.
- Riesgos detectados
  - Uno de los riesgos que detecto en el código es que puede haber una reducción de performance al momento de cargar las imágenes.
  - Un área de mejora podría ser el agregar estados de carga para las mismas o ver si existen tumbnails mas livianos.
- Breve resumen de los prompts.
  - A grandes rasgos, le solicité a ChatGpt que inicializara un proyecto con ciertas tecnologías en concreto (para estar actualizados y en sintonia).
  - Le solicité implementar tailwind pero el mismo cli de angular lo implementa por lo tanto omití esa parte.
  - Le solicité la creación de componentes y servicios, me proporcionó comandos, html y ts que mer sirvieron como punto de partida.
  - Dado que tuve unos detalles con la ruta /favoritos al momento de hacer el deploy, volví a consultar a ChatGPT y me pudo ayudar con los ajustes en la configuración del firabase.json.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.3.

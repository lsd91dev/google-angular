Copia seguridad Google Maps + Stencil

# Google Maps con Stencil

----------

### 1. Crear el componente de Google Maps
Lo primero es generar el componente. Para ello, utilizamos un **script** que nos proporciona
Stencil:

```
stencil generate features/google-map
```

Nos preguntará qué ficheros queremos generar. Seleccionaremos únicamente **typescript**.

> Para deseleccionar opciones pulsa <kbd><</kbd> en el teclado.

Se nos generará entonces el fichero **google-map.tsx** con el siguiente contenido:

````
import { Component } from '@stencil/core';

@Component({
  tag: 'google-map',
})
export class GoogleMap {
}
````

### 2. Instalar las dependencias de Google Maps

En la página oficial de Google Maps:

https://developers.google.com/maps/documentation/javascript/using-typescript?_ga=2.23918714.-153267553.1632241178

Se nos indica que para trabajar con **typescript** podemos instalar el siguiente paquete:

> npm i -D @types/google.maps

Esto nos permitirá utilizar los tipos de Google Maps y poder renderizar el mapa.
Una vez lo hemos instalado, procedemos a modificar el fichero `index.ts` para incluir la siguiente
declaración:

```
declare module 'google.maps';
```

Y modificamos el **nombre del fichero** al siguiente: `index.d.ts`. De esta manera, indicamos a typescript
que tenemos un módulo escrito en **JavaScript**, pero que queremos utilizarlo como **TypeScript**.

Y añadimos lo siguiente al fichero `google-map.tsx`:

```
import { } from 'google.maps';
```

> Es posible que aparezca el siguiente error:
> 
>![](../../../../../google-stencil/assets/index.d.ts error.png)
> 
> En tal caso, es recomendable **eliminar** la declaración: ``export { Components, JSX } from './features';
`` del fichero de `index.d.ts`.

### 3. Renderizar el mapa de Google Maps

Para renderizar el mapa necesitamos de un **contenedor** donde cargarlo. Para ello, incluimos en nuestro componente de Google Maps la siguiente
función:
````
render() {
return <div id="google-map"></div>;
}
````

Y, a continuación, escribimos lo siguiente:

````

export class IonGoogleMaps {

   map!: google.maps.Map;

   componentDidRender() {
    const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
    this.map = new google.maps.Map(document.querySelector("#google-map") as HTMLElement, {
      center,
      zoom: 8
    });
  }
}
````

> Puedes saber más sobre [componentDidRender](###componentDidRender) en este punto

### 4. Incluir el componente en la aplicación de Angular

Una vez hemos terminado de 

# Places API

## Definición

Sirve para crear el **autocompletado** de los lugares. Para poder utilizarlo:

## Habilitar

Para poder utilizar la api **Places** tenemos que **habilitarla** en nuestro proyecto, dentro de la consola de Google.
- Lo primero es buscarla en el **mercado** utilizando el buscador

![](../../../../../doc/search-marker-place.png)

- Introducimos la palabra **Place API** y seleccionamos la opción correspondiente.
- Una vez dentro, la habilitamos:

![](../../../../../doc/Places-api.png)

- Y ahora podemos comprobar que aparece en nuestra lista de APIs disponibles:

![](../../../../../doc/Places API/API-Place-Habilitada.png)

Para que podamos **utilizarla** con la misma **api key** que teníamos ya establecida, debemos indicarle
a nuestras credenciales almacenadas que **permita que se utilice otra api con esas mismas credenciales**.

- Acudimos a la opción **Credenciales** en la barra de la izquierda.

![](../../../../../doc/Places API/Credenciales-api-places.png)

- Ahora mismo tenemos habilitadas **maps api**, **geocode** y **geolocation**.

- Para añadirla, hacemos click justo en la opción donde pone **3 api** y buscamos la api **places api**

![](../../../../../doc/Places API/Api-places-permitidas.png)

- Se nos agregará a la lista de **APIs seleccionadas**. Una vez guardemos, 
podremos utilizarla en nuestra aplicación.

![](../../../../../doc/Places API/api-place-habilitada copy.png)

# Geocoding

> https://developers.google.com/maps/documentation/geocoding/overview



# StencilJS

## 1. Funciones predefinidas
###componentDidRender

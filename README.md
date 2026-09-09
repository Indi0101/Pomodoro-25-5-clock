# 🍅 Pomodoro 25 + 5 Clock

Aplicación web de temporizador Pomodoro desarrollada con **React**, JavaScript, HTML y CSS.

El proyecto permite configurar la duración de las sesiones de concentración y descanso, iniciar o pausar el temporizador y alternar automáticamente entre ambos períodos.

Fue desarrollado como proyecto de práctica para reforzar conceptos fundamentales de React como manejo de estado, efectos y eventos.

---

## ✨ Funcionalidades

### ⏱️ Temporizador Pomodoro

La aplicación utiliza por defecto:

- **25 minutos** de concentración.
- **5 minutos** de descanso.

El temporizador muestra el tiempo restante en formato:

```text
MM:SS
```

---

## ⚙️ Configuración de tiempos

El usuario puede modificar independientemente:

- Duración de la sesión.
- Duración del descanso.

Cada valor puede aumentarse o disminuirse utilizando los controles de la interfaz.

El valor mínimo permitido es de **1 minuto**.

---

## 🔄 Cambio automático de sesión

La aplicación administra dos modos:

```text
session
break
```

Cuando el tiempo de concentración llega a cero:

1. Cambia automáticamente al modo de descanso.
2. Carga el tiempo de descanso configurado.
3. Inicia el nuevo período.

Cuando finaliza el descanso, vuelve al modo de concentración utilizando la duración configurada para la sesión.

---

## 🔔 Alerta de audio

Al llegar el temporizador a cero se reproduce automáticamente una alerta sonora.

El proyecto incluye el archivo:

```text
audio/BeepSound.wav
```

La reproducción se controla desde JavaScript mediante la API `Audio`.

---

## 🎮 Controles

La aplicación cuenta con controles para:

### ▶️ Iniciar

Inicia el temporizador utilizando la duración configurada para la sesión.

### ⏸️ Pausar

Detiene temporalmente la actualización del temporizador.

### 🔄 Reiniciar

Restablece la configuración principal del Pomodoro:

```text
Sesión: 25 minutos
Descanso: 5 minutos
```

### ⬆️ ⬇️ Configurar duración

Los controles superiores permiten aumentar o disminuir independientemente los minutos de concentración y descanso.

---

## ⚛️ React

La aplicación está construida mediante un componente funcional llamado:

```javascript
Pomodoro
```

Para administrar el estado utiliza varios hooks `useState`:

- Duración del descanso.
- Duración de la sesión.
- Estado activo/inactivo.
- Tiempo restante.
- Modo actual (`session` / `break`).

También utiliza `useEffect` para:

- Ejecutar el contador cada segundo.
- Limpiar el intervalo cuando cambia el estado.
- Detectar cuando el contador llega a cero.
- Alternar entre concentración y descanso.
- Reproducir la alerta sonora.

---

## ⏳ Funcionamiento del contador

El temporizador utiliza:

```javascript
setInterval()
```

con una actualización cada:

```text
1000 ms
```

El intervalo se crea desde un `useEffect` y se elimina mediante:

```javascript
clearInterval()
```

durante el proceso de limpieza del efecto.

Esto evita mantener intervalos anteriores activos al cambiar el estado del temporizador.

---

## 🎨 Interfaz

La interfaz fue creada con CSS personalizado.

Incluye:

- Diseño centrado.
- Panel principal con bordes redondeados.
- Sombras.
- Controles divididos para sesión y descanso.
- Tipografía diferenciada para el cronómetro.
- Efectos `hover`.
- Efectos al hacer clic.
- Iconos para los controles del temporizador.

Los iconos utilizados provienen de **Bootstrap Icons**.

---

## 🛠️ Tecnologías utilizadas

- **React 18**
- **JavaScript**
- **HTML5**
- **CSS3**
- React Hooks
- Bootstrap Icons
- Babel
- Git
- GitHub

---

## 🌐 Implementación de React

Este proyecto utiliza React directamente desde CDN:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Por esta razón el proyecto puede ejecutarse directamente en el navegador sin utilizar npm, Vite o Create React App.

---

## 📁 Estructura del proyecto

```text
Pomodoro-25-5-clock/
│
├── audio/
│   └── BeepSound.wav
│
├── app.js
├── index.html
├── style.css
└── README.md
```

### `app.js`

Contiene:

- Componente React principal.
- Estados de la aplicación.
- Lógica del temporizador.
- Cambio entre sesión y descanso.
- Controles.
- Reproducción de audio.

### `index.html`

Contiene:

- Elemento raíz de React.
- React y ReactDOM mediante CDN.
- Babel.
- Bootstrap Icons.
- Bundle de pruebas de freeCodeCamp.

### `style.css`

Contiene todo el diseño visual de la aplicación:

- Distribución.
- Colores.
- Tamaños.
- Sombras.
- Cronómetro.
- Controles.
- Estados hover y active.

---

## 💡 Conceptos aplicados

Durante el desarrollo del proyecto trabajé con:

- Componentes funcionales de React.
- React Hooks.
- Manejo de estado con `useState`.
- Efectos con `useEffect`.
- Manejo de eventos.
- Renderizado dinámico.
- Temporizadores en JavaScript.
- Limpieza de efectos.
- Manejo de audio desde el navegador.
- JSX.
- Diseño de interfaces con CSS.
- Integración de librerías mediante CDN.

---

## 🎓 Origen del proyecto

Proyecto desarrollado como parte de la práctica de desarrollo frontend y React, basado en el ejercicio **25 + 5 Clock** de freeCodeCamp.

El objetivo fue aplicar conceptos de React en una aplicación interactiva con manejo de estado y comportamiento basado en tiempo.

---

## 📌 Estado del proyecto

Proyecto funcional de aprendizaje.

Actualmente permite configurar los períodos de concentración y descanso, ejecutar el temporizador, alternar automáticamente entre ambos modos y reproducir una alerta al finalizar cada período.

---

## 🚀 Posibles mejoras

Algunas mejoras que podrían incorporarse posteriormente:

- Mostrar visualmente si el temporizador está en modo `Session` o `Break`.
- Permitir continuar exactamente desde el tiempo pausado.
- Mejorar la lógica de reinicio.
- Limitar los valores máximos configurables.
- Mejorar el comportamiento del audio.
- Adaptar la interfaz a dispositivos móviles.
- Migrar el proyecto a Vite.
- Separar la interfaz en componentes React más pequeños.
- Agregar persistencia de preferencias.
- Incorporar estadísticas de sesiones completadas.

---

## 👩‍💻 Autora

Desarrollado por **Indira** como parte de mi portafolio de desarrollo de software.

GitHub: [@Indi0101](https://github.com/Indi0101)

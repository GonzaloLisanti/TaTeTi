# TaTeTi - Juego de Tres en Línea

**TaTeTi** es un juego clásico de **Tres en Línea** (también conocido como **Tic-Tac-Toe**) desarrollado con **React** y **TypeScript**. Este proyecto utiliza varias herramientas modernas, como **Bootstrap** para el estilo, efectos visuales llamativos con **React Confetti** y **react-tsparticles**, y una estructura de componentes modular que permite mantener un código limpio y fácil de mantener.

## Características del Proyecto

- **Interactividad y Animaciones**: Cuando un jugador gana o cuando se produce un empate, se muestran animaciones de confeti (con **React Confetti**) o partículas flotantes, lo que hace que la experiencia de juego sea más dinámica y entretenida.
- **Responsive Design**: Utiliza **Bootstrap** para asegurar que el juego se vea bien en cualquier dispositivo.
- **Efectos de Partículas**: En el caso de empate, se usan **efectos de partículas** para dar un toque visual único al evento.
- **Manejo de Estado**: El juego utiliza **React hooks** y **React context** para manejar el estado de las jugadas y determinar el ganador o el empate.

## Tecnologías y Dependencias

Este proyecto fue creado con las siguientes tecnologías:

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que agrega tipado estático.
- **Bootstrap**: Framework de CSS para un diseño rápido y responsivo.
- **React Confetti**: Biblioteca para agregar efectos de confeti al ganar el juego.
- **React-tsparticles**: Usado para crear efectos de partículas en el fondo del juego, agregando un toque visual único durante el empate.
- **React-Select**: Biblioteca para crear selectores de opción en el juego si es necesario para futuras expansiones.

### Dependencias principales:

```json
"dependencies": {
  "react": "^19.0.0",
  "react-confetti": "^6.4.0",
  "react-dom": "^19.0.0",
  "react-select": "^5.10.1",
  "react-tsparticles": "^2.12.0",
  "react-use": "^17.6.0",
  "tsparticles": "^2.12.0"
}
```

### Dependencias de desarrollo:

```json
"devDependencies": {
  "@eslint/js": "^9.21.0",
  "@types/react": "^19.0.10",
  "@types/react-dom": "^19.0.4",
  "@vitejs/plugin-react-swc": "^3.8.0",
  "eslint": "^9.21.0",
  "eslint-plugin-react-hooks": "^5.1.0",
  "eslint-plugin-react-refresh": "^0.4.19",
  "globals": "^15.15.0",
  "typescript": "~5.7.2",
  "typescript-eslint": "^8.24.1",
  "vite": "^6.2.0"
}
```

## Instalación

Para instalar y ejecutar este proyecto en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/GonzaloLisanti/TaTeTi.git
   ```

2. Accede a la carpeta del proyecto:

   ```bash
   cd TaTeTi
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el proyecto en modo de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre tu navegador y accede a `http://localhost:3000` para jugar.

## Uso

El juego comienza con un tablero vacío de 3x3, donde dos jugadores alternan para marcar su casilla con "X" o "O". El primer jugador en alinear tres de sus marcas en una fila, columna o diagonal gana. Si todos los espacios están llenos sin un ganador, se declara un empate.

**Cuando el juego termine**:

- Si un jugador gana, aparecerá un mensaje con confeti de celebraciones.
- Si el juego termina en empate, se mostrará un mensaje de empate acompañado de efectos de partículas flotantes.

## Contribuir

Si deseas contribuir a este proyecto, no dudes en hacer un **fork** del repositorio, crear una rama con tus cambios y enviar un **pull request**. Estaré encantado de revisar tus aportes.

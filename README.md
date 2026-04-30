# 🚀 NASA Interactive Dashboard

Un dashboard moderno y de alto rendimiento para la visualización de datos espaciales, enfocado en el monitoreo de objetos cercanos a la Tierra (NEO) y movilidad.

![GitHub language count](https://img.shields.io/github/languages/count/Jhovanygonza2/-NASA)
![GitHub top language](https://img.shields.io/github/languages/top/Jhovanygonza2/-NASA)

## 📁 Estructura del Proyecto

El repositorio está dividido en tres áreas principales:

*   **`/frontend`**: Interfaz de usuario construida con **React + Vite**, utilizando **Tailwind CSS** para un diseño premium y **Recharts** para visualizaciones dinámicas.
*   **`/backend`**: Servidor API en **Node.js + Express** que consume datos reales de las APIs oficiales de la NASA.
*   **`/polyglot-samples`**: Ejemplos de implementación en múltiples lenguajes para demostración de capacidades.

## 🛠️ Tecnologías Principales

*   **Frontend**: React 19, Vite, Tailwind CSS, Lucide Icons.
*   **Backend**: Node.js, Express, Axios (Integración con NASA API).
*   **Lenguajes Adicionales**: TypeScript, Go, Kotlin, Dart, Elixir.

## 🚀 Cómo empezar

### Requisitos previos
*   Node.js instalado.
*   Una API Key de la NASA (puedes usar `DEMO_KEY` por defecto).

### Instalación

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Jhovanygonza2/-NASA.git
    cd -NASA
    ```

2.  **Configurar el Backend:**
    ```bash
    cd backend
    npm install
    # Crea un archivo .env y agrega: NASA_API_KEY=tu_api_key
    npm start
    ```

3.  **Configurar el Frontend:**
    ```bash
    cd ../frontend
    npm install
    npm run dev
    ```

## 🌐 Visualización Polyglot
Este proyecto incluye implementaciones de referencia en varios lenguajes para fines de documentación y detección de GitHub:
*   `SpaceTracker.ts` (TypeScript)
*   `main.go` (Go)
*   `NasaClient.kt` (Kotlin)
*   `telemetry.dart` (Dart)
*   `orbit.ex` (Elixir)

## 📝 Licencia
Este proyecto está bajo la licencia MIT.

---
Desarrollado con ❤️ para el monitoreo espacial.

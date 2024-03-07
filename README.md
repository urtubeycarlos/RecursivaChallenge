# Recursiva Challenge

**Notas de desarrollo**:

-   Backend en ASP .NET Core para realizar la lectura del archivo utilizando la librería CsvHelper que ayuda considerablemente en el proceso. El tratamiento de los datos los realiza el Frontend según los inputs del usuario.
-   El Frontend se presenta de una forma minimalista, no se definió ningún maquetado mas allá de una similitud a un sitio ajeno, se estableció en el documento los requerimientos específicos para el reporte y se trabajó específicamente sobre esos requerimientos, abstrayendo el código lo posible para futuras adiciones y/o modificaciones.

# Utilización

## RecursivaChallengeBackend

Se requiere Visual Studio 2022 y .NET Core 8. Se puede descargar el instalador de Visual Studio desde el siguiente enlace y durante su proceso de instalación se debe seleccionar los componentes necesarios para desarrollar en ASP .Net Core.
https://visualstudio.microsoft.com/es/vs/community/
Luego se debe abrir la solución con Visual Studio y este se encargará de instalar las dependencias automáticamente.

## RecursivaChallengeFrontend

-   Descargar e instalar NodeJS versión 18 o superior. https://nodejs.org/en/download
-   Abrir una consola y moverse al directorio del proyecto en cuestión con el comando `cd`.
-   Escribir y ejecutar en consola `npm install`.
-   Crear un archivo `.env` en el directorio del proyecto y escribir los key-value correspondientes basándose en el archivo `.env.example` como guía.
-   Escribir y ejecutar en consola `npm run dev`, una vez finalizado el proceso saldrá en consola la URL por donde se puede visualizar la aplicación.

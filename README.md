# Auth API with TypeScript

## Usage

You can use this small API from your local server if you have MongoDB and Node.js installed, otherwise, from Docker, having a Node.js and MongoDB images you can run everything without any problem.

### Clone this repository

```bash
git clone https://github.com/angelguarox/auth-ts-api.git
```
After the repository is cloned, you have to choose how to use this package. These are the steps to follow depending on the way you decide to run it:

#### Docker

Ya instaladas las images de Node.js y MongoDB respectivamente, estás preparado para configurar e contenedor de esta sencilla API y poder ejecutarla. Debes tener instalado docker-compose también.

Ubícate desde tu terminal o cónsola en la dircción del proyecto que acabas de clonar en el paso anterior. Una vez estes allí, ejecuta el siguiente comando:

```bash
docker build -t authtsapi-app .
```

Con esto acabamos de crear la imagen para la aplicación. Solo te queda un paso más, donde se crará l imagen para la base de datos, los comando a seguir son dos y son los siguientes:

```bash
docker-compose build
docker-compose up
```

Con esto, ya tienes creado y ejecutándose desde un contenedor de Docker esta pequeña API de Auth.

#### Localhost

Después de clonar el repositorio, teniendo instalado Node.js y MongoDB en tu computador y usando tu servidor local, debes ir a la ruta del proyecto para ejecutar algunos comandos. Lo primero sería instalar los módulos o paquetes de Node.js para poder ejecutar la aplicación, lo haces con el comando:

```bash
npm install
```

Instalados los módulos necesarios, podrás ejecutar el servidor y toda la aplicación con el comando:

```bash
npm run dev
```

### Importante!

Esta es una pequeña aplicación sin frontend, por lo que deberás usar un cliente REST, el de tu preferencia, por ejemplo Postman, Insomnia, AdvancedRestClient, puglins de tu editor de códigos, funcionalidades de tu IDE favorito o simplemente con curl desde tu terminal.

### Problemas

#### Puerto

Cambia el puerto si te muestra al usar ese puerto. Ten en cuenta que si estás usando Docker, estás exponieno un puerto diferente al configurado en la aplicación, si ese puerto es el error, debes cancela la ejecución del puerto de Docker y cambiándolo en el archivo Dockerfile, en la raíz de la aplicación.

```dockerfile
EXPOSE 4000
```
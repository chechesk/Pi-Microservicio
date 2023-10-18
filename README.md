Microservicio de Star Wars API
Este proyecto implementa un microservicio de Star Wars API utilizando Docker para la contenerización y desplegado en un servidor virtual VMware con Google Cloud como almacenamiento. El microservicio ofrece 4 endpoints principales para acceder a información sobre personajes, películas y planetas del universo de Star Wars.

Endpoints
Gateway Principal: /api

Characters (Personajes):

GET /api/Characters: Obtiene una lista de todos los personajes.
GET /api/Characters/{id}: Obtiene información sobre un personaje específico por su ID.
POST /api/Characters: Crea un nuevo personaje proporcionando los datos necesarios.
PUT /api/Characters/{id}: Actualiza un personaje existente identificado por su ID.
DELETE /api/Characters/{id}: Elimina un personaje según su ID.

Films (Películas):

GET /Films: Obtiene una lista de todas las películas de Star Wars.
GET /Films/{id}: Obtiene información sobre una película específica por su ID.
POST /Films: Crea una nueva película proporcionando los datos necesarios.
PUT /Films/{id}: Actualiza una película existente identificada por su ID.
DELETE /Films/{id}: Elimina una película según su ID.

Planets (Planetas):

GET /Planets: Obtiene una lista de todos los planetas de Star Wars.
GET /Planets/{id}: Obtiene información sobre un planeta específico por su ID.
POST /aPlanets: Crea un nuevo planeta proporcionando los datos necesarios.
PUT /Planets/{id}: Actualiza un planeta existente identificado por su ID.
DELETE /Planets/{id}: Elimina un planeta según su ID.

Requisitos
Docker instalado en tu máquina local.
Acceso a una cuenta de Google Cloud para el almacenamiento de datos.
Configuración
Clona este repositorio en tu máquina local:

URL CUENTA DE SERVICIO https://github.com/chechesk/Pi-Microservicio
bash
Copy code
git clone https://github.com/chechesk/Pi-Microservicio.git
cd microservicio-starwars
Configura las credenciales de Google Cloud para almacenamiento de datos en el archivo .env:

javascript
Copy code
MONGO_URI=RUTA DEL CLOUSTER DE MONGODB

Asegúrate de proporcionar la ruta correcta a tu archivo JSON de autenticación de Google Cloud.

Despliegue en Docker
Para ejecutar el microservicio en Docker, sigue estos pasos:

Construye la imagen de Docker:

bash
Copy code
docker build -t microservicio-starwars .
Ejecuta el contenedor:

bash
copy code
docker network create star_wars // nombre de la red para que se conecten los micro servicios

bash
Copy code
docker run -d -p 8000:8000 network=star_wars ==name=gateway gateway
cada uno de los microservicio tiene su puerto y su nombre a conectar en la red

se tiene que hacer con cada uno de los micro servicios aplicados

1- Gateway
2- Character
3- Film
4- Planets
5- Database

El microservicio estará disponible en http://localhost:8080.

Despliegue en un servidor VMware
Para desplegar el microservicio en un servidor VMware, sigue estos pasos:

Configura un servidor virtual VMware con un sistema operativo compatible.

Copia el código del microservicio en el servidor.

Instala Docker en el servidor si aún no está instalado.

Instala
Sudo git
Sudo docker
Sudo docker-compose

Construye la imagen de Docker como se mencionó anteriormente.

Ejecuta el contenedor Docker en el servidor.

Asegúrate de configurar el firewall y las reglas de seguridad para permitir el acceso a través del puerto 8080 (o el puerto que hayas configurado).

El microservicio estará disponible en http://34.68.75.188:8000/

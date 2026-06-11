# Gestión de Usuarios - Frontend React

## Descripción

Aplicación frontend desarrollada en React para consumir una API REST de gestión de usuarios desarrollada en Spring Boot.

La aplicación permite realizar operaciones CRUD (Crear, Consultar, Actualizar y Eliminar) sobre usuarios registrados en una base de datos MySQL.

## Tecnologías Utilizadas

* React
* Vite
* Axios
* JavaScript
* HTML5
* CSS3

## Funcionalidades

* Listar usuarios.
* Crear usuarios.
* Actualizar usuarios.
* Eliminar usuarios.
* Comunicación con API REST mediante Axios.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Shakespeares1/users-management-frontend.git
```

Ingresar a la carpeta:

```bash
cd users-management-frontend
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npm run dev
```

## Configuración Backend

La aplicación consume el backend disponible en:

```javascript
http://localhost:8080/api/users
```

Configurado en:

```text
src/services/userService.js
```

## Evidencia de Funcionamiento

La aplicación permite:

* Crear usuarios.
* Consultar usuarios.
* Actualizar usuarios.
* Eliminar usuarios.

## Autor

Antonio De Ávila
Universidad de Cartagena
Desarrollo Web

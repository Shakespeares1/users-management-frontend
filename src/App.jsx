import { useEffect, useState } from "react";
import userService from "./services/userService";

function App() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);

  const [newUser, setNewUser] = useState({
  id: "",
  name: "",
  email: "",
  password: "",
  role: "MEMBER",
  status: "ACTIVE"
});

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await userService.getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error al cargar usuarios", error);
    }
  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const editUser = (user) => {
    setNewUser({
  id: user.id,
  name: user.name,
  email: user.email,
  password: "12345678",
  role: user.role,
  status: "ACTIVE"
});

    setEditing(true);
  };

  const updateUser = async () => {
    try {
      await userService.updateUser(
        newUser.id,
        newUser
      );

      alert("Usuario actualizado correctamente");

      setEditing(false);

      setNewUser({
  id: "",
  name: "",
  email: "",
  password: "",
  role: "MEMBER",
  status: "ACTIVE"
});

      loadUsers();
    } catch (error) {
      console.error(error);
      alert("Error al actualizar usuario");
    }
  };

  const deleteUser = async (id) => {
    const confirmar = window.confirm(
      "¿Desea eliminar este usuario?"
    );

    if (!confirmar) return;

    try {
      await userService.deleteUser(id);

      alert("Usuario eliminado correctamente");

      loadUsers();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar usuario");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      updateUser();
      return;
    }

    try {
      await userService.createUser(newUser);

      alert("Usuario creado correctamente");

      setNewUser({
  id: "",
  name: "",
  email: "",
  password: "",
  role: "MEMBER",
  status: "ACTIVE"
});

      loadUsers();
    } catch (error) {
      console.error(error);
      alert("Error al crear usuario");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestión de Usuarios</h1>

      <h2>
        {editing ? "Editar Usuario" : "Crear Usuario"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={newUser.id}
          onChange={handleChange}
          required
          disabled={editing}
        />

        <br /><br />

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={newUser.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={newUser.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={newUser.password}
          onChange={handleChange}
          required={!editing}
        />

        <br /><br />

        <select
          name="role"
          value={newUser.role}
          onChange={handleChange}
        >
          <option value="ADMIN">ADMIN</option>
          <option value="MEMBER">MEMBER</option>
          <option value="REVIEWER">REVIEWER</option>
        </select>

        <br /><br />

        <button type="submit">
          {editing
            ? "Actualizar Usuario"
            : "Guardar Usuario"}
        </button>
      </form>

      <hr />

      <h2>Lista de Usuarios</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>

              <td>
                <button
                  onClick={() => editUser(user)}
                >
                  Editar
                </button>

                {" "}

                <button
                  onClick={() => deleteUser(user.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
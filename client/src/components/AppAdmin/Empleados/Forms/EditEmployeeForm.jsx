
const EditEmployeeForm = ({ employee, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Título: Editar empleado #{employee.EmployeeID}</label>
      <br />
      <label>Nombre:</label>
      <input type="text" name="name" defaultValue={employee.Name} required />
      <br />
      <label>Apellido Paterno:</label>
      <input type="text" name="lastName" defaultValue={employee.LastName} required />
      <br />
      <label>Apellido Materno:</label>
      <input type="text" name="middleName" defaultValue={employee.MiddleName} required />
      <br />
      <label>Área Trabajo:</label>
      <select name="area" defaultValue={employee.Area} required>
        <option value="Ventas">Ventas</option>
        <option value="Diseño">Diseño</option>
        <option value="Impresión">Impresión</option>
        <option value="Producción">Producción</option>
        <option value="Taller">Taller</option>
        <option value="Administración">Administración</option>
      </select>
      <br />
      <label>Cargo:</label>
      <select name="cargo" defaultValue={employee.Cargo} required>
        <option value="Vendedor">Vendedor</option>
        <option value="Diseñador">Diseñador</option>
        <option value="Jefe Diseño">Jefe Diseño</option>
        <option value="Impresionista">Impresionista</option>
        <option value="Empleado general">Empleado general</option>
        <option value="Administración">Administración</option>
      </select>
      <br />
      <label>Email:</label>
      <input type="email" name="email" defaultValue={employee.correo} required />
      <br />
      <label>Empleado-contraseña:</label>
      <input type="password" name="password" defaultValue={employee.contra} required />
      <br />
      <button type="submit">Guardar cambios</button>
    </form>
  );
};

export default EditEmployeeForm;

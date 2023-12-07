import './AddEmployee.css'

const AddEmployeeForm = ({ onSubmit }) => {
  return (
    <form className="add-employee-form" onSubmit={onSubmit}>
      <label>Agregar nuevo empleado #123</label>
      <br />
      <label>Nombre:</label>
      <input type="text" name="name" required />
      <br />
      <label>Apellido Paterno:</label>
      <input type="text" name="lastName" required />
      <br />
      <label>Apellido Materno:</label>
      <input type="text" name="middleName" required />
      <br />
      <label>Área Trabajo:</label>
      <select name="area" required>
        <option value="Ventas">Ventas</option>
        <option value="Diseño">Diseño</option>
        <option value="Impresión">Impresión</option>
        <option value="Producción">Producción</option>
        <option value="Taller">Taller</option>
        <option value="Administración">Administración</option>
      </select>
      <br />
      <label>Cargo:</label>
      <select name="cargo" required>
        <option value="Vendedor">Vendedor</option>
        <option value="Diseñador">Diseñador</option>
        <option value="Jefe Diseño">Jefe Diseño</option>
        <option value="Impresionista">Impresionista</option>
        <option value="Empleado general">Empleado general</option>
        <option value="Administración">Administración</option>
      </select>
      <br />
      <label>Email:</label>
      <input type="email" name="email" required />
      <br />
      <label>Empleado-contraseña:</label>
      <input type="password" name="password" required />
      <br />
    </form>
  );
};

export default AddEmployeeForm;

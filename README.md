# EM | Employee Management

Welcome to WM, your comprehensive employee management interface! This project provides a seamless experience for managing employees, roles, and administrative tasks. With a robust server-side built on C# .NET and a dynamic client-side React application, WM offers powerful features for efficient employee management.

## Server-Side (C# .NET)

WM's server-side architecture is built on C# .NET, utilizing a layered model following SOLID principles. It interfaces seamlessly with an SQL database using the Entity Framework, leveraging asynchronous operations for improved performance. Authentication is handled by JWT tokens, ensuring secure access to sensitive data.

### Entities

#### Employee
- **EmployeeId**: [Key] Unique identifier for each employee.
- **FirstName**: [Required] First name of the employee.
- **LastName**: [Required] Last name of the employee.
- **TZ**: [Required] Identification number (TZ) of the employee.
- **DateOfStartingWork**: [Required] Date when the employee started working.
- **DateOfBirth**: [Required] Date of birth of the employee.
- **Gender**: [Required] Gender of the employee.
- **IsDeleted**: Flag indicating whether the employee is deleted.

#### Role
- **RoleId**: [Key] Unique identifier for each role.
- **Name**: [Required] Name of the role.

#### JobPosition
- **JobPositionId**: [Key] Unique identifier for each job position.
- **JobPositionName**: Name of the job position.
- **IsManagerial**: Flag indicating whether the job position is managerial.
- **DateStartRole**: Date when the job position started.

### Director
- **Id**: Unique identifier for the director.
- **Name**: Name of the director.
- **Password**: Password for director authentication.

## Client-Side (React)

WM's client-side interface is developed using React, providing a user-friendly experience for managing employee data.

- Display a table listing all employees in the company with their name, ID card, and date of joining.
- Option to download table data to an Excel file.
- Filter table data using a search button.
- Administrator privileges allow:
  - Deleting an employee.
  - Editing employee details.
  - Adding and deleting roles.
  - Adding employees with dynamic job positions selection.

### Activation Steps

1. **Download**: Clone the project from GitHub.
2. **Database Migration**: Run the command `update-database` on the server to create tables in the database according to the migration.
3. **Add Administrator**: Manually add an administrator to the Admin table with a name and password for signing in.
4. **Run Server**: Start the server.
5. **Run Client**: Execute `npm run dev` to run the client.
6. **Enjoy**: Start enjoying the site and streamline your employee management tasks with ease.

Thank you for choosing WM | Workers Management for your employee management needs. If you have any questions or feedback, feel free to reach out. Happy managing!

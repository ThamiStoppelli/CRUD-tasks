import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import mockapi from '../../services/api'

interface ITasks {
  id: number;
  title: string;
  descripton: string;
  finished: boolean;
  createdAt: Date;
  updatedAt: Date;
  deadline: Date;
}

const Tasks = () => {

  const [tasks, setTasks] = useState<ITasks[]>([])

  useEffect(() => {
    loadTasks();
  }, [])

  async function loadTasks() {

    const response = await mockapi.get('/Tasks')
    console.log(response)
    setTasks(response.data)

  }

  return (
    <div className="container">
      <br />
      <h1>Task page</h1>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Data de Atualização</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>

          {
            tasks.map(task => (
              <tr key={task.id}>
                <td> { task.id } </td>
                <td> { task.title } </td>
                <td> { task.updatedAt } </td>
                <td> { task.finished } </td>
                <td></td>
              </tr>
            ))
          }
//minuto 31, parte 1 CRUD de tasks com react, typescript
        </tbody>
      </Table>

    </div>
  );
}

//function Tasks() {
//return <h1>Task page</h1>;
//}

export default Tasks;
import React, { Component } from 'react';

import './styles.css';

class Table extends Component {
  state = {
    clients: [
      {
        name: 'Joao',
        telephone: '(35) 9999-8888'
      },
      {
        name: 'Maria',
        telephone: '(35) 9999-7777'
      },
      {
        name: 'Pedro',
        telephone: '(35) 9999-6666'
      },
      {
        name: 'Julia',
        telephone: '(35) 9999-5555'
      },
    ]
  }

  render() {
    return (
      <div id="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Telephone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {this.state.clients.map(function (client) {
                return (
                  <tr>
                    <td>{client.name}</td>
                    <td>{client.telephone}</td>
                    <td>
                      <a href="/">Edit</a> | <a href="/">Delete</a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
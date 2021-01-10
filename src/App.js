import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.addContact(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
      completed: false,
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Number
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

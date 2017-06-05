import * as React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import { Person } from './types'

interface NewPersonProps {
  onNewPersonCreation: (person:Person) => any
}

interface NewPersonState extends Person {
}

class NewPerson extends React.Component<NewPersonProps, NewPersonState> {
  constructor(props: NewPersonProps) {
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      tel: ''
    }
  }

  onFirstNameChange(newFirstName:string) {
    this.setState({...this.state, firstName: newFirstName })
  }

  onLastNameChange(newLastName:string) {
    this.setState({...this.state, lastName: newLastName })
  }

  onEmailChange(newEmail:string) {
    this.setState({...this.state, email: newEmail})
  }

  onTelChange(newTel:string) {
    this.setState({...this.state, tel: newTel })
  }

  render() {
    return <form onSubmit={() => this.props.onNewPersonCreation({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        tel: this.state.tel
      })}>
      <TextField id="person-first-name" 
                 value={this.state.firstName}
                 onChange={this.onFirstNameChange.bind(this)}
      />
      <TextField id="person-last-name"
                 value={this.state.lastName}
                 onChange={this.onLastNameChange.bind(this)} />
      <TextField id="person-email" 
                 value={this.state.email}
                 onChange={this.onEmailChange.bind(this)}/>
      <TextField id="person-tel"
                 value={this.state.tel}
                 onChange={this.onTelChange.bind(this)} />
      <RaisedButton label="Submit" 
                    primary={true} 
                    type="submit" />
    </form>
  }
}

export default NewPerson
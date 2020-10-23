import React from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import store from 'store';
import styles from './Login.css';
import './submit.css'

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
      const { history } = this.props;



    this.setState({ error: false });

    if (!(email === 'abc@gmail.com' && password === '123')) {
      return this.setState({ error: true });
    }

    console.log("you're logged in. yay!");
    store.set('loggedIn', true);
    history.push('/home')
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    const { error } = this.state;

    return (
      <Grid>
        <Helmet>
          <title>CMS | Login</title>
        </Helmet>

        <Grid.Column width={6} />
        <Grid.Column width={4}>
          <Form className={styles.loginForm} error={error} onSubmit={this.onSubmit}>
            <Header as="h1">Login</Header>
            <div class="bord">
            {error && <Message
              error={error}

              content="That email/password is incorrect. Try again!"
            />}
            </div>
            <Form.Input
              inline
              label="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
            />
            <Form.Input
              inline
              label="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <p></p>
            <Form.Button class = "button" type="submit">Submit</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;

import firebase from '@firebase/app';
import '@firebase/auth';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
    // add some state for feedback
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress(){
        const { email, password } = this.state;
        // console.log(email);
        // console.log(password);
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
               firebase.auth().createUserWithEmailAndPassword(email, password)
                   .then(this.onLoginSuccess.bind(this))
                   .catch(this.onLoginFail.bind(this));
            });
        /*then() is for success
        catch() is for failed*/
    }

    // Helper Methods START
    onLoginSuccess(){
        this.setState({
           email: '',
           password: '',
           loading: false,
           error: ''
        });
    }

    onLoginFail (){
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }

    renderButton(){
        if (this.state.loading) {
            return <Spinner setSize={"small"} />
        } else {
            return (
                <Button whenPressed={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
            );
        }
    }
    // Helper Methods END

    render () {
        return(
            <Card>
                <CardSection>
                  <Input
                      placeholder="user@gmail.com"
                      label="Email"
                      value={this.state.email}
                      onChangeText={emailText => this.setState({ email: emailText })}
                  />

                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={passwordText => this.setState({password: passwordText })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
  errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }
};


export default LoginForm;
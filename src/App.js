// This import loads the firebase namespace.
import firebase from '@firebase/app';
import '@firebase/auth';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

// Firebase configuration config is from your firebase project
// after setting up firebase project, this one will not work!!!!
const config = {
    apiKey: 'AIzaSyA2YmjPvOAdMj2HPO-RmrjGd9Yvs5Hngjk',
    authDomain: 'auth-7b1cd.firebaseapp.com',
    databaseURL: 'https://auth-7b1cd.firebaseio.com',
    projectId: 'auth-7b1cd',
    storageBucket: 'auth-7b1cd.appspot.com',
    messagingSenderId: '912068072570'
};

class App extends Component {
    // using null says i dont know if signed in or not
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp(config);
        // console.log(this);

        // Using to see if client is logged in or not
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true});
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent(){

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button whenPressed={() =>{console.log("SigningOut!");firebase.auth().signOut();}}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm/>
            default:
                return <View style={styles.spinnerAlign}><Spinner /></View>
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Aunthentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

const styles ={
    spinnerAlign: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
};

export default App;
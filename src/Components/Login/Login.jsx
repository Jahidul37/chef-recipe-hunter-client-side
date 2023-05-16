// import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from 'react-google-button'


import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
            })
            .catch(error => {
                console.log(error);
            })

    }

    const [user, setUser] = useState(null)

    const auth = getAuth(app)
    const googleprovider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleprovider)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                setUser(loggeduser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser);
                setUser(loggeduser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='mx-auto w-25'>

            <h2>LogIn</h2>

            <Form onSubmit={handleLogin} className='my-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-success">
                    Don't Have an Account? <Link to="/register">Register</Link>
                    <br />
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">
                    Well never share your email with anyone else.
                </Form.Text>
            </Form>

            <div>
                {
                    user ?
                        <button onClick={handleSignOut}>signOut</button>
                        :
                        <>
                            <GoogleButton className='mx-auto'
                                onClick={handleGoogleSignIn}
                            />
                            <button onClick={handleGithubSignIn}>GitHub Login</button>
                        </>
                }
                {user && <div>
                    <h3>user:{user.displayName}</h3>
                    <p><img src={user.photoURL} alt="" /></p>
                </div>
                }
            </div>

        </Container>
    );
};

export default Login;
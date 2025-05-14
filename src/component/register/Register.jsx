// import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Link } from 'react-router';
import React, { use } from 'react';
import { AuthContext } from '../../context/Authcontext';

const Register = () => {

    const {createUser}= use(AuthContext);

   
    const handleRegister = e => {
        e.preventDefault();
        const name= e.target.name.value;
        const email= e.target.email.value;
        const password= e.target.password.value;
        //console.log(name,email,password);
        // createUserWithEmailAndPassword
        createUser(email,password)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })

    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-8 max-w-sm shrink-0 shadow-2xl">

            <div className="card-body ">
                <h1 className="text-3xl font-bold text-center text-blue-500">Please Register!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div>Forgot password?</div>

                    <button className="btn btn-neutral mt-4 bg-blue-500 border-blue-600 text-white">Register</button>

                </form>
                <p>Already have an account? Please <Link className="underline text-blue-500" to='/login' > Login</Link></p>
            </div>
        </div>


    );
};

export default Register;
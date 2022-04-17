import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login !!</h3>
            <div style={{margin: '20px'}}>
               <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form >
                
                <input type="email" name="" id="" placeholder='Enter your email' />
                <br/>
                <input type="password" name="" id="" placeholder='Enter Password'/>
                <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LogIn;
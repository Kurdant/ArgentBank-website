import React from 'react';
import Header from '../../composants/header/header.js';
import Footer from '../../composants/footer/footer.js';
import Form from '../../composants/form/form.js';
import './sign-in.css'


function SignIn() {
  return (
    <div className="App">
      <body>
        <Header/>
        <Form/>
        <Footer/>
        </body>
    </div>
  );
}


export default SignIn;

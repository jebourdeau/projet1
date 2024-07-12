import React from 'react';
import Form from 'react-bootstrap/Form';
import "./formulaire.css";


const Formulaire = () => {
  return (
    <form>
         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Entrer votre adresse email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Entrer votre commentaire ici</Form.Label>
        <Form.Control as="textarea" placeholder="Ecrivez votre commentaire ici, votre projet, votre demande" />
      </Form.Group>
       <button type="submit">Envoyer</button>
      
    </form>
  );
};

export default Formulaire;
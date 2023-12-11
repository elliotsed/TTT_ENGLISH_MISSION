import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Infos from "./components/Infos";
import Steps from "./components/Steps";
import Formation from "./components/Formation";
import Temoignage from "./components/Temoignage";
import { Icon } from '@iconify/react';

function App() {
  return (

    <>
      <Navbar />
      <Section1 />
      <Infos />
      <Steps />
      <Formation />
      <Temoignage />


      {
        //(Let's Build your Dreams)
      }

      <div className="container-fluid ff2" id="contact">
        <div className="row">
          <div className="mt-5 text-center">
            <h1>LET’S BUILD YOUR DREAMS</h1>
            <p className="mt-3">Dépassez totalement votre peur de vous exprimer couramment en Anglais</p>
            <p>Contactez-nous maintenant par WhatsApp pour démarrer un cours personnalisé, adapté à vos besoins et à votre disponibilié.</p>

            <div className="d-flex justify-content-center">
              <a className="btn custom-color" href="https://wa.me/+22994605100/?text=Bonjour%20!%20Je%20suis%20intéressé%20par%20vos%20formations.">
                <Icon icon="logos:whatsapp-icon" width={30} /> Par Whatsapp
              </a>
              <a className="btn custom-color" href="mailto:tttmission@gmail.com">
                <Icon icon="clarity:email-solid" width={30} className='me-2' /> Par E-mail
              </a>
            </div>
          </div>
        </div>


      </div>

      <hr className="my-0" />


      {
        //footer
      }
      <footer class="py-2 custom-footer">
        <p class="text-center mt-3 text-white">Copyright &copy;
          2023 - Training That Transform <br />Tous Droits Réservés</p>
      </footer>
    </>
  );
}

export default App;

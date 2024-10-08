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
      <Temoignage />
      <Steps />
      <Formation />


      {
        //(Let's Build your Dreams)
      }

      <div className="container-fluid ff2" id="contact">
        <div className="row">
          <div className="mt-5 text-center">
            <h2 className="text-white">LET’S BUILD YOUR DREAMS</h2>
            <p className="custom-size mt-3"><Icon icon="ion:location-sharp" color="white" width={35}/> Akassato, Goudron Kerekou, Rue de La Boulangerie Main D'or</p>
            <p className="custom-size mt-3"><Icon icon="clarity:email-solid" color="white" width={35}/> tttmission@gmail.com</p>
            <p className="custom-size mt-3"><Icon icon="material-symbols:call" color="white" width={35}/> +229 94605100</p>

            <div className="d-flex justify-content-center">
              <a className="btn custom-color" href="https://wa.me/+22994605100/?text=Bonjour%20!%20Je%20suis%20intéressé%20par%20vos%20formations.">
                <Icon icon="logos:whatsapp-icon" width={30} /> Whatsapp
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
          2023 - Trainings That Transform - English Mission <br />Tous Droits Réservés</p>
      </footer>
    </>
  );
}

export default App;

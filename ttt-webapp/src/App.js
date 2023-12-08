import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Icon } from '@iconify/react';
import logo from "./images/logottt1.png";
import mission from "./images/mission1.jpg";
import step from "./images/steps.svg";
import training1 from "./images/sepfa.jpg";
import training2 from "./images/40days1.png";
import training3 from "./images/presentiel.png";


function App() {
  return (



    //Barre de Navigation

    <>
      {
        //Barre de Navigation
      }
      <nav class="navbar navbar-expand-sm custom-nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="LOGO TTT ENGLISH MISSION"
              width={200}
            />
          </a>
          <div className="d-flex mx-auto">
            <h3 className="navbar-text">
              Fuel your passion
            </h3>
          </div>
        </div>
      </nav>

      {
        //Section1(Le meilleur choix)
      }
      <div className="container-fluid ff">
        <div className="row">
          <div className="mt-5">
            <div className="d-flex justify-content-center">
              <h1>TRAINING THAT TRANSFORM</h1>
            </div>

            <div className="d-flex justify-content-center">
              <p>Vous apprendrez la manière la plus simple et la plus facile d'apprendre l'anglais <br /> grâce à TTT ENGLISH MISSION</p>
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn custom-color text-white">Inscription</button>
            </div>
          </div>
        </div>
      </div>

      {
        //Section2(Information, mission etc...)
      }
      <div className="container-fluid">
        <div className="row">
          <div className="mt-5">
            <h2>Découvrez ce que nous faisons avec passion
              tous les jours et tous les mois de l'année</h2>
          </div>

          <div className="col-lg-6 mt-4">
            <h2>Notre Mission</h2>
            <p className="mt-2">Nous aimons recevoir, aider avec grande joie
              et propulser à travers des programmes extraordinaires
              et méthodes hors du commun tous les professionnels
              et étudiants qui ont la flamme brûlante d’apprendre
              l’Anglais plus facilement, de comprendre plus rapidement,
              de maîtriser plus globalement et d’accélérer plus
              radicalement leur niveau en Anglais.
            </p>
            <h2>Pourquoi nous rejoindre dès aujourd'hui?</h2>
            <p className="mt-2">Pour commencer immédiatement à accélérer et transformer votre expression orale,
              vocabulaire, écoute, compréhension orale et écrite et anglais parlé depuis chez vous ou votre lieu de travail,
              avec un suivi quotidien et personnalisé de coachs/instructeurs personnels.
            </p>
            <Icon icon="emojione:speaking-head" className="me-2" width={50} />
            <Icon icon="uil:assistive-listening-systems" color="gray" className="me-2" width={50} />
            <Icon icon="emojione-monotone:writing-hand" color="gray" className="me-2" width={50} />
            <Icon icon="fluent-emoji-high-contrast:teacher" color="gray" width={50} />

          </div>
          <div className="col-lg-6 mt-4">
            <img
              src={mission}
              alt="Un homme allant vers son objectif"
              width="100%"
            />
          </div>
        </div>
      </div>
      <hr />

      {
        //Section3(Comment ça marche)
      }

      <div className="container-fluid">
        <div className="row">
          <div className="mt-5">
            <h2>Comment ça marche?</h2>
          </div>

          <div className="col-lg-6 mt-5">
            <img
              src={step}
              alt="Homme regardeant la marche à suivre"
              width="500"
            />
          </div>

          <div className="col-lg-6 mt-5">
            <div className="row">
              <div className="col-lg-6 mt-3">
                <div class="card custom-card h-100 position-relative">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    1
                  </span>

                  <div class="card-body">
                    <h5>S'inscrire</h5>
                    <p class="card-text">Vous devez d’abord
                      vous inscrire. Vous
                      pouvez le faire
                      en cliquant sur le
                      bouton s’inscrire plus
                      haut. Vous serez rediridé vers un formulaire
                      que vous remplirez</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-3">
                <div class="card custom-card h-100 position-relative">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    2
                  </span>
                  <div class="card-body">
                    <h5>Choix de la formation</h5>
                    <p class="card-text">Choisissez la formation
                      que vous souhaitez
                      suivre.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-3">
                <div class="card custom-card h-100 position-relative">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                  </span>
                  <div class="card-body">
                    <h5>Choix des jours et horaires de cours</h5>
                    <p class="card-text">La prochaine étape
                      sera de choisir vos
                      jours et horaires de
                      cours selon votre
                      disponibilité.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-3">
                <div class="card custom-card h-100 position-relative">
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    4
                  </span>
                  <div class="card-body">
                    <h5>Paiement</h5>
                    <p class="card-text">Pour finir vous devrez
                      valider votre inscription
                      en payant les frais de
                      formation.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <hr />

      {
        //Section4(Découvrez nos formations)
      }

      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center mt-5">
            <h2>Découvrez nos offres de formation</h2>
          </div>

          <div className="col-lg-4 mt-3">
            <div class="card">
              <img src={training1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">DIRECT PRACTICAL SPOKEN ENGLISH PROGRAM FOR ADULTS</h5>
                <p class="card-text">Saisissez l'opportunité d'être formé ce mois pour vous exprimer couramment en anglais avec le programme d'accélération TES.DE.PRO</p>
                <a href="#" class="btn btn-primary">Commencer</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-3">
            <div class="card">
              <img src={training2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">40 DAYS ENGLISH LISTENING ACCELERATION PROGRAM</h5>
                <p class="card-text">Débloquez et améliorez votre écoute, expression orale et écrite dans différents accents de l'Anglais en 21 à 40 jours grâce à ce programme merveilleux et extraordinaire.</p>
                <a href="#" class="btn btn-primary">Commencer</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-3">
            <div class="card">
              <img src={training3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">THE PRESENTIAL CLASS IN THE CENTERS</h5>
                <p class="card-text">Venez directement dans nos locaux et suivez nos cours en présentiel</p>
                <a href="#" class="btn btn-primary">Commencer</a>
              </div>
            </div>
          </div>

        </div>
      </div>


    </>






  );
}

export default App;

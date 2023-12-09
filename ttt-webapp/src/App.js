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
import video1 from "./videos/TestimonialAD.mp4";
import video2 from "./videos/TestimonialMarina.mp4";
import video3 from "./videos/testimonyRomain.mp4";
import contactUs from "./images/contactus.svg";


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
          <div className="mt-4 text-center">
            <div className="d-flex justify-content-center">
              <h1>TRAINING THAT TRANSFORM</h1>

            </div>
            <div className="d-flex justify-content-center">
              <p>Vous apprendrez la manière la plus simple et la plus facile d'apprendre l'anglais grâce à TTT ENGLISH MISSION</p>

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
            <h2 className="text-center text-md-start">Découvrez ce que nous faisons avec passion
              tous les jours et tous les mois de l'année</h2>
          </div>

          <div className="col-lg-6 col-md-6 mt-4 d-md-none d-sm-block">
            <img
              src={mission}
              alt="Un homme allant vers son objectif"
              width="100%"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 col-md-6 mt-4">
            <h2 className="text-center text-md-start">Notre Mission</h2>
            <p className="mt-2">Nous aimons recevoir, aider avec grande joie
              et propulser à travers des programmes extraordinaires
              et méthodes hors du commun tous les professionnels
              et étudiants qui ont la flamme brûlante d’apprendre
              l’Anglais plus facilement, de comprendre plus rapidement,
              de maîtriser plus globalement et d’accélérer plus
              radicalement leur niveau en Anglais.
            </p>
            <div className="d-md-none d-lg-block">
              <h2 className="text-center text-md-start">Pourquoi nous rejoindre dès aujourd'hui?</h2>
              <p className="mt-2">Pour commencer immédiatement à accélérer et transformer votre expression orale,
                vocabulaire, écoute, compréhension orale et écrite et anglais parlé depuis chez vous ou votre lieu de travail,
                avec un suivi quotidien et personnalisé de coachs/instructeurs personnels.
              </p>
              <div className="d-flex justify-content-center">
                <Icon icon="emojione:speaking-head" className="me-2" width={50} />
                <Icon icon="uil:assistive-listening-systems" color="gray" className="me-2" width={50} />
                <Icon icon="emojione-monotone:writing-hand" color="gray" className="me-2" width={50} />
                <Icon icon="fluent-emoji-high-contrast:teacher" color="gray" width={50} />

              </div>

            </div>

          </div>
          <div className="col-lg-6 col-md-6 mt-4 d-none d-md-block">
            <img
              src={mission}
              alt="Un homme allant vers son objectif"
              width="100%"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row d-none d-md-block d-lg-none mt-4">
          <div className="text-center">
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

        </div>
      </div>
      <hr className="my-5" />

      {
        //Section3(Comment ça marche)
      }

      <div className="container-fluid">
        <div className="row">
          <h2 className="text-center text-md-start">Comment ça marche?</h2>

          <div className="col-lg-6 col-md-6 mt-5">
            <img
              src={step}
              alt="Homme regardeant la marche à suivre"
              width="500"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 col-md-6 mt-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 mt-3">
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

              <div className="col-lg-6 col-md-6 mt-3">
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

              <div className="col-lg-6 col-md-6 mt-3">
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

              <div className="col-lg-6 col-md-6 mt-3">
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
      <hr className="my-5" />

      {
        //Section4(Découvrez nos formations)
      }

      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center">
            <h2 className="text-center text-md-start">Découvrez nos offres de formation</h2>
          </div>

          <div className="col-lg-4 col-md-4 mt-3">
            <div class="card h-100">
              <img src={training1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Direct Practical Spoken English Program For Adults</h5>
                <p class="card-text">Saisissez l'opportunité d'être formé ce mois pour vous exprimer couramment en anglais avec le programme d'accélération TES.DE.PRO</p>
                <a href="#" class="btn btn-primary">Commencer</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 mt-3">
            <div class="card h-100">
              <img src={training2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">40 Days English Listening Acceleration Program</h5>
                <p class="card-text">Débloquez et améliorez votre écoute, expression orale et écrite dans différents accents de l'Anglais en 21 à 40 jours grâce à ce programme merveilleux et extraordinaire.</p>
                <a href="#" class="btn btn-primary">Commencer</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 mt-3">
            <div class="card h-100">
              <img src={training3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">The Presential Class In The Centers</h5>
                <p class="card-text">Venez directement dans nos locaux et suivez nos cours en présentiel</p>
                <a href="#" class="btn btn-primary">Commencer</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <hr className="my-5" />

      {
        //Section5(Témoignages)
      }

      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-center">
            <h2 className="text-center text-md-start">Qu'ont-ils pensé de nos formations?</h2>
          </div>

          <div className="col-lg-6 col-md-6 mt-3">
            <div class="card custom-card h-100">
              <div class="card-body">
                <p class="card-text">You made a lot of change in our speech, in our listening. We changed our way to think too. Thanks to you, today I'm speaking. The first day we started our training it was very difficult for me to even say 'Good morning' to someone.
                  But I can read and sometimes understand when African people speak. But it was very hard for me to express myself. But today I'm thankful that today I can even speak and listen to and understand audios and videos... This is a proof that you changed everything in our English Language Learning. Thank you.</p>
              </div>
              <hr />
              <p className="text-center">Mr. Djodi Bachirou, Secondary School Teacher, Calavi, Benin, +229 69460023</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 mt-3">
            <div class="card custom-card h-100">
              <div class="card-body">
                <p class="card-text">I just want to talk a little bit about what I'm experiencing with your program. I really like it and I can say that before I started this program with you I couldn't speak English with someone. I couldn't make 2 or 3 sentences correctly.
                  But right now I can say that yes, I made great progress about that and I'm still improving of course...So, I just want to say thank you for this opportunity that you gave us to speak English and be very very smart in our listening.</p>
              </div>
              <hr />
              <p className="text-center">Mr. Moïse Djebou, Computer Engineer, Cotonou, Benin, +229 62439570</p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <h2 className="text-center d-md-none d-lg-none mt-4">Plus en vidéo </h2>
          <div className="col-lg-4 col-md-4 mt-3">
            <div className="vid">
              <video width="100%" height={200} controls>
                <source src={video1} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 mt-3">
            <div className="vid">
              <video width="100%" height={200} controls>
                <source src={video2} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 mt-3">
            <div className="vid">
              <video width="100%" height={200} controls>
                <source src={video3} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {
        //Section5(Let's Build your Dreams)
      }

      <div className="container-fluid ff2">
        <div className="row">
          <div className="mt-5 text-center">
            <h1>LET’S BUILD YOUR DREAMS</h1>
            <p className="mt-3">Dépassez totalement votre peur de vous exprimer couramment en Anglais</p>
            <p>Contactez-nous maintenant par WhatsApp pour démarrer un cours personnalisé, adapté à vos besoins et à votre disponibilié.</p>

            <div className="d-flex justify-content-center">
              <a className="btn custom-color">
                <Icon icon="logos:whatsapp-icon" width={30} /> Let's go
              </a>
            </div>
          </div>
        </div>


      </div>

      <hr className="my-0" />


      {
        //footer
      }
      <footer class="py-2 custom-card">
        <p class="text-center mt-3 text-white">Copyright &copy;
          2023 - Training That Transform <br />Tous Droits Réservés</p>
      </footer>





    </>






  );
}

export default App;

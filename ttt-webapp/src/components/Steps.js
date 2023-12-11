import React from 'react';
import step from "../images/steps.svg";


function Steps() {
    return (
        <>
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
                                            bouton 'Inscription' plus
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
        </>
    )
}

export default Steps;
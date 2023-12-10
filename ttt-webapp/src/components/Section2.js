import React from 'react';
import mission from "../images/mission1.jpg";
import { Icon } from '@iconify/react';


function Section2() {
    return (
        <>
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
        </>
    )
}

export default Section2;
import React from 'react';
import graphic from "../images/graphic.png";
import { Icon } from '@iconify/react';


function Infos() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-6 col-md-6 mt-4 d-md-none d-sm-block">
                        <img
                            src={graphic}
                            alt="flyers ttt english mission"
                            width="100%"
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-lg-6 col-md-6 mt-4">
                        <h2 className="text-center text-md-start">Notre Mission</h2>
                        <p className="mt-2 text-md-start text-center">Aider des milliers de professionnels et d'étudiants comme vous à dépasser totalement leur peur de
                            s'exprimer couramment en Anglais.
                        </p>

                        <h2 className="text-center text-md-start">Pourquoi nous rejoindre dès aujourd'hui?</h2>
                        <p className="mt-2 text-md-start text-center">Pour commencer immédiatement à accélérer et transformer votre expression orale,
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
                    <div className="col-lg-6 col-md-6 mt-4 d-none d-md-block">
                        <img
                            src={graphic}
                            alt="flyers ttt english mission"
                            width="100%"
                            className="img-fluid"
                        />
                    </div>
                </div>

            </div>
            <hr className="my-5" />
        </>
    )
}

export default Infos;
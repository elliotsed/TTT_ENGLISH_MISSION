import React from 'react';
import video1 from "../videos/TestimonialAD.mp4";
import video2 from "../videos/TestimonialMarina.mp4";
import video3 from "../videos/testimonyRomain.mp4";
import serge from "../images/mrSerge.jpeg";


function Temoignage() {
    return (
        <div className="container-fluid" id='temoignages'>
            <div className="row">
                <div className="d-flex justify-content-center">
                    <h2 className="text-center">Lisez quelques témoignages de ceux qui y sont déjà arrivés!</h2>
                </div>

                <div className="col-lg-6 col-md-12 mt-2">
                    <div class="card custom-footer">
                        <div class="row g-0">
                            <div class="col-sm-4 col-lg-4">
                                <img src={serge} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-sm-8 col-lg-8">
                                <div class="card-body">
                                    <p class="card-text">TES.DE.PRO is a good training which is designed to help us learn English easily and
                                        to really improve our fluency. One thing I really appreciate is for this online program we have a class, a small group of four or five learners. This allows us to have enough time to express ourselves, to speak and to really practice. During our session, our coach takes note and correct our mistakes. The Coach’s availability and commitment are an important and most positive aspect of this program. The training fees are affordable.
                                        Our coach is just exceptional, committed, and available. He is patient, he tries to understand and takes our needs into account. We are very fortunate to have the incredible opportunity to work with Khorem as our coach.
                                        Thank you for your support and your guidance during our training, your commitment to getting great results is just incredible.</p>
                                    <hr />
                                    <p className="text-center">Mr. Serge Londji, NGO Project Supervisor, Cotonou, Benin,
                                        +229 64171420</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <div class="card custom-footer mt-2">
                        <div class="card-body">
                            <p class="card-text">You made a lot of change in our speech, in our listening. We changed our way to think too. Thanks to you, today I'm speaking. The first day we started our training it was very difficult for me to even say 'Good morning' to someone.
                                But I can read and sometimes understand when African people speak. But it was very hard for me to express myself. But today I'm thankful that today I can even speak and listen to and understand audios and videos... This is a proof that you changed everything in our English Language Learning. Thank you.</p>
                            <hr />
                            <p className="text-center">Mr. Djodi Bachirou, Secondary School Teacher, Calavi, Benin, +229 69460023</p>

                        </div>
                    </div>

                    <div class="card custom-footer mt-2">
                        <div class="card-body">
                            <p class="card-text">I just want to talk a little bit about what I'm experiencing with your program. I really like it and I can say that before I started this program with you I couldn't speak English with someone. I couldn't make 2 or 3 sentences correctly.
                                But right now I can say that yes, I made great progress about that and I'm still improving of course...So, I just want to say thank you for this opportunity that you gave us to speak English and be very very smart in our listening.</p>
                            <hr />
                            <p className="text-center">Mr. Moïse Djebou, Computer Engineer, Cotonou, Benin, +229 62439570</p>

                        </div>
                    </div>
                </div>

                
            </div>
            <div className="row mb-5">
                <h2 className="text-center mt-4">Plus de témoignages en vidéo </h2>
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
                <hr className="my-5" />

            </div>

        </div>

    )
}
export default Temoignage;
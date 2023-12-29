import React from 'react';
import video1 from "../videos/TestimonialAD.mp4";
import video2 from "../videos/TestimonialMarina.mp4";
import video3 from "../videos/testimonyRomain.mp4";

function Temoignage() {
    return (
        <div className="container-fluid" id='temoignages'>
            <div className="row">
                <div className="d-flex justify-content-center">
                    <h2 className="text-center">Lisez quelques témoignages de ceux qui y sont déjà arrivés!</h2>
                </div>

                <div className="col-lg-6 col-md-6 mt-3">
                    <div class="card custom-footer h-100">
                        <div class="card-body">
                            <p class="card-text">You made a lot of change in our speech, in our listening. We changed our way to think too. Thanks to you, today I'm speaking. The first day we started our training it was very difficult for me to even say 'Good morning' to someone.
                                But I can read and sometimes understand when African people speak. But it was very hard for me to express myself. But today I'm thankful that today I can even speak and listen to and understand audios and videos... This is a proof that you changed everything in our English Language Learning. Thank you.</p>
                        </div>
                        <hr />
                        <p className="text-center">Mr. Djodi Bachirou, Secondary School Teacher, Calavi, Benin, +229 69460023</p>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 mt-3">
                    <div class="card custom-footer h-100">
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
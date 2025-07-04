import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="ftco-about ftco-section ftco-no-pt ftco-no-pb" id="about-section">
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-xs-6">
            <div className="py-md-2">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate bg-white rounded">
                  <h2 className="mb-4 text-center" style={{fontSize: '34px', textTransform: 'capitalize'}}>About Me</h2>
                  <p className="text-center"><b className="text-capitalize">"Change is life." that is why i always say welcome to change.</b></p>
                  <p>
                    Passionate, determined, hard-working, self-motivated and restless are the words that describe me best.
                    I am software engineer and developer and have 8 years of experience in Web and desktop based applications.
                  </p>
                  <p>
                    Technical Skills:<br />
                    ✔ Python Django, Ruby on Rails, Core PHP and Laravel framework<br />
                    ✔ ReactJs, GraphQL, Apollo Client, AngularJs, Vue.js ,Handlebars.js ,HTML5 and Canvas API,CSS3, Twitter BootStrap.
                  </p>
                  <p>
                    Basic level skills:<br />
                    ✔ React Native<br />
                    ✔ Java Dropwizard, Maven<br />
                    ✔ Android (Very basic level)<br />
                  </p>

                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex"><span>Name:</span> <span>Zeeshan Ahmad</span></li>
                    <li className="d-flex"><span>Email:</span> <span>asif.zshan@gmail.com</span></li>
                    <li className="d-flex"><span>Phone: </span> <span>+44 7774 261608</span></li>
                  </ul>
                </div>
                <div className="col-md-12 bg-white rounded mt-4 p-4">
                  <div className="my-interest d-lg-flex w-100">
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-listening"></span>
                      </div>
                      <div className="text">Music</div>
                    </div>
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-suitcases"></span>
                      </div>
                      <div className="text">Travel</div>
                    </div>
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-video-player"></span>
                      </div>
                      <div className="text">Movie</div>
                    </div>
                    <div className="interest-wrap d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="flaticon-football"></span>
                      </div>
                      <div className="text">Sports</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

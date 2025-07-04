import React from 'react';

const CounterSection: React.FC = () => {
  return (
    <section className="ftco-counter img bg-light" id="section-counter">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-suitcase"></span>
              </div>
              <div className="text">
                <strong className="number" data-number="70">0</strong>
                <span>Project Complete</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-loyalty"></span>
              </div>
              <div className="text">
                <strong className="number" data-number="35">0</strong>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 justify-content-center counter-wrap ftco-animate">
            <div className="block-18 d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="flaticon-calendar"></span>
              </div>
              <div className="text">
                <strong className="number" data-number="9">0</strong>
                <span>Years experienced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;

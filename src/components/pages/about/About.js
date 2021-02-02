import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            Able. I am able to handle multiple tasks on a daily basis.
            Creative. I use a creative approach to problem solve.
            Dependable. I am a dependable person who is great at time management.
            Energetic. I am always energetic and eager to learn new skills.

          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Ahmedabad
              </p>
              <p>
                <strong>Email:</strong> anujsharmahack@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 8923888789
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Hindi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

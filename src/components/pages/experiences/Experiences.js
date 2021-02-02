import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL EXPERIENCE AND PROJECT DETAILS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jan
                <strong>2019</strong> -
                <strong>Present</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                <strong>Palmistry:</strong>
                </h6>
                <h6 className="no-pad mt-bottom">
                <strong>Technology: Python, Django, JQuery:</strong>
                </h6>
                <p>
                This is a webservice which allows user to mark their palms and predicts the result based on the conditions and ratios of palm lines based on the equations given by the client. The admin can also add the equation to predict the results. I worked on database setup and manipulations, manipulating custom equation flows and state management between marking different lines and overall marking flows.
                <br/><strong>Team Size: 5:</strong><br/>
                <strong>Responsibilities:</strong><br/>
                Understanding the requirements of Project.
                Responsible for writing core logic.
                Responsible for creating Database.
                Involved in Implementing change requests given by client.
                Involved in unit and system testing.
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Voice Chat</strong>
                </h6>
                <h6 className="no-pad mt-bottom">
                  <strong>Technology: Python, Django, JQuery</strong>
                </h6>
                <p>
                This is a web application to provide a voice chat functionality. Also, users can create groups, send text by using it.<br />
                <strong>Team Size: 5</strong>
                <br /><strong>Responsibilities:</strong><br />
                Understanding the requirements of Project.
                Responsible for writing core logic.
                Responsible for creating Database.
                Involved in Implementing change requests given by client.
                Involved in unit and system testing.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

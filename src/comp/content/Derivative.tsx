import React from "react";

function Derivative() {
  return (
    <div className="card elevation-5">
      <div className="card-header">
        <div className="card-title">
          <h1>Derivative</h1>
        </div>
        <div className="card-tools">
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="maximize"
          >
            <i className="fas fa-expand"></i>
          </button>
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="collapse"
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <div className="card-body"></div>
      <div className="card-footer"></div>
    </div>
  );
}

export default Derivative;

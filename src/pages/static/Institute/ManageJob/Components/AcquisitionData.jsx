import React from "react";

function AcquisitionData() {
  return (
    <div>
      <div>
        <div className="row p-3">
          <div className="col border text-center p-3   " style={{backgroundColor:"rgb(244 255 247)", }}>
            <h3 className="font-weight-bold text-success mb-1 mt-2">20</h3>
            <h6 className="font-weight-bold mb-2">Total Candidate</h6>
          </div>
          <div className="col border text-center p-3   " style={{backgroundColor:""}}>
            <h3 className="font-weight-bold text-success mb-1 mt-2">10</h3>
            <h6 className="font-weight-bold mb-2">Review</h6>
          </div>
          <div className="col border text-center p-3   " style={{backgroundColor:"rgb(255 255 246)"}}>
            <h3 className="font-weight-bold text-warning mb-1 mt-2">6</h3>
            <h6 className="font-weight-bold mb-2">Interview</h6>
          </div>
          <div className="col border text-center p-3   " style={{backgroundColor:""}}>
            <h3 className="font-weight-bold text-success mb-1 mt-2">3</h3>
            <h6 className="font-weight-bold mb-2">Offer</h6>
          </div>
          <div className="col border text-center p-3   " style={{backgroundColor:"rgb(239 255 255)"}}>
            <h3 className="font-weight-bold text-success mb-1 mt-2">1</h3>
            <h6 className="font-weight-bold mb-2">Hired</h6>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default AcquisitionData;

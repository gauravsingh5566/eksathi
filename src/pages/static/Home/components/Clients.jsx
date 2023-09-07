import React from "react";

const Clients = () => {
  return (
    <section className="client-logo-area py-5 bg-radial-gradient-gray">
      <div className="container">
        <div className="client-logo-box">
          <h2 className="text-center">
            Many of organizations started using EkSathi
          </h2>
          <div className="row justify-content-center text-center pt-50px">
            <a href="https://safeinschool.in/" target="_blank" className="col-lg-4 responsive-column-half">
              <div className="client-logo-item mb-30px bg-white shadow p-3 py-4 rounded hover-y">
                <img src="images/client/logo-1.png" alt="Safeinschool" className="w-100" style={{ height: "80px", objectFit: "contain" }} />
              </div>
            </a>
            {/* end col-lg-3 */}
            <a href="https://yuvamanthan.org/" target="_blank" className="col-lg-4 responsive-column-half">
              <div className="client-logo-item mb-30px bg-white shadow p-3 py-4 rounded hover-y">
                <img src="images/client/logo-2.png" alt="Yuvamanthan" className="w-100" style={{ height: "80px", objectFit: "contain" }} />
              </div>
            </a>
          </div>
          {/* end row */}
        </div>
      </div>
    </section>
  );
};

export default Clients;

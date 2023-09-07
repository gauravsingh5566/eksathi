function Header({ color , profile ,profileData }) {
    return (
      <>
        <div style={{ backgroundColor: color }}>
          <div className="container">
            <div className="row border-bottom">
              <div className="p-5" style={{ marginLeft: "-15px" }}>
                <div className="mb-3 ">
                  <h1 className="fs-60 font-weight-bold text-white">
                    {profile?.name}
                  </h1>
                </div>
                <div className="d-flex">
                  <i class="bi bi-envelope-at-fill text-white">
                    &nbsp; {profile?.email}
                  </i>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <i class="bi bi-telephone-fill text-white">
                    &nbsp; {profileData?.phone}
                  </i>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <i class="bi bi-geo-alt-fill text-white">&nbsp;{profile?.presentWork?.location}</i>{" "}
                  &nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Header
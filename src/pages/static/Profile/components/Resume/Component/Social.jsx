function Social({URL}) {
    return (
      <>
        <div className="mb-2">
          {" "}
          <div className="p-3" style={{ width: "100%" }}>
            <h4 className="font-weight-bold">Social Links</h4>
            <div className="">
              <div className="mb-2">
                <p>LinkedIn</p>
                <h6 style={{ wordWrap: "break-word" }}>
                  {URL}
                </h6>
              </div>
              <div className="mb-2">
                <p>YouTube</p>
                <h6 style={{ wordWrap: "break-word" }}>
                 {URL}
                </h6>
              </div>
              <div className="mb-2">
                <p>GitHub</p>
                <h6 style={{ wordWrap: "break-word" }}> {URL}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="border"></div>
      </>
    );
  }
  export default Social
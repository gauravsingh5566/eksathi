import React from 'react'

const RarestBadges = () => {
  return (
    <>
      <div className="user-panel mb-30px">
                <div className="bg-gray p-3 rounded-rounded mb-3">
                    <h3 className="fs-17">
                        Rarest badges <span>(1,328)</span>
                    </h3>
                </div>
                <div className="badge-top-list">
                    <div className="badge-top badge-top-gold">
                        <div className="badge-top-name">
                            <span className="fs-20 lh-18 fw-regular d-block">
                                91
                            </span>
                            <strong>Gold</strong>
                        </div>
                        {/* end badge-top-name */}
                        <div className="badge-top-details flex-grow-1">
                            <div className="vertical-list">
                                <div className="item tags">
                                    <a
                                        href="#"
                                        className="badge badge-md badge-gray"
                                    >
                                        <span className="ball gold" /> git
                                    </a>
                                    <span className="fs-12 pl-1 font-italic">
                                        Jul 29 '10
                                    </span>
                                </div>
                                {/* end item */}
                                <div className="item tags">
                                    <a
                                        href="#"
                                        className="badge badge-md badge-gray"
                                    >
                                        <span className="ball gold" /> c#
                                    </a>
                                    <span className="fs-12 pl-1 font-italic">
                                        Feb 28 '11
                                    </span>
                                </div>
                                {/* end item */}
                                <div className="item tags border-bottom-0">
                                    <a
                                        href="#"
                                        className="badge badge-md badge-dark"
                                    >
                                        <span className="ball gold" /> Legendary
                                    </a>
                                    <span className="fs-12 pl-1 font-italic">
                                        Jan 11 '12
                                    </span>
                                </div>
                                {/* end item */}
                            </div>
                            {/* end vertical-list */}
                        </div>
                        {/* end badge-top-details */}
                    </div>
                    {/* end badge-top */}
                    <div className="badge-top badge-top-silver">
                        <div className="badge-top-name text-gray">
                            <span className="fs-20 lh-18 fw-regular d-block">
                                560
                            </span>
                            <strong>silver</strong>
                        </div>
                        {/* end badge-top-name */}
                        <div className="badge-top-details flex-grow-1">
                            <div className="vertical-list">
                                <div className="item tags">
                                    <a
                                        href="#"
                                        className="badge badge-md badge-gray"
                                    >
                                        <span className="ball silver" /> stl
                                    </a>
                                    <span className="fs-12 pl-1 font-italic">
                                        Dec 13 '12
                                    </span>
                                </div>
                                {/* end item */}
                                <div className="item tags">
                                    <a
                                        href="#"
                                        className="badge badge-md badge-gray"
                                    >
                                        <span className="ball silver" /> pointers
                                    </a>
                                    <span className="fs-12 pl-1 font-italic">
                                        May 5 '12
                                    </span>
                                </div>
                                {/* end item */}
                                <div className="item tags border-bottom-0">
                                    <a
                                        href="#"
                                        className="badge badge-md badge-dark"
                                    >
                                        <span className="ball silver" /> Epic
                                    </a>
                                    <span className="fs-12 pl-1 font-italic">
                                        Mar 24 '10
                                    </span>
                                </div>
                                {/* end item */}
                            </div>
                            {/* end vertical-list */}
                        </div>
                        {/* end badge-top-details */}
                    </div>
                    {/* end badge-top */}
                    <div className="badge-top badge-top-bronze">
                        <div className="badge-top-name">
                            <span className="fs-20 lh-18 fw-regular d-block">
                                632
                            </span>
                            <strong>bronze</strong>
                        </div>
                        {/* end badge-top-name */}
                        <div className="badge-top-details flex-grow-1">
                            <div className="vertical-list">
                                <div className="item tags">
                                    <a
                                        href="#"
                                        className="badge badge-md badge-gray"
                                    >
                                        <span className="ball" /> standards
                                    </a>
                                    <span className="fs-12 pl-1 font-italic">
                                        Jun 10 '12
                                    </span>
                                </div>
                                {/* end item */}
                                <div className="item tags">
                                    <a
                                        href="#"
                                        className="badge badge-md badge-gray"
                                    >
                                        <span className="ball" /> branch
                                    </a>
                                    <span className="fs-12 pl-1 font-italic">
                                        Apr 3 '13
                                    </span>
                                </div>
                                {/* end item */}
                                <div className="item tags border-bottom-0">
                                    <a
                                        href="#"
                                        className="badge badge-md badge-gray"
                                    >
                                        <span className="ball" /> namespaces
                                    </a>
                                    <span className="fs-12 pl-1 font-italic">
                                        Jul 7 '12
                                    </span>
                                </div>
                                {/* end item */}
                            </div>
                            {/* end vertical-list */}
                        </div>
                        {/* end badge-top-details */}
                    </div>
                    {/* end badge-top */}
                    <div className="view-more pt-3 px-3">
                        <a href="#" className="btn-text fs-15">
                            View all badges{" "}
                            <i className="la la-arrow-right icon ml-1" />
                        </a>
                    </div>
                </div>
                {/* end vertical-list */}
            </div>
    </>
  )
}

export default RarestBadges;
import React from 'react'

const TrendingTagsWidget = () => {
    return (
        <div className="card card-item">
            <div className="card-body">
                <h3 className="fs-17 pb-3">Trending Tags</h3>
                <div className="divider">
                    <span />
                </div>
                <div className="tags pt-4">
                    <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                            analytics
                        </a>
                        <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                        </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                            computer
                        </a>
                        <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                        </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                            python
                        </a>
                        <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                        </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                            javascript
                        </a>
                        <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                        </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                            c#
                        </a>
                        <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                        </span>
                    </div>
                    {/* end tag-item */}
                    <div className="collapse" id="showMoreTags">
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                                java
                            </a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>
                        {/* end tag-item */}
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                                swift
                            </a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>
                        {/* end tag-item */}
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                                html
                            </a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>
                        {/* end tag-item */}
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                                angular
                            </a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>
                        {/* end tag-item */}
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                                flutter
                            </a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>
                        {/* end tag-item */}
                        <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                                machine-language
                            </a>
                            <span className="item-multiplier fs-13">
                                <span>×</span>
                                <span>32924</span>
                            </span>
                        </div>
                        {/* end tag-item */}
                    </div>
                    {/* end collapse */}
                    <a
                        className="collapse-btn fs-13"
                        data-toggle="collapse"
                        href="#showMoreTags"
                        role="button"
                        aria-expanded="false"
                        aria-controls="showMoreTags"
                    >
                        <span className="collapse-btn-hide">
                            Show more
                            <i className="la la-angle-down ml-1 fs-11" />
                        </span>
                        <span className="collapse-btn-show">
                            Show less
                            <i className="la la-angle-up ml-1 fs-11" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TrendingTagsWidget
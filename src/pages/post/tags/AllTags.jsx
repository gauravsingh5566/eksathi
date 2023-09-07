import React from "react";

const AllTags = () => {
  return (
    <div>
      {/* ================================
   START QUESTION AREA
================================= */}
      <section className="question-area pt-40px pb-40px">
        <div className="container">
          <div className="filters pb-3">
            <div className="d-flex flex-wrap align-items-center justify-content-between pb-4">
              <div className="pr-3">
                <h3 className="fs-22 fw-medium">Tags</h3>
                <p className="fs-15 lh-22 my-2">
                  A tag is a keyword or label that categorizes your question
                  with other, similar questions.
                  <br /> Using the right tags makes it easier for others to find
                  and answer your question.
                </p>
              </div>
              <a
                href="ask-question.html"
                className="btn theme-btn theme-btn-sm"
              >
                Ask Question
              </a>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <form method="post" className="mr-3 w-25">
                <div className="form-group">
                  <input
                    className="form-control form--control form-control-sm h-auto lh-34"
                    type="text"
                    name="search"
                    placeholder="Filter by tag name"
                  />
                  <button className="form-btn" type="button">
                    <i className="la la-search" />
                  </button>
                </div>
              </form>
              <div
                className="btn-group btn--group mb-3"
                role="group"
                aria-label="Filter button group"
              >
                <a href="#" className="btn active">
                  All
                </a>
                <a href="#" className="btn">
                  Popular
                </a>
                <a href="#" className="btn">
                  Name
                </a>
                <a href="#" className="btn">
                  New
                </a>
              </div>
            </div>
          </div>
          {/* end filters */}
          <div className="row">
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      javascript
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    For questions regarding programming in ECMAScript
                    (JavaScript/JS) and its various dialects/implementations
                    (excluding ActionScript). Please include all relevant tags
                    on your question; e.g., [node.js],…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      java
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a high-level programming language. Use this tag when you're
                    having problems using or understanding the language itself.
                    This tag is rarely used alone and is most often used in
                    conjunction with…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      python
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a multi-paradigm, dynamically typed, multipurpose
                    programming language. It is designed to be quick to learn,
                    understand, and use, and enforce a clean and uniform syntax.
                    Please note that Pyt…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      c#
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a high level, statically typed, multi-paradigm programming
                    language developed by Microsoft. C# code usually targets
                    Microsoft's .NET family of tools and run-times, which…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      php
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a widely used, high-level, dynamic, object-oriented, and
                    interpreted scripting language primarily designed for
                    server-side web development. Used for questions about the
                    PHP language.
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      android
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    Google's mobile operating system, used for programming or
                    developing digital devices (Smartphones, Tablets,
                    Automobiles, TVs, Wear, Glass, IoT). For topics related to
                    Android, use Android-s…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      html
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    the markup language for creating web pages and other
                    information to be displayed in a web browser. Questions
                    regarding HTML should include a minimal reproducible ex…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      jquery
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a JavaScript library, consider also adding the JavaScript
                    tag. jQuery is a popular cross-browser JavaScript library
                    that facilitates Document Object Model (DOM) traversal,
                    event handling…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      c++
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a general-purpose programming language. It was originally
                    designed as an extension to C and has a similar syntax, but
                    it is now a completely different language. Use this tag for
                    questions about…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      css
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a representation style sheet language used for describing
                    the look and formatting of HTML (HyperText Markup Language),
                    XML (Extensible Markup Language) documents and SV…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      json
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a representation style sheet language used for describing
                    the look and formatting of HTML (HyperText Markup Language),
                    XML (Extensible Markup Language) documents and SV…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      swift
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a representation style sheet language used for describing
                    the look and formatting of HTML (HyperText Markup Language),
                    XML (Extensible Markup Language) documents and SV…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      objective-c
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a general-purpose programming language. It was originally
                    designed as an extension to C and has a similar syntax, but
                    it is now a completely different language. Use this tag for
                    questions about…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      python-3.x
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a representation style sheet language used for describing
                    the look and formatting of HTML (HyperText Markup Language),
                    XML (Extensible Markup Language) documents and SV…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      django
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a representation style sheet language used for describing
                    the look and formatting of HTML (HyperText Markup Language),
                    XML (Extensible Markup Language) documents and SV…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="card card-item">
                <div className="card-body">
                  <div className="tags pb-1">
                    <a href="#" className="tag-link tag-link-md tag-link-blue">
                      angularjs
                    </a>
                  </div>
                  <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                    a representation style sheet language used for describing
                    the look and formatting of HTML (HyperText Markup Language),
                    XML (Extensible Markup Language) documents and SV…
                  </p>
                  <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                    <p className="pr-1 lh-18">2177849 questions</p>
                    <p className="lh-18">901 asked today, 5319 this week</p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
          </div>
          {/* end row */}
          <div className="pager pt-30px">
            <nav aria-label="Page navigation example">
              <ul className="pagination generic-pagination pr-1">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="la la-arrow-left" />
                    </span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="la la-arrow-right" />
                    </span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            <p className="fs-13 pt-2">Showing 1-20 of 50,577 results</p>
          </div>
        </div>
        {/* end container */}
      </section>
      {/* end question-area */}
      {/* ================================
   END QUESTION AREA
================================= */}
    </div>
  );
};

export default AllTags;

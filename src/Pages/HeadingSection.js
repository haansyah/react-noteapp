import React from "react";
import { Toaster } from "react-hot-toast";

export default function HeadingSection({
  title,
  setTitle,
  body,
  setBody,
  archived,
  setArchive,
  addNoteHandler,
  message,
}) {
  return (
    <div className="container section-heading">
      <div className="d-flex flex-row align-self-stretch">
        <div className="col-12 col-lg-5 form-section pe-3">
          <h3 className="title-form">Add Note</h3>
          <form onSubmit={addNoteHandler}>
            <div className="mb-3 form-group">
              <label htmlFor="title_note" className="form-label label">
                Title *{" "}
                <span className="limit">
                  (Max 50 characters{" "}
                  <span style={{ color: title.length === 50 && "red" }}>
                    ({title.length}/50)
                  </span>
                  )
                </span>
              </label>
              <input
                // required
                placeholder="Write your note"
                type="text"
                className="form-control"
                id="title_note"
                value={title}
                onChange={function (event) {
                  setTitle(event.target.value);
                }}
                maxLength={50}
              />
              {!title && <div className="errorMessage">{message[0]}</div>}
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="body_note" className="form-label label">
                Description *
              </label>
              <input
                type="text"
                placeholder="Write note description"
                className="form-control"
                id="body_note"
                aria-describedby="emailHelp"
                value={body}
                onChange={function (event) {
                  setBody(event.target.value);
                }}
              />
              {!body && <div className="errorMessage">{message[1]}</div>}
            </div>
            <div className="d-flex flex-row">
              <label htmlFor="archivedInput" className="form-label label">
                Add to Archive? <span className="limit">(Optional)</span>
              </label>
              <div className="form-text mt-1 ms-1"></div>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-column col-6 pe-3">
                <input
                  className="form-check-input mt-0 d-none"
                  type="checkbox"
                  name="archivedInput"
                  id="archivedInput"
                  aria-label="Checkbox for following text input"
                  checked={archived}
                  onChange={function (event) {
                    setArchive(event.target.checked);
                  }}
                />
                <label
                  htmlFor="archivedInput"
                  id="finished-label"
                  className="w-100 btn"
                >
                  Yup!
                </label>
              </div>
              <div className="col-6 d-flex">
                <button
                  type="submit"
                  id="btnAdd"
                  className="btn btn-primary w-100 ps-3"
                >
                  Add Note
                </button>
              </div>
            </div>
          </form>
          <Toaster />
        </div>
        <div className="d-none col-md-6 col-lg-7 heading d-lg-flex flex-column ps-3">
          <h1 className="title-2 mb-4">
            <span className="fw-semibold">Dicoding</span> Submission , built a{" "}
            <br />
            <span className="fw-semibold">Notes app</span> with{" "}
            <span className="rjs">React JS</span>
          </h1>
          <div className="d-flex flex-column mb-4 subtitle">
            <h5>Created By</h5>
            <h4>Ari Sutarman</h4>
          </div>
          <div className="d-flex flex-row socials mt-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.facebook.com/arisutarman24/"
            >
              <img src="/icons/ic-fb.svg" alt="" className="social" />
            </a>
            <a
              href="https://github.com/haansyah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/ic-github.svg" alt="" className="social" />
            </a>
            <a
              href="mailto:hansyah242@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/ic-gmail.svg" alt="" className="social" />
            </a>
            <a
              href="https://www.instagram.com/haansyah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/ic-ig.svg" alt="" className="social" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

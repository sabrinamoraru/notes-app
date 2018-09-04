import { initializeEditPage, generateLastEdited } from "./views";
import { updateNote, createNote } from "./notes";

import moment from "moment";

const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const dateElement = document.querySelector("#last-edited");

document.querySelector("#add-note").addEventListener("click", e => {
  const description = document.getElementById("note-body").value;
  const title = document.getElementById("note-title").value;
  const errorWrapper = document.getElementById(
    "create-note-error-wrapper-hidden"
  );

  if (!title) {
    errorWrapper.style.display = "flex";
    errorWrapper.innerHTML = "Please add a title for your note";
    return;
  }

  if (!description) {
    errorWrapper.style.display = "flex";
    errorWrapper.innerHTML = "Please add a description for your note";
    return;
  }

  errorWrapper.style.display = "none";
  errorWrapper.innerHTML = "";

  const noteId = createNote();
  updateNote(noteId, {
    title: document.getElementById("note-title").value
  });
  updateNote(noteId, {
    body: document.getElementById("note-body").value
  });
  location.assign("/index.html");
});

titleElement.addEventListener("input", e => {
  dateElement.textContent = generateLastEdited(moment().valueOf());
});

bodyElement.addEventListener("input", e => {
  dateElement.textContent = generateLastEdited(moment().valueOf());
});

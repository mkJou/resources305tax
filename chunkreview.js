const ratingBar = document.getElementById("rating_bar");
const raintgs = document.getElementsByName("rate");
const feedbackCell = document.getElementById("feedback");
const textReviewCopy = document.getElementById("textReviewCopy");

feedbackCell.onkeyup = function (e) {
  if (e.target.value.length < 9) {
    console.log("jujuj");
  }
  console.log("xd");
};

const calcy = () => {
  let wd = document.getElementById("wd").value;
  let maths = document.getElementById("maths").value;
  let comp = document.getElementById("comp").value;
  let phy = document.getElementById("phy").value;

  let totalGrades =
    parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
  let percentage = (totalGrades / 400) * 100;
  let grade = "";
  if (percentage >= 80) {
    grade = "A+";
  } else if (percentage >= 70) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 50) {
    grade = "C";
  } else if (percentage >= 40) {
    grade = "D";
  } else {
    grade = "F";
  }

  if (grade != "F") {
    document.getElementById(
      "showData"
    ).innerHTML = ` You have scored ${totalGrades} out of 400 having ${percentage.toPrecision(
      4
    )}% <br> Your grade is ${grade} You have passed`;
  } else {
    document.getElementById(
      "showData"
    ).innerHTML = ` You have scored ${totalGrades} out of 400 having ${percentage.toPrecision(
      4
    )}% <br> Your grade is ${grade} You have failed`;
  }
};

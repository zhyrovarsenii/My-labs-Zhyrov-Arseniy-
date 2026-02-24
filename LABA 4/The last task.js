// Додаткове завдання на 5 балів. 
// Програма приймає оцінку студента (від 0 до 100) і виводить відповідну оцінку за шкалою:
// 90-100: "Відмінно"
// 70-89: "Добре"
// 50-69: "Задовільно"
// 0-49: "Не склав"
function getConditionGrade(score) {
  if (score >= 90 && score <= 100) {
    console.log("Відмінно");
  } else if (score >= 70 && score <= 89) {
    console.log("Добре");
  } else if (score >= 50 && score <= 69) {
    console.log("Задовільно");
  } else if (score >= 0 && score <= 49) {
    console.log("Не склав");
  } else {
    console.log("Некоректна оцінка");
  }
}
getConditionGrade(85);
getConditionGrade(45);
getConditionGrade(95);

function getSwitchGrade(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      console.log("Відмінно");
      break;

    case score >= 70 && score <= 89:
      console.log("Добре");
      break;

    case score >= 50 && score <= 69:
      console.log("Задовільно");
      break;

    case score >= 0 && score <= 49:
      console.log("Не склав");
      break;

    default:
      console.log("Некоректна оцінка");
  }
}
getSwitchGrade(85);
getSwitchGrade(45);
getSwitchGrade(95);
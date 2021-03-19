export const checkRemainBudget = (budget, remain) => {
  let alert_class;
  if (budget / 4 > remain) {
    alert_class = "alert alert-danger";
  } else if (budget / 2 > remain) {
    alert_class = "alert alert-warning";
  } else {
    alert_class = "alert alert-success";
  }

  return alert_class;
};

const submitBtn = document.getElementById("submitBtn");

const getInfo = (e) => {
  e.preventDefault();
  let url = `api.openweathermap.org/data/2.5/weather?q=Itahari&appid=8189d939558823e68e2cd55d90b42994`;
};
submitBtn.addEventListener("click", getInfo);

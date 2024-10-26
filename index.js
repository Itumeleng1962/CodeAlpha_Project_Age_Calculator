const calculateAge = () => {
  const date = document.getElementById("dob").value;
  const age = new Date().getFullYear() - new Date(date).getFullYear();
  document.getElementById("age").innerHTML = `Your age is ${age}`;
};

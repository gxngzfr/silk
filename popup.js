if(localStorage.getItem("firstTime") == null){
  alert("This website is in DEMO\n\nIt will wont work for now ;)");
  localStorage.setItem("firstTime", false);
} else {
  console.log("First time popup wont show up because you already visited the site. \n\nTo see it again, clear 'firstTime' from localStorage.");
}

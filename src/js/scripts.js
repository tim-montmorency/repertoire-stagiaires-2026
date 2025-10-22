const app = Vue.createApp({
  data() {
    return {
        selectedCategory: "Tout",
        searchResult: "",
        students: [],
    }
  },
  mounted() {
    fetch('./src/js/students.json')
    .then(response => response.json())
    .then(data => {
    this.students = data;
    })
    .catch(error => {
    console.error('Les données des étudiants ne sont pas disponibles:', error);
    });
}
});

app.mount('#app');

let lastScrollY = window.scrollY;
const header = document.querySelector('header');
const burgerMenu = document.querySelector(".wrapper-burger-menu")

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add('hide-on-scroll');
    app._instance.data.isMenuOpen = false;
  } else {
    header.classList.remove('hide-on-scroll');
  }
  lastScrollY = window.scrollY;
});
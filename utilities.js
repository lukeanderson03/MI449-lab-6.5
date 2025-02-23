let nameList = ['Luke', 'Brock', 'Carter', 'Tucker', 'Maddie', 'Chadwick', 'Otis', 'Charlie', 'Jeff', 'Patricia'];

const randomNumber = () => (Math.floor(Math.random() * 10));

const click = document.getElementById('click');
const names = document.getElementById('names');

click.addEventListener("click", (event) => {
    names.textContent = nameList[randomNumber()];
});

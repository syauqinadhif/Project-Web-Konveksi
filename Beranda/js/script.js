//Toogle Class Active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// Select the navbar element
const navbar = document.querySelector('.navbar');

// Variable to store the last scroll position
let lastScrollTop = 0;

// Variable to store the height of the navbar
const navbarHeight = 75; // Sesuaikan dengan tinggi navbar Anda

// Function to handle the scroll event
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Cek jika Anda sedang menggulir ke bawah
  if (scrollTop > lastScrollTop) {
    // Menggulir ke bawah - sembunyikan navbar
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    // Menggulir ke atas - tampilkan navbar
    navbar.style.top = '0';
  }

  // Simpan posisi scroll saat ini
  lastScrollTop = scrollTop;
}

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', handleScroll);

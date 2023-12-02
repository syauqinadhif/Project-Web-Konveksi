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

var splideOptions = {
  perPage: 2,
  rewind: true,
  width: '56rem',
  // autoWidth: true,
  gap: '2rem'
};

var carousel1 = new Splide('#carousel1', splideOptions);
carousel1.mount();

var carousel2 = new Splide('#carousel2', splideOptions);
carousel2.mount();

var carousel3 = new Splide('#carousel3', splideOptions);
carousel3.mount();

// Update perPage option based on screen width
// function updatePerPage() {
//   if (window.innerWidth < 600) { // Ubah nilai sesuai dengan breakpoint yang Anda inginkan
//     carousel1.options.perPage = 1;
//     carousel2.options.perPage = 1;
//     carousel3.options.perPage = 1;
//   } else {
//     carousel1.options.perPage = 2;
//     carousel2.options.perPage = 2;
//     carousel3.options.perPage = 2;
//   }

//   // Refresh the Splide instance to apply the changes
//   carousel1.refresh();
//   carousel2.refresh();
//   carousel3.refresh();
// }

// Initial update on page load
// updatePerPage();

// Update perPage on window resize
window.addEventListener('resize', updatePerPage);


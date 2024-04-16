let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')
let header = document.querySelector('header')
let overlay = document.querySelector('.overlay')

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   navbar.classList.toggle('active')
   overlay.classList.add('active')
}
window.onscroll = () => {
   menu.classList.remove('bx-x');
   navbar.classList.remove('active')
   overlay.classList.remove('active')
}
window.addEventListener('scroll', () => {
   header.classList.toggle('shadow', window.scrollY > 0);
})
let portfolio = [
   {
      id : 1,
      img : "portfolio1.jpg",
      category : 'web-dev',
      aTag : "https://royallordg.github.io/Scentsational/",
      shadow: "box1"
   },
   {
      id : 2,
      img : "Portfolio2.jpg",
      category : 'web-dev',
      aTag : "https://royallordg.github.io/Joam-Collections/",
      shadow: "box2"
   },
   {
      id : 3,
      img : "Portfolio3.jpg",
      category : 'web-dev',
      aTag : "https://royallordg.github.io/buildingagency/",
      shadow: "box3"
   },
   {
      id : 4,
      img : "Graphics1.jpg",
      category : 'graphics',
      aTag : "https://www.behance.net/gideonamusan",
      shadow: "box4"
   },
   {
      id : 5,
      img : "Graphics2.jpg",
      category : 'graphics',
      aTag : "https://www.behance.net/gideonamusan",
      shadow: "box5"
   },
   {
      id : 6,
      img : "Graphics3.jpg",
      category : 'graphics',
      aTag : "https://www.behance.net/gideonamusan",
      shadow: "box6"
   },
   {
      id : 7,
      img : "Graphics4.jpg",
      category : 'graphics',
      aTag : "https://www.behance.net/gideonamusan",
      shadow: "box7"
   },
   {
      id : 8,
      img : "Graphics5.jpg",
      category : 'graphics',
      aTag : "https://www.behance.net/gideonamusan",
      shadow: "box8"
   },
   {
      id : 9,
      img : "Graphics6.jpg",
      category : 'graphics',
      aTag : "https://www.behance.net/gideonamusan",
      shadow: "box9"
   },
   {
      id : 10,
      img : "Graphics7.jpg",
      category : 'graphics',
      aTag : "https://www.behance.net/gideonamusan",
      shadow: "box1"
   },
   {
    id : 11,
    img : "Graphics8.jpg",
    category : 'graphics',
    aTag : "https://www.behance.net/gideonamusan",
    shadow: "box2"
 },
 {
    id : 12,
    img : "Graphic9.jpg",
    category : 'graphics',
    aTag : "https://www.behance.net/gideonamusan",
    shadow: "box3"
 }
]


let currentCategory = 'all';
let count = 0;
let showSixItems = portfolio.slice(0, 6);
let showTheRest = portfolio.slice(6);
let portfolioContainer = document.querySelector('.portfolio-container');
let loadMoreBtn = document.querySelector('.load-btn');
let portfolioCategory


function setLoadMoreVisibility(items) {
    if (items.length <= 6) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

window.addEventListener('DOMContentLoaded', function () {
    showItem(showSixItems);
    setLoadMoreVisibility(portfolio); 
});

function showItem(menuItem) {
    if (menuItem.length === 0) {
        portfolioContainer.innerHTML = '<h2 style="text-align: center;">HELLO! GIDEON IS YET TO UPDATE THIS PORTFOLIO</h2>';
    } else {
        // Display portfolio items
        let portfolioItem = menuItem.map(function (item) {
            return `<div class="box ${item.shadow}">
                <a href="${item.aTag}"><img src="${item.img}" alt=""></a>
            </div>`;
        }).join("");
        portfolioContainer.innerHTML = portfolioItem;
    }
}


let filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        currentCategory = e.currentTarget.id;
        count = 0; // Reset count whenever category changes
        if (currentCategory === 'all' || currentCategory === '') {
            showItem(showSixItems);
        } else {
            portfolioCategory = portfolio.filter(function (item) {
                return item.category === currentCategory;
            });
            let showSixCategory = portfolioCategory.slice(0, 6);
            remainingCategory = portfolioCategory.slice(6);
            showItem(showSixCategory);
        }
        loadMoreBtn.innerHTML = 'LOAD MORE';
        setLoadMoreVisibility(portfolioCategory); 
    });
});

loadMoreBtn.addEventListener('click', function () {
    if (currentCategory === 'all' || currentCategory === '') {
        if (count === 0) {
            let allItems = showSixItems.concat(showTheRest);
            showItem(allItems);
            loadMoreBtn.innerHTML = 'LOAD LESS';
            count = 1;
        } else {
            showItem(showSixItems);
            loadMoreBtn.innerHTML = 'LOAD MORE';
            count = 0;
        }
    } else {
        let portfolioCategory = portfolio.filter(function (item) {
            return item.category === currentCategory;
        });
        let showSixCategory = portfolioCategory.slice(0, 6);
        remainingCategory = portfolioCategory.slice(6);
        
        if (count === 0) {
            let allCate = showSixCategory.concat(remainingCategory);
            showItem(allCate);
            loadMoreBtn.innerHTML = 'LOAD LESS';
            count = 1;
        } else {
            showItem(showSixCategory);
            loadMoreBtn.innerHTML = 'LOAD MORE';
            count = 0;
        }
    }
    setLoadMoreVisibility();  
});




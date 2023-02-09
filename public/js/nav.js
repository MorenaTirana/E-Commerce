// navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (scrollY >= 180) {
    navbar.classList.add('bg');
  } else {
    navbar.classList.remove('bg');
  }
});

const createNavbar = () => {
  let navbar = document.querySelector('.navbar');

  navbar.innerHTML += `
         <a href="index.html"> 
            <img src="img/logo_1.png" class="logo"> 
         </a>
 
         <div class="user-interactions">
            <div class="search-box">
                <input type="text" class="search" placeholder="search item">
                <button class="search-btn">
                    <a><i class="uil uil-search"></i></a>
                </button>      
            </div>
             <div class="cart" onclick="location.href = '/cart'">
                <a class="cart-icon">
                    <i class="uil uil-shopping-basket"></i>
                </a>
                 <span class="cart-item-count">00</span>
             </div>
             <div class="user">
                 <a class="user-icon">
                    <i class="uil uil-user"></i>
                </a>
                 <div class="user-icon-popup">
                     <p>login to your account</p>
                     <a>login</a>
                 </div>
             </div>
         </div>
         
         <div id="human-bar">
         <div id="human_btn_holder">
            <button onclick="toggleHuman('human_panel')">Human</button>
        </div>
        <div id="human_panel">
        <div class="tabs">
            <div class="market_tabs">
                <div class="tab-header">
                    <div class="active">Hand</div>
                    <div>Body</div>
                    <div class="face">Face</div>
                    <div class="feet">Feet</div>
                </div>
                <div class="tab-content">
                    <div class="active">
                        <div class="tab-first">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="Hand Lotion.html" class="hand-lotion">Lotion</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Hand Lotion.png">                                                                                                               </div>
                                                </div> 
                                                                                                                                                                         
                                        </li>
                                        <li><a href="Soap.html" class="hand-soap">Soap</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Hand Soap.png">
                                                </div>
                                            </div>
                                        </li>
                                    </ul> 
                                </div>    
                            </div>
                        </div>
                        <div class="col-1" id="hands">
                            <img src="img/Hands.png">
                        </div>     
                    </div>
                   
                    <div class="tab-others"> 
                        <div class="tab-body">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="bodyCleanser.html" class="body-cleanser">Cleanser</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Body Cleanser.png">                                                                                                               </div>
                                                </div> 
                                                                                                                 
                                        </li>
                                        <li><a href="bodyOil.html" class="body-oil">Oil</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Body Oil.jpg">
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="bodyScrub.html" class="body-scrub">Scrub</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Body Scrub.png">                                                                                                               </div>
                                                </div> 
                                                                                                            
                                        </li>
                                        <li><a href="bodyProtective.html" class="body-protective">Protective</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Body Protective.png">
                                                </div>
                                            </div>
                                        </li> 
                                    </ul> 
                                </div>                                
                            </div> 
                        </div> 
                        <div class="col-1">
                            <img src="img/Body.png">
                        </div>
                    </div>
                  
                     <div class="tab-others">        
                        <div class="tab-face">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="faceCleanser.html" class="face-cleanser">Cleanser</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Face Cleanser.png">                                                                                                               </div>
                                                </div>                                                                    
                                        </li>
                                        <li><a href="faceLotion.html" class="face-lotion">Lotion</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Face Lotion.png">
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="faceSerum.html" class="face-serum">Serum</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Face Serum.jpg">                                                                                                               </div>
                                                </div>                                                               
                                        </li>
                                        <li><a href="faceMist.html" class="face-mist">Mist</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Face Mist.png">
                                                </div>
                                            </div>
                                        </li> 
                                    </ul> 
                                </div>                                
                            </div> 
                        </div> 
                        <div class="col-1">
                            <img src="img/Face.png">
                        </div>
                     </div>    
                     <div class="tab-others">                          
                        <div class="tab-first">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="footLotion.html" class="feet-lotion">Lotion</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Foot Lotion.png">
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="footOil.html" class="feet-oil">Oil</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Foot Oil.png">
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-1">
                            <img src="img/Feet.png">
                        </div>
                    </div>        
                </div>
            </div>
        </div> 
    </div>
</div>
<div id="scent-bar">
    <div id="scent_btn_holder">
        <button onclick="toggleScent('scent_panel')">Scent</button>
    </div>
    <div id="scent_panel">
        <div class="tab">
            <div class="market_tabs">
                <div class="tab-header">
                    <div class="active neck">Neck/Wrist</div>
                    <div class="armpit">Armpit</div>
                </div>
                <div class="tab-content">
                <div class="active">
                    <div class="tab-first">
                        <div class="sub_menu_1">
                            <div class="col-1">
                                <ul>
                                    <li><a href="Hand Lotion.html" class="neck-perfume">Perfume</a>
                                        <div class="sub_menu_2">
                                            <div class="col-2">
                                                <img src="img/Hand Lotion.png">                                                                                                               </div>
                                            </div> 
                                                                                                                                                                     
                                    </li>
                                    
                                </ul> 
                            </div>    
                        </div>
                    </div>
                    <div class="col-1">
                        <img src="img/Hands.png">
                    </div>     
                </div>
               
                <div class="tab-others"> 
                    <div class="tab-body">
                        <div class="sub_menu_1">
                            <div class="col-1">
                                <ul>
                                    <li><a href="#" class="armpit-deo1">Deo 1</a>
                                        <div class="sub_menu_2">
                                            <div class="col-2">
                                                <img src="img/Body Cleanser.png">                                                                                                               </div>
                                            </div> 
                                                                                                             
                                    </li>
                                    <li><a href="#" class="armpit-deo2">Deo 2</a>
                                        <div class="sub_menu_2">
                                            <div class="col-2">
                                                <img src="img/Body Scrub.png">
                                            </div>
                                        </div>
                                    </li>
                                </ul> 
                            </div>                                
                        </div> 
                    </div> 
                    <div class="col-1">
                        <img src="img/Body.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="idea-bar">
    <div id="idea_btn_holder">
        <button onclick="toggleIdea('idea_panel')">Idea</button>
    </div>
    <div id="idea_panel">
        <div class="tab">
            <div class="market_tabs">
                <div class="tab-header">
                    <div class="active crafted">Crafted for Conscious</div>
                    <div class="climate">Climate</div>
                    <div class="team">Team</div>
                </div>
                <div class="tab-content">
                    <div class="active">
                        <div class="tab-first">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="Hand Lotion.html" class="idea-crafted-test1">Fixar Test 1</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Hand Lotion.png">                                                                                                               </div>
                                                </div> 
                                                                                                                                                                         
                                        </li>
                                    </ul> 
                                </div>    
                            </div>
                        </div>
                        <div class="col-1">
                            <img src="img/Hands.png">
                        </div>     
                    </div>
                   
                    <div class="tab-others"> 
                        <div class="tab-body">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="#" class="idea-climate-test2">Fixar Test 2</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Body Cleanser.png">                                                                                                               </div>
                                                </div> 
                                                                                                                 
                                        </li> 
                                    </ul> 
                                </div>                                
                            </div> 
                        </div> 
                        <div class="col-1">
                            <img src="img/Body.png">
                        </div>
                    </div>
                  
                    <div class="tab-others">        
                        <div class="tab-face">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="#" class="idea-team">Our Team</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Face Cleanser.png">                                                                                                               </div>
                                                </div>                                                                    
                                        </li>
                                    </ul> 
                                </div>                                
                            </div> 
                        </div> 
                        <div class="col-1">
                            <img src="img/Face.png">
                        </div>
                    </div>              
                </div>
            </div>
        </div> 
    </div>
</div>
<div id="ltde-bar">
    <div id="ltde_btn_holder">
        <button onclick="toggleLtde('ltde_panel')">Ltde</button>
    </div>
    <div id="ltde_panel">
        <div class="tab">
            <div class="market_tabs">
                <div class="tab-header">
                    <div class="active">Limited Edition</div>
                    
                </div>
                <div class="tab-content">
                <div class="active">
                    <div class="tab-first">
                        <div class="sub_menu_1">
                            <div class="col-1">
                                <ul>
                                    <li><a href="Hand Lotion.html" class="ltde-01">01</a>
                                        <div class="sub_menu_2">
                                            <div class="col-2">
                                                <img src="img/Hand Lotion.png" alt="hand lotion">                                                                                                               </div>
                                            </div> 
                                                                                                                                                                     
                                    </li>
                                    <li><a href="#" class="ltde-02">02</a>
                                        <div class="sub_menu_2">
                                            <div class="col-2">
                                                <img src="img/Body Oil.jpg" alt="body oil">
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul> 
                            </div>    
                        </div>
                    </div>
                    <div class="col-1 ltde-image">
                        <img src="img/Hands.png">
                    </div>     
                </div>
               
                
            </div>
        </div>
    </div>
</div>
<div id="market-bar">
    <div id="market_btn_holder">
        <button onclick="toggleMarket('market_panel')">Market</button>
    </div>
    <div id="market_panel">
        <div class="tabs">
            <div class="market_tabs">
                <div class="tab-header">
                    <div id="market-brands" class="active">Brands</div>
                    <div class="market-final">Final Call </div>
                    <div class="market-outlet">Outlet</div>
                </div>
                <div class="tab-content">
                    <div class="active">
                        <div class="tab-first">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="Soap.html" class="market-brand">Brand</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Hand Soap.png">
                                                </div>
                                            </div>
                                        </li>
                                    </ul> 
                                </div>    
                            </div>
                        </div>
                        <div class="col-1">
                            <img src="img/Hands.png">
                        </div>     
                    </div>
                   
                    <div class="tab-others"> 
                        <div class="tab-body">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="#" class="market-picks1">Picks 1</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Body Protective.png">
                                                </div>
                                            </div>
                                        </li> 
                                    </ul> 
                                </div>                                
                            </div> 
                        </div> 
                        <div class="col-1">
                            <img src="img/Body.png">
                        </div>
                    </div>
                  
                     <div class="tab-others">        
                        <div class="tab-face">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="#" class="market-picks2">Picks 2</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Face Lotion.png">
                                                </div>
                                            </div>
                                        </li> 
                                    </ul> 
                                </div>                                
                            </div> 
                        </div> 
                        <div class="col-1">
                            <img src="img/Face.png">
                        </div>
                     </div>    
                         
                </div>
            </div>
        </div> 
    </div>
</div>

<div id="office-bar">
    <div id="office_btn_holder">
        <button onclick="toggleOffice('office_panel')">Office</button>
    </div>
    <div id="office_panel">
        <div class="tab">
            <div class="market_tabs">
                <div class="tab-header">
                    <div class="active contact">Contact details</div>
                    <div class="press">Press</div>
                </div>
                <div class="tab-content">
                    <div class="active">
                        <div class="tab-hand">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                   <ul>
                                       <li><a href="contact.html" class="office-contact">Contact us</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Deo1.png">                                                                                                               </div>
                                                </div>                                                                                                                            
                                        </li>
                                   </ul> 
                                </div>    
                            </div>
                        </div>
                        <div class="col-1 office-contactImage">
                            <img src="img/Hands.png">
                        </div>     
                     </div>
               
                    <div class="tab-others"> 
                        <div class="tab-body">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                   
                                        <li><a href="#" class="office-press">Press</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/product-1.jpg">
                                                </div>
                                            </div>
                                        </li>
                                    </ul> 
                                </div>                                
                            </div> 
                        </div> 
                        <div class="col-1 office-pressImage">
                            <img src="img/Deo2.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   `;
};

createNavbar();

//menu bar functions
function toggleHuman(x) {
  var panel = document.getElementById(x),
    maxH = '570px';

  if (panel.style.height == maxH) {
    panel.style.height = '0px';
  } else {
    panel.style.height = maxH;
  }
}
function toggleScent(x) {
  var panel = document.getElementById(x),
    maxH = '580px';

  if (panel.style.height == maxH) {
    panel.style.height = '0px';
  } else {
    panel.style.height = maxH;
  }
}
function toggleIdea(x) {
  var panel = document.getElementById(x),
    maxH = '580px';

  if (panel.style.height == maxH) {
    panel.style.height = '0px';
  } else {
    panel.style.height = maxH;
  }
}
function toggleLtde(x) {
  var panel = document.getElementById(x),
    maxH = '580px';

  if (panel.style.height == maxH) {
    panel.style.height = '0px';
  } else {
    panel.style.height = maxH;
  }
}
function toggleMarket(x) {
  var panel = document.getElementById(x),
    maxH = '580px';

  if (panel.style.height == maxH) {
    panel.style.height = '0px';
  } else {
    panel.style.height = maxH;
  }
}
function toggleOffice(x) {
  var panel = document.getElementById(x),
    maxH = '580px';

  if (panel.style.height == maxH) {
    panel.style.height = '0px';
  } else {
    panel.style.height = maxH;
  }
}

/* HUMAN Menu Functions */
let tabHeader_human = document.querySelectorAll(
  '#human_panel .market_tabs .tab-header > div'
);
let tabContent_human = document.querySelectorAll(
  '#human_panel .market_tabs .tab-content > div'
);

for (let i = 0; i < tabHeader_human.length; i++) {
  tabHeader_human[i].addEventListener('click', function () {
    document
      .querySelector('#human_panel .market_tabs .tab-header > .active')
      .classList.remove('active');
    tabHeader_human[i].classList.add('active');

    document
      .querySelector('#human_panel .market_tabs .tab-content > .active')
      .classList.remove('active');
    tabContent_human[i].classList.add('active');
  });
}

/* SCENT Menu Functions */
let tabHeader_scent = document.querySelectorAll(
  '#scent_panel .market_tabs .tab-header > div'
);
let tabContent_scent = document.querySelectorAll(
  '#scent_panel .market_tabs .tab-content > div'
);

for (let i = 0; i < tabHeader_scent.length; i++) {
  tabHeader_scent[i].addEventListener('click', function () {
    document
      .querySelector('#scent_panel .market_tabs .tab-header > .active')
      .classList.remove('active');
    tabHeader_scent[i].classList.add('active');

    document
      .querySelector('#scent_panel .market_tabs .tab-content > .active')
      .classList.remove('active');
    tabContent_scent[i].classList.add('active');
  });
}

/* IDEA Menu Functions */
let tabHeader_idea = document.querySelectorAll(
  '#idea_panel .market_tabs .tab-header > div'
);
let tabContent_idea = document.querySelectorAll(
  '#idea_panel .market_tabs .tab-content > div'
);

for (let i = 0; i < tabHeader_idea.length; i++) {
  tabHeader_idea[i].addEventListener('click', function () {
    document
      .querySelector('#idea_panel .market_tabs .tab-header > .active')
      .classList.remove('active');
    tabHeader_idea[i].classList.add('active');

    document
      .querySelector('#idea_panel .market_tabs .tab-content > .active')
      .classList.remove('active');
    tabContent_idea[i].classList.add('active');
  });
}

/* LTDE Menu Functions */
let tabHeader_ltde = document.querySelectorAll(
  '#ltde_panel .market_tabs .tab-header > div'
);
let tabContent_ltde = document.querySelectorAll(
  '#ltde_panel .market_tabs .tab-content > div'
);

for (let i = 0; i < tabHeader_ltde.length; i++) {
  tabHeader_ltde[i].addEventListener('click', function () {
    document
      .querySelector('#ltde_panel .market_tabs .tab-header > .active')
      .classList.remove('active');
    tabHeader_ltde[i].classList.add('active');

    document
      .querySelector('#ltde_panel .market_tabs .tab-content > .active')
      .classList.remove('active');
    tabContent_ltde[i].classList.add('active');
  });
}

/* MARKET Menu Functions */
let tabHeader_market = document.querySelectorAll(
  '#market_panel .market_tabs .tab-header > div'
);
let tabContent_market = document.querySelectorAll(
  '#market_panel .market_tabs .tab-content > div'
);

for (let i = 0; i < tabHeader_market.length; i++) {
  tabHeader_market[i].addEventListener('click', function () {
    document
      .querySelector('#market_panel .market_tabs .tab-header > .active')
      .classList.remove('active');
    tabHeader_market[i].classList.add('active');

    document
      .querySelector('#market_panel .market_tabs .tab-content > .active')
      .classList.remove('active');
    tabContent_market[i].classList.add('active');
  });
}

/* OFFICE Menu Functions */
let tabHeader_office = document.querySelectorAll(
  '#office_panel .market_tabs .tab-header > div'
);
let tabContent_office = document.querySelectorAll(
  '#office_panel .market_tabs .tab-content > div'
);

for (let i = 0; i < tabHeader_office.length; i++) {
  tabHeader_office[i].addEventListener('click', function () {
    document
      .querySelector('#office_panel .market_tabs .tab-header > .active')
      .classList.remove('active');
    tabHeader_office[i].classList.add('active');

    document
      .querySelector('#office_panel .market_tabs .tab-content > .active')
      .classList.remove('active');
    tabContent_office[i].classList.add('active');
  });
}

/*
let tabHeaders = document.querySelectorAll('.market_tabs .tab-header > div');
let tabContents = document.querySelectorAll('.market_tabs .tab-content > div');

for (let i = 0; i < tabHeaders.length; i++) {
  tabHeaders[i].addEventListener('click', function () {
    document
      .querySelector('.market_tabs .tab-header > .active')
      .classList.remove('active');
    tabHeaders[i].classList.add('active');

    document
      .querySelector('.market_tabs .tab-content > .active')
      .classList.remove('active');
    tabContents[i].classList.add('active');
  });
}

let tabHandLists = document.querySelectorAll('.tab-hand .tab-hand-list > div');
let tabHandImages = document.querySelectorAll(
  '.tab-hand .tab-hand-image > div'
);

for (let i = 0; i < tabHandLists.length; i++) {
  tabHandLists[i].addEventListener('click', function () {
    document
      .querySelector('.tab-hand .tab-hand-list > .active')
      .classList.remove('active');
    tabHandLists[i].classList.add('active');

    document
      .querySelector('.tab-hand .tab-hand-image > .active')
      .classList.remove('active');
    tabHandImages[i].classList.add('active');
  });
}
*/

// user icon popup
let userIcon = document.querySelector('.user-icon');
let userPopupIcon = document.querySelector('.user-icon-popup');

userIcon.addEventListener('click', () =>
  userPopupIcon.classList.toggle('active')
);

let text = userPopupIcon.querySelector('p');
let actionBtn = userPopupIcon.querySelector('a');
let user = JSON.parse(sessionStorage.user || null);

if (user != null) {
  // user is logged in
  text.innerHTML = `Hello, ${user.name}`;
  actionBtn.innerHTML = 'log out';
  actionBtn.addEventListener('click', () => logout());
} else {
  text.innerHTML = 'login to your account';
  actionBtn.innerHTML = 'login';
  actionBtn.addEventListener('click', () => (location.href = '/login'));
}

const logout = () => {
  sessionStorage.clear();
  location.reload();
};

// search box

let searchBtn = document.querySelector('.search-btn');
let searchBox = document.querySelector('.search');

searchBtn.addEventListener('click', () => {
  if (searchBox.value.length) {
    location.href = `/search/${searchBox.value}`;
  }
});

// nav cart count
const updateNavCartCounter = () => {
  let cartCounter = document.querySelector('.cart-item-count');

  let cartItem = JSON.parse(localStorage.getItem('cart'));

  if (cartItem == null) {
    cartCounter.innerHTML = '00';
  } else {
    if (cartItem.length > 9) {
      cartCounter.innerHTML = '9+';
    } else if (cartItem.length <= 9) {
      cartCounter.innerHTML = `0${cartItem.length}`;
    }
  }
};

updateNavCartCounter();

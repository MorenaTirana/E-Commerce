// navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
})


const createNavbar = () => {
    let navbar = document.querySelector('.navbar');

    navbar.innerHTML += `

    <div class="user-interactions">
        <div class="search-box">
            <input type="text" class="search" placeholder="search item">
            <button class="search-btn"><img src="./img/search.png" alt=""></button>      
        </div>
        <div class="cart" onclick="location.href = '/cart'">
            <img src="./img/cart.png" class="cart-icon" alt="">
            <span class="cart-item-count">00</span>
        </div>
        <div class="user">
            <img src="./img/user.png" class="user-icon" alt="">
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
                    <div>Face</div>
                    <div>Feet</div>
                </div>
                <div class="tab-content">
                    <div class="active">
                        <div class="tab-first">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="Hand Lotion.html">Lotion</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Hand Lotion.png">                                                                                                               </div>
                                                </div> 
                                                                                                                                                                         
                                        </li>
                                        <li><a href="Soap.html">Soap</a>
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
                                        <li><a href="#">Cleanser</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Body Cleanser.png">                                                                                                               </div>
                                                </div> 
                                                                                                                 
                                        </li>
                                        <li><a href="#">Oil</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Body Oil.jpg">
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="#">Scrub</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Body Scrub.png">                                                                                                               </div>
                                                </div> 
                                                                                                            
                                        </li>
                                        <li><a href="#">Protective</a>
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
                                        <li><a href="#">Cleanser</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Face Cleanser.png">                                                                                                               </div>
                                                </div>                                                                    
                                        </li>
                                        <li><a href="#">Lotion</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Face Lotion.png">
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="#">Serum</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Face Serum.jpg">                                                                                                               </div>
                                                </div>                                                               
                                        </li>
                                        <li><a href="#">Mist</a>
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
                                        <li><a href="#">Lotion</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Foot Lotion.png">
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="#">Oil</a>
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
                    <div class="active">Neck/Wrist</div>
                    <div>Armpit</div>
                </div>
                <div class="tab-content">
                <div class="active">
                    <div class="tab-first">
                        <div class="sub_menu_1">
                            <div class="col-1">
                                <ul>
                                    <li><a href="Hand Lotion.html">Perfume</a>
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
                                    <li><a href="#">Deo 1</a>
                                        <div class="sub_menu_2">
                                            <div class="col-2">
                                                <img src="img/Body Cleanser.png">                                                                                                               </div>
                                            </div> 
                                                                                                             
                                    </li>
                                    <li><a href="#">Deo 2</a>
                                        <div class="sub_menu_2">
                                            <div class="col-2">
                                                <img src="img/Body Oil.jpg">
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
                    <div class="active">Crafted for Conscious</div>
                    <div>Climate</div>
                    <div>Team</div>
                </div>
                <div class="tab-content">
                    <div class="active">
                        <div class="tab-first">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="Hand Lotion.html">Fixar Test 1</a>
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
                                        <li><a href="#">Fixar Test 2</a>
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
                                        <li><a href="#">Our Team</a>
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
                                    <li><a href="Hand Lotion.html">01</a>
                                        <div class="sub_menu_2">
                                            <div class="col-2">
                                                <img src="img/Hand Lotion.png">                                                                                                               </div>
                                            </div> 
                                                                                                                                                                     
                                    </li>
                                    <li><a href="#">02</a>
                                        <div class="sub_menu_2">
                                            <div class="col-2">
                                                <img src="img/Body Oil.jpg">
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
                    <div class="active">Brands</div>
                    <div>Final Call </div>
                    <div>Outlet</div>
                </div>
                <div class="tab-content">
                    <div class="active">
                        <div class="tab-first">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                    <ul>
                                        <li><a href="Soap.html">Brand</a>
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
                                        <li><a href="#">Picks 1</a>
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
                                        <li><a href="#">Picks 2</a>
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
                    <div class="active">Contact details</div>
                    <div>Press</div>
                </div>
                <div class="tab-content">
                    <div class="active">
                        <div class="tab-hand">
                            <div class="sub_menu_1">
                                <div class="col-1">
                                   <ul>
                                       <li><a href="Hand Lotion.html">Contact us</a>
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
                                   
                                        <li><a href="#">Press</a>
                                            <div class="sub_menu_2">
                                                <div class="col-2">
                                                    <img src="img/Body Oil.jpg">
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
</div>
 
   `;
}

createNavbar();

//menu bar functions
function toggleHuman(x)
{
    var panel = document.getElementById(x),
    maxH = "480px";

    if(panel.style.height == maxH)
    {
        panel.style.height = "0px";
    } 
    else
    {
        panel.style.height = maxH;
    }
}
function toggleScent(x)
{
    var panel=document.getElementById(x),
    maxH="480px";

    if(panel.style.height==maxH)
    {
        panel.style.height="0px";
    }
    else
    {
        panel.style.height=maxH;               
    }
}
function toggleIdea(x)
{
    var panel=document.getElementById(x),
    maxH="480px";

    if(panel.style.height==maxH)
    {
        panel.style.height="0px";
    }
    else
    {
        panel.style.height=maxH;               
    }
}
function toggleLtde(x)
{
    var panel=document.getElementById(x),
    maxH="480px";
 
    if(panel.style.height==maxH)
    {
        panel.style.height="0px";
    }
    else
    {
        panel.style.height=maxH;               
    }
}
function toggleMarket(x)
{
    var panel=document.getElementById(x),
    maxH="480px";
  
    if(panel.style.height==maxH)
    {
        panel.style.height="0px";
    }
    else
    {
        panel.style.height=maxH;               
    }
}
function toggleOffice(x)
{
    var panel=document.getElementById(x),
    maxH="480px";
   
    if(panel.style.height==maxH)
    {
        panel.style.height="0px";
               
    }
    else
    {
        panel.style.height=maxH;               
    }
}

let tabHeaders=document.querySelectorAll(".market_tabs .tab-header > div");
let tabContents=document.querySelectorAll(".market_tabs .tab-content > div");
    
    for(let i=0;i<tabHeaders.length;i++)
    {
       tabHeaders[i].addEventListener("click",function()
       {
         document.querySelector(".market_tabs .tab-header > .active").classList.remove("active");
         tabHeaders[i].classList.add("active");
      
         document.querySelector(".market_tabs .tab-content > .active").classList.remove("active");
         tabContents[i].classList.add("active");     
       })
    }
let tabHandLists=document.querySelectorAll(".tab-hand .tab-hand-list > div");
let tabHandImages=document.querySelectorAll(".tab-hand .tab-hand-image > div");
    
       for(let i=0;i<tabHandLists.length;i++)
    {
       tabHandLists[i].addEventListener("click",function()
       {
         document.querySelector(".tab-hand .tab-hand-list > .active").classList.remove("active");
         tabHandLists[i].classList.add("active");
      
         document.querySelector(".tab-hand .tab-hand-image > .active").classList.remove("active");
         tabHandImages[i].classList.add("active");     
       })
    }

// user icon popup
let userIcon = document.querySelector('.user-icon');
let userPopupIcon = document.querySelector('.user-icon-popup');

userIcon.addEventListener('click', () => userPopupIcon.classList.toggle('active'))

let text = userPopupIcon.querySelector('p');
let actionBtn = userPopupIcon.querySelector('a');
let user = JSON.parse(sessionStorage.user || null);

if(user != null){ // user is logged in
    text.innerHTML = `Hello, ${user.name}`;
    actionBtn.innerHTML = 'log out';
    actionBtn.addEventListener('click', () => logout());
} else{
    text.innerHTML = 'login to your account';
    actionBtn.innerHTML = 'login';
    actionBtn.addEventListener('click', () => location.href = '/login');
}

const logout = () => {
    sessionStorage.clear()
    location.reload();
}

// search box

let searchBtn = document.querySelector('.search-btn');
let searchBox = document.querySelector('.search');

searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = `/search/${searchBox.value}`;

    }
})


// nav cart count
const updateNavCartCounter = () => {
    let cartCounter = document.querySelector('.cart-item-count');

    let cartItem = JSON.parse(localStorage.getItem('cart'));

    if(cartItem == null){
        cartCounter.innerHTML = '00';
    } else{
        if(cartItem.length > 9){
            cartCounter.innerHTML = '9+';
        } else if(cartItem.length <= 9){
            cartCounter.innerHTML = `0${cartItem.length}`
        }
    }
}

updateNavCartCounter();
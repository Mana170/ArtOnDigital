
let loggedIn = false

function Login() {

 
  document.getElementById("BackgroundPopup").style.display = "flex";
  document.getElementById("LoginForm").style.display = "block";

}

function Close() {
  document.getElementById("LoginForm").style.display = "none";
  document.getElementById("BackgroundPopup").style.display = "none";
  document.getElementById("SigninForm").style.display = "none";
  logoPopUp.style.display = "none"
  cartPopUp.style.display = "none"
  dropDownItems[0].style.display = "none"
  dropDownItems[1].style.display = "none"
  dropDownItems[2].style.display = "none"
  dropDownItems[3].style.display = "none"
  dropDownItems[4].style.display = "none"
  dropDownItems[5].style.display = "none"

 
}

function signUp() {
  document.getElementById("SigninForm").style.display = "block";
  document.getElementById("BackgroundPopup").style.display = "flex";
}

function mycart() {
  location.replace("myCart.html");
}

function contactus() {
  location.replace("contactus.html")
}

let logoPopUp = document.getElementById("logoDesginPackage")

function logoPop() {
  logoPopUp.style.display = "flex"
  document.getElementById("BackgroundPopup").style.display = "block";
}

let GraphicsHover = document.getElementsByClassName("mpHover")
let oldGraphics = document.getElementsByClassName("mostpopularcont")

function graphicsMouseOn() {
  
  document.getElementById("gdHover").style.display = "block"
  document.getElementById("gdCont").style.display = "none"
  
}

function graphicsMouseOut() {
  document.getElementById("gdHover").style.display = "none"
  document.getElementById("gdCont").style.display = "block"


}

function videoMouseOn() {
  
  document.getElementById("vdHover").style.display = "block"
  document.getElementById("vdCont").style.display = "none"
  
}

function videoMouseOut() {
  document.getElementById("vdHover").style.display = "none"
  document.getElementById("vdCont").style.display = "block"


}
function progMouseOn() {
  
  document.getElementById("progHover").style.display = "block"
  document.getElementById("progCont").style.display = "none"
  
}

function progMouseOut() {
  document.getElementById("progHover").style.display = "none"
  document.getElementById("progCont").style.display = "block"


}

let cartPopUp = document.getElementById("cartPopUp")
let cartItem = document.getElementById("myCartItem")
let cartNumItems = document.getElementById("myCartItemNumber")
let cartPrices = document.getElementById("checkout-price")
let startCartNum = 1
let startPrice = 25



function cartPlus() {
  startCartNum += 1
    cartNumItems.textContent = startCartNum
    startPrice += 25
    cartPrices.textContent = startPrice + " $"


}

function cartMinus() {

  startCartNum -= 1
  cartNumItems.textContent = startCartNum
  startPrice -= 25
  cartPrices.textContent = startPrice + " $"

}


let GraphicsItems = [ 
  "Basic Logo Package  " ,
  "Standard Logo Package  ",
  "Premium Logo Package  ",

]

let marketingItems = [
  "Basic E-commerce Marketing Package" ,
  "Standard E-commerce Marketing Package" ,
  "Premium E-commerce Marketing Package" ,
]



function myCartPopUpBasic() {

  cartPopUp.style.display = "block"
  logoPopUp.style.display = "none"

  cartItem.textContent = GraphicsItems[0] 
  cartNumItems.textContent = startCartNum

}

function myCartPopUpStandard() {

  cartPopUp.style.display = "block"
  logoPopUp.style.display = "none"

  cartItem.textContent = GraphicsItems[1] 

}
function myCartPopUpPremium() {

  cartPopUp.style.display = "block"
  logoPopUp.style.display = "none"

  cartItem.textContent = GraphicsItems[2] 

}
function myCartPopUpMBasic() {

  cartPopUp.style.display = "block"
  logoPopUp.style.display = "none"

  cartItem.textContent =  marketingItems[0]
  cartNumItems.textContent = startCartNum

}

function myCartPopUpMStandard() {

  cartPopUp.style.display = "block"
  logoPopUp.style.display = "none"

  cartItem.textContent = marketingItems[1] 

}
function myCartPopUpMPremium() {

  cartPopUp.style.display = "block"
  logoPopUp.style.display = "none"

  cartItem.textContent = marketingItems[2] 

}


let CardFirstnameInput = document.getElementById("cardFirstName")
let CardLastnameInput = document.getElementById("cardLastName")
let printCardName = document.getElementById("cardName")
let printCardNum = document.getElementById("cardNum")
let CardNumInput = document.getElementById("cardNumInput")
let paymentInfoCont = document.getElementById("PaymentCont")
let cardSaveInfo = document.getElementById("cardContPopup")



function printCardInfo() {
  let cardName = CardFirstnameInput.value + " " + CardLastnameInput.value
  printCardName.textContent = cardName
  let cardNum = "***" + CardNumInput.value
  printCardNum.textContent = cardNum
  
  cardSaveInfo.style.display = "flex"

  paymentInfoCont.style.display = "none"
}


let usernameInput = document.getElementById("username-input")
let printUserName = document.getElementById("yourUsername")
let signUpBtn = document.getElementById("signUp-btn")
let signInBtn = document.getElementById("signIn-btn")


function printUsername() {

  let userName = usernameInput.value
  printUserName.textContent = "Welcome!  " + userName
  printUserName.style.display = "block"
  document.getElementById("LoginForm").style.display = "none" 
  document.getElementById("BackgroundPopup").style.display = "none";
  document.getElementById("SigninForm").style.display = "none";
  signInBtn.style.display = "none"
  signUpBtn.style.display = "none"

  loggedIn = true

 
}

let dropDownCont =  [
  document.getElementById("logoCont"),
  document.getElementById("webDesignCont"),
  document.getElementById("architectureCont"),
  document.getElementById("artCont"),
  document.getElementById("marketingCont"),
  document.getElementById("fashionCont"),

]

let dropDownItems = [
  document.getElementById("logocataloug-dropDown"),
  document.getElementById("webcataloug-dropDown"),
  document.getElementById("archicataloug-dropDown"),
  document.getElementById("artcataloug-dropDown"),
  document.getElementById("marketingcataloug-dropDown"),
  document.getElementById("fashioncataloug-dropDown"),

] 



dropDownCont[0].onmouseover = function() {
  dropDownItems[0].style.display = "flex"
}
dropDownCont[1].onmouseover = function() {
  dropDownItems[1].style.display = "flex"
}
dropDownCont[2].onmouseover = function() {
  dropDownItems[2].style.display = "flex"
}
dropDownCont[3].onmouseover = function() {
  dropDownItems[3].style.display = "flex"
}
dropDownCont[4].onmouseover = function() {
  dropDownItems[4].style.display = "flex"
}
dropDownCont[5].onmouseover = function() {
  dropDownItems[5].style.display = "flex"
}



 









 
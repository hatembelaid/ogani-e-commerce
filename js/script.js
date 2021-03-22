//Function declaration
function search(x, T) {
    var s = 0
    for (var i = 0; i < T.length; i++) {
        if (T[i] == x) {
            s = s + 1;
        }
    }
    return s
}
function Somme(A, B) {
    var c = [];
    for (var i = 0; i < A.length; i++) {
        c[i] = A[i] + B[B.length - i - 1];

    }
    return c;
}
//Function call
var x = search(5, [12, 7, 5, 8, 13]);
var T = Somme([1, 2, 5], [3, 5, 8]);
// alert(T);

function Pairimpair(X) {
    if (X % 2 == 0) {
        alert("pair")
    } else {
        alert(impair)
    }

}
// alert(Pairimpair(8))

function prix(A, B) {
    var ht = 0
    for (var i = 0; i < A.length; i++) {
        ht = ht + (A[i] * B[i])

    }
    TTC = 1.19 * ht
    return ("le ht est : " + ht + " ,le TTC est: " + TTC);
}
// alert(prix([1,3],[2,3]))

function consonne(T) {

    var C = [];
    for (var i = 0; i < T.length; i++) {
        var ch = T[i];
        var cons = 0;

        for (var j = 0; j < ch.length; j++) {

            if (ch[j] == 'a' || ch[j] == 'e' || ch[j] == 'u' || ch[j] == 'i' || ch[j] == 'y' || ch[j] == 'o') {
                cons = cons + 1;
            }

        }
        C[i] = ch.length - cons;

    }
    return C;
}
var V = consonne(['hello', 'ok', 'crococoder'])
// alert(V)

function inverser(ch) {
    var chInv;
    for (let i = 0; i < ch.length; i++) {

        chInv = chInv + ch[ch.length - i - 1]
    }
    return chInv;
}

// alert(inverser("hello"));

function somme(X) {
    var s = 0;
    for (let i = 1; i <= X; i++) {
        s = s + i;

    }
    return s;
}
// alert(somme(7));

function nbocc(T, X) {
    var nb = 0;
    for (var i = 0; i < T.length; i++) {
        if (T[i] == X) {
            nb = nb + 1;
        }

    }
    return nb;
}
// alert(nbocc([2,1,2,2],2));

function negatif(T) {
    var ind;
    for (var i = 0; i < T.length; i++) {
        if (T[i] < 0) {
            ind = i;
        }

    }
    return ind;
}
// alert(negatif[-1,2,-3]);

function nbpremier(T) {
    var X = 0;

    for (var j = 0; j < T.length; j++) {
        for (var i = 2; i < T[i] - 1; i++) {
            if (T[i] % i == 0) {
                X = X + 1
            }

        }

    }
    if (X == 0) {
        alert("premier");
    }
}
// nbpremier([2,1,7]) ; 

function pizzaTask(ch) {
    var occ = 0;
    var stock;
    var C = [];
    for (var i = 0; i < ch.length - 1; i++) {
        for (var j = i + 1; j < ch.length; j++) {
            if (Ch[i] = ch[j] && ch[i] != stock) {
                occ = occ + 1;
                stock = ch[i]
            }

        }
        C[i] = [occ]
    }
    return C
}
//  alert(pizzatask("abderrahmen"))

// function inverseLoop(T) {
//     for (var i = T.length-1; i>=0; i--){
//      alert(T[i]);

//     }
// }
// inverseLoop([1,2,3])

//  signup function
function signup(x) {
    var firstName = document.getElementById('firstName').value;
    verifFirstName = firstName.length > 3;
    genericError('First name should hav at least 3 characters', "firstNameError", verifFirstName);

    var lastName = document.getElementById("lastName").value;
    verifLastName = lastName.length > 3;
    genericError('Lastname should hav at least 3 characters', "lastNameError", verifLastName);

    var Email = document.getElementById('Email').value;
    var verifEmail = validateEmail(Email);
    if (verifEmail) {
        document.getElementById("emailError").innerHTML = "";
    } else {
        document.getElementById("emailError").innerHTML = "Email should have a verified format";
        document.getElementById("emailError").style.color = 'red';
    }

    var tel = document.getElementById('tel').value;
    verifTel = tel.length == 8;
    genericError('Tel number should have 8 characters', "phoneNumberError", verifTel);

    var address = document.getElementById('address').value;

    var pwd = document.getElementById('pwd').value;
    var verifPwd = pwd.length > 8;
    genericError('Password should have at least 5 characteres >8', "passwordError", verifPwd);

    if (verifFirstName && verifLastName && verifEmail && verifTel && verifPwd) {
        var userId = JSON.parse(localStorage.getItem("userId") || '1');
        var user = {
            id: Number(userId),
            firstName: firstName,
            lastName: lastName,
            Email: Email,
            tel: tel,
            address: address,
            pwd: pwd,
            role: x
        }
        var T = JSON.parse(localStorage.getItem('users') || '[]');
        T.push(user);
        localStorage.setItem('users', JSON.stringify(T));
        localStorage.setItem('userId', Number(userId) + 1);
    }
}
// login function
function loginFunction() {
    var Email = document.getElementById('email').value;
    var verifEmail = validateEmail(Email);

    if (verifEmail) {
        document.getElementById("email-Error").innerHTML = "";
    } else {
        document.getElementById("email-Error").innerHTML = "Email should have a verified format";
        document.getElementById("email-Error").style.color = 'red';
    }
    var pwdLogin = document.getElementById("pwdLogin").value;
    var verifPwd = pwdLogin.length < 8
    if (verifPwd) {
        document.getElementById("password-Error").innerHTML = "password should have at least 8 characteres";
        document.getElementById("password-Error").style.color = 'red';
    } else {
        document.getElementById("password-Error").innerHTML = "";
    }
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function addProduct() {
    var name = document.getElementById('name').value;
    var verifName = name.length > 3;
    genericError('Product name should be >3', "nameError", verifName);
    var price = document.getElementById('price').value;
    var verifPrice = price > 0;
    genericError('Price should be >0', "priceError", verifPrice);
    var stock = document.getElementById('stock').value;
    var verifStock = stock > 10;
    genericError('stock should be >10', "stockError", verifStock);
    var category = document.getElementById("category").value;
    var productId = JSON.parse(localStorage.getItem("productId") || '1');
    if (verifName && verifPrice && verifStock) {
        var product = {
            id: Number(productId),
            name: name,
            price: price,
            stock: stock,
            category: category
        }
        var V = JSON.parse(localStorage.getItem('products') || '[]');
        V.push(product);
        localStorage.setItem('products', JSON.stringify(V));
        localStorage.setItem('productId', Number(productId) + 1);
    }
}

function displayUsers() {
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    var userTable = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>`;
    for (var i = 0; i < users.length; i++) {
        userTable = userTable + `
    <tr>
      <th scope="row">${users[i].id}</th>
      <td>${users[i].firstName}</td>
      <td>${users[i].lastName}</td>
      <td>${users[i].Email}</td>
    </tr>`
    }
    userTable = userTable +
        `</tbody>
  </table>`;

    document.getElementById('users').innerHTML = userTable;

}

function displayProducts() {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var productTable = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">name</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>`;
    for (var i = 0; i < products.length; i++) {
        productTable = productTable + `
    <tr>
      <th scope="row">${products[i].id}</th><div id="editDiv"colspan="6">
      <td>${products[i].name}  
      <td>${products[i].price}</td></td> 
      <td>${products[i].stock}</td></td>
      <td>
      <button class="btn btn-info" onclick="editObject(${products[i].id})">Edit</button>

      <button onclick="deleteObject(${i},'products')" class="btn btn-danger">Delete</button>
      </td>
     
    </tr>
    <tr id="editBloc${products[i].id}"></tr>
    `
    }
    productTable = productTable +
        `</tbody>
  </table>`;
    document.getElementById('products').innerHTML = productTable;
}

//  function number(x) {
//      if (isNaN(x)) {
//          alert("not a number;")
//      }else(alert("it's a number"));
// }
//  alert(number('a'));
//function Login 

function searchUserByEmailAndPwd(email, pwd) {
    var isFindedUser;
    var findedUser = JSON.parse(localStorage.getItem('users') || '[]');
    for (var i = 0; i < findedUser.length; i++) {
        
        if (findedUser[i].Email == email && findedUser[i].pwd == pwd) {
            isFindedUser = findedUser[i];
        }
    } return isFindedUser;
}
//Verifier existence Email
function login() {
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwdLogin").value;
    var isFindedUser = searchUserByEmailAndPwd(email, pwd);
    if (isFindedUser) {
        localStorage.setItem('connectedUser', isFindedUser.id);
        if (isFindedUser.role == 'admin') {
            location.replace('admin2.html')
        } else { location.replace('shop.html'); }
    }
}
function searchUserByEmail(email) {
    var isFindedUser = false;
    var findedUser = JSON.parse(localStorage.getItem('users') || '[]');
    for (var i = 0; i < findedUser.length; i++) {
        if (findedUser[i].Email == email) {
            isFindedUser = true;
        } else {
            isFindedUser = false;
        }

    } return isFindedUser;
}
function displayShop() {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var shopTable = '';
    for (var i = 0; i < products.length; i++) {
        shopTable = shopTable + `
    <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
    <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
            <ul class="featured__item__pic__hover">
                <li><a ><i class="fa fa-heart" onclick="CreateWhishListObject(${products[i].id})"></i></a></li>
                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                <li><img src="pomme.jpg"></li>
            </ul>
        </div>
        <div class="featured__item__text">
            <h6><a href="#">${products[i].name}</a></h6>
            <h5>${products[i].price}</h5>
            <button style="color:green" onclick=reserve(${products[i].id})>Reserve</button>
    
        </div>
    </div>
</div>`
    } document.getElementById('shopProducts').innerHTML = shopTable;
}
function genericError(msg, id, condition) {
    if (condition) {
        document.getElementById(id).innerHTML = '';

    } else {
        document.getElementById(id).innerHTML = msg;
        document.getElementById(id).style.color = 'red';
    }
}
function getObjectfromLS(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}
function reserve(id) {
    localStorage.setItem('idPrToReserve', id);
    location.replace('product-details.html');

}
//afficher les produits 
function searchById(key, id) {
    var allObjects = getObjectfromLS(key);
    var obj;
    for (var i = 0; i < allObjects.length; i++) {
        if (allObjects[i].id == id) {
            obj = allObjects[i];
        }
    }
    return obj;
}
function displayProductInfo() {
    var idPr = localStorage.getItem('idPrToReserve');
    var product = searchById('products', idPr);
    document.getElementById('prName').innerHTML = product.name;
    document.getElementById('prPrice').innerHTML = product.price;
    document.getElementById('prStock').innerHTML = product.stock;
}

//fonction supprimer produits
function deleteObject(pos, key) {
    var allObjects = JSON.parse(localStorage.getItem(key) || '[]');
    allObjects.splice(pos, 1);
    localStorage.setItem(key, JSON.stringify(allObjects));
    location.reload();
}


function addToCard() {
    var quantity = document.getElementById("productQuantity").value;
    var idPr = localStorage.getItem('idPrToReserve');

    var product = searchById('products', idPr);

    if (Number(quantity) <= product.stock) {
        var connectedUser = localStorage.getItem('connectedUser');
        var commandeId = JSON.parse(localStorage.getItem('commandeId') || '1');
        var commande = {
            id: Number(commandeId),
            idUser: Number(connectedUser),
            idProduct: Number(idPr),
            quantity: Number(quantity)

        }
        var V = JSON.parse(localStorage.getItem('orders') || '[]');
        V.push(commande);
        localStorage.setItem('orders', JSON.stringify(V));
        localStorage.setItem('commandeId', Number(commandeId) + 1);
        var products = getObjectfromLS('products');
        for (var i = 0; i < products.length; i++) {
            if (products[i].id == idPr) {

                products[i].stock = products[i].stock - Number(quantity);
                break;
            }

        }
        localStorage.setItem('products', JSON.stringify(products));
    }

    else {
        alert("stock not available");
    }

}

function displayOrders() {
    var orders = JSON.parse(localStorage.getItem('orders') || '[]');
    var idConUser = localStorage.getItem('connectedUser');
    var ordersTable = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id user</th>
      <th scope="col">Id product</th>
      <th scope="col">name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Prix total</th>
      <th scope="col">Action</th>
    </tr>
    
  </thead>
  <tbody>`;
    var somme = 0;
    for (var i = 0; i < orders.length; i++) {
        //rechercher mes commandes à partir mon id
        if (orders[i].idUser == idConUser) {
            var pr = searchById('products', orders[i].idProduct)
            var price = Number(pr.price * orders[i].quantity);
            somme += price;
            if (somme > 100) {
                somme = somme + 7;
            } else {
                somme = somme + 10;
            }
            ordersTable = ordersTable + `
    <tr>
      <th scope="row">${orders[i].id}</th>
      <th scope="row">${orders[i].idProduct}</th>
      <td>${pr.name}</td>
      <td>${orders[i].quantity}</td>
      <td>${pr.price}</td>
      <td>${price}  </td>
      <td><button class="btn btn-danger" onclick="deleteObject(${i},'orders')">Delete</button></td>
     
      
    </tr>
    `
        }
    }
    ordersTable = ordersTable +
        `
        <tr>
      <th scope="col" colspan="6">Total order:</th>
      <th scope="col" >Total order: ${somme}</th>
      <th scope="col"> <span>${ somme + fraisLivrasion(somme)}</span></th>
      
    </tr></tbody>
  </table>`;

    document.getElementById('orders').innerHTML = ordersTable;

}
function fraisLivrasion(somme) {
    if (somme > 100) {
        frais = 7;
    } else { frais = 10 }
    return frais;
}
//create wish list object
function CreateWhishListObject(id) {
    var connectedUser = localStorage.getItem('connectedUser');
    var WishListId = JSON.parse(localStorage.getItem('wishListId') || '1');
    var wishList = {
        WishListId: Number(WishListId),
        wishUserId: Number(connectedUser),
        wishProductId: id
    }

    var wishes = JSON.parse(localStorage.getItem('wishList') || '[]');
    wishes.push(wishList);
    localStorage.setItem('wishList', JSON.stringify(wishes));
    localStorage.setItem('wishListId', Number(WishListId) + 1);
}
//display wishes
function displayWishes() {
    var wishes = getObjectfromLS('wishList');
    var connectedUser = localStorage.getItem('connectedUser');
    var myWishes = [];
    for (let i = 0; i < wishes.length; i++) {
        if (wishes[i].wishUserId == connectedUser) {
            myWishes.push(wishes[i]);
        }

    }
    var wishTable = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
     <th scope="col">name</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Action</th>
   </tr>
  </thead>
  <tbody>`;
    for (var i = 0; i < myWishes.length; i++) {
        var wl = searchById('products', myWishes[i].wishProductId)
        wishTable = wishTable + `
        <tr>
          <th scope="row">${myWishes[i].WishListId}</th>
          <td>${wl.name}</td>
           <td>${wl.price}</td>
   
          <td><button onclick="deleteObject(${i},'wishList')">Delete</button></td>
        </tr>`;

    }
    wishTable = wishTable +
        `</tbody>
    </table>`;

    document.getElementById('wishes').innerHTML = wishTable;
}
function SearchProductsByPrice() {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var minPrice = document.getElementById('minPrice').value;
    var maxPrice = document.getElementById('maxPrice').value;
    var shopTable = ``;
    for (var i = 0; i < products.length; i++) {
        if (products[i].price >= Number(minPrice) && products[i].price <= Number(maxPrice)) {

            shopTable = shopTable + `
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div class="featured__item">
                <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                    <ul class="featured__item__pic__hover">
                        <li><img src="pomme.jpg"></li>
                    </ul>
                </div>
                <div class="featured__item__text">
                    <h6><a href="#">${products[i].name}</a></h6>
                    <h5>${products[i].price}</h5>
                </div>
            </div>
        </div>`
        }
    } document.getElementById('pricesResult').innerHTML = shopTable;

}
function DisplayOrdersInHeader() {
    var orders = JSON.parse(localStorage.getItem('orders') || '[]');
    var idConUser = localStorage.getItem('connectedUser');
    for (var i = 0; i < orders.length; i++) {
        //rechercher mes commandes à partir mon id
        if (orders[i].idUser == idConUser) {
            basket = `<ul>
                            <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a href="basket.html"><i class="fa fa-shopping-bag"></i> <span>${orders.length}</span></a></li> 
                        </ul>`
        }
    } document.getElementById("basket").innerHTML = basket;
}
// function DisplayWishesInHeader() {
//     var wishes=JSON.parse(localStorage.getItem('wishList')||'[]');
//     var idConUser = localStorage.getItem('connectedUser');
//     for (var i = 0; i < wishes.length; i++) {
//         //rechercher mes commandes à partir mon id
//         if (wishes[i].idUser == idConUser) {
//           heart=  `<ul>
//                             <li><a href="#"><i class="fa fa-heart"></i> <span>${wishes.length}</span></a></li>
//                             <li><a href="#"><i class="fa fa-shopping-bag"></i> <span></span></a></li> 
//                         </ul>`
//         }
//     }document.getElementById("heart").innerHTML=heart;
// }

function searchByFilter() {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var priceItem = document.getElementById('priceItem').value;
    var categoryItem = document.getElementById('categoryInput').value;
    var stockItem = document.getElementById('stockItem').value;
    var selectElmt = document.getElementById("filter");
    var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
    var shopTable = ` <div class="container">
    <div class="row justify-content-center">
        <div class="col-4">
            <div class="col-auto">
                <label for="minPrice" class="col-form-label">Min Price</label>
            </div>
            <div class="col-auto">
                <input type="number" id="minPrice" class="form-control" aria-describedby="passwordHelpInline">
            </div>
        </div>
        <div class="col-4">
            <div class="col-auto">
                <label for="maxPrice" class="col-form-label">Max Price</label>
            </div>
            <div class="col-auto">
                <input type="number" id="maxPrice" class="form-control" aria-describedby="passwordHelpInline">
            </div>
        </div>
    </div>
 <br><br>
<div class="row justify-content-end">
    <div class="col-4">
        <div class="col-auto"> <button class="btn btn-danger" style="margin-left: -80%;"   onclick="SearchProductsByPrice()">Search</button></div>
       
    </div>
   
  </div>
</div>`;
    switch (valeurselectionnee) {
        case (valeurselectionnee == 1):
            for (var i = 0; i < products.length; i++) {
                if (products[i].price >= Number(minPrice) && products[i].price <= Number(maxPrice)) {

                    shopTable = shopTable + `
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div class="featured__item">
                <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                    <ul class="featured__item__pic__hover">
                        <li><img src="pomme.jpg"></li>
                    </ul>
                </div>
                <div class="featured__item__text">
                    <h6><a href="#">${products[i].name}</a></h6>
                    <h5>${products[i].price}</h5>
                </div>
            </div>
        </div>`
                }
                break;
            } document.getElementById('price').innerHTML = shopTable;
            categoryTable = `<div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="category" class="col-form-label">Category</label>
            </div>
            <div class="col-auto">
              <input type="text" id="categoryInput" class="form-control" aria-describedby="passwordHelpInline">
            </div>
          </div>`
        case (valeurselectionnee == 2):
            for (var i = 0; i < products.length; i++) {
                if (products[i].category == categoryItem) {
                    categoryTable = categoryTable + `
            <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div class="featured__item">
                <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                    <ul class="featured__item__pic__hover">
                        <li><img src="pomme.jpg"></li>
                    </ul>
                </div>
                <div class="featured__item__text">
                    <h6><a href="#">${products[i].name}</a></h6>
                    <h5>${products[i].price}</h5>
                </div>
            </div>
        </div>`

                }

                break;
            } document.getElementById('category').innerHTML = categoryTable;
        case (valeurselectionnee == 3):
            for (var i = 0; i < products.length; i++) {
                categoryTable = categoryTable + `<div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="category" class="col-form-label">Category</label>
                </div>
                <div class="col-auto">
                  <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
                </div>
                <div class="col-auto">
                  <span id="passwordHelpInline" class="form-text">
                    Must be 8-20 characters long.
                  </span>
                </div>
              </div>`

            }

            break;
    }document.getElementById('price').innerHTML = shopTable;
}

function dynamicHeader() {
    var connectedUser = localStorage.getItem('connectedUser');
    var header = ``;

    if (connectedUser) {
        var user = searchById('users', connectedUser);
        if (user.role == 'users') {
            header = `<nav class="header__menu">
				<ul>
                <li><a href="./index.html">Home</a></li>
                    <li><a href="./shop.html">Shop</a></li>
                    <li><a href="./basket.html">Basket</a>
                    <li><a href="./profile.html">${user.firstName}${user.lastName}</a>
                    <li><a href="#">Logout</a></li>
				</ul>
            </nav>`;

        } else {
            header = `<nav class="header__menu">
			<ul>
				<li class="active"><a href="./index.html">Home</a></li>
                <li><a href="./admin2.html">Admin</a></li>
                <li><a href="./AddProduct.html">Add product</a></li>
				<li><a href="#">${user.firstName}${user.lastName}</a>
					<li><a onclick="logOut()" href="#">logout</a></li>
			</ul>
		</nav>`;
        }
    } else {
        header = `<nav class="header__menu">
		 <ul>
			 <li class="active"><a href="./index.html">Home</a></li>
			 <li><a href="./shop-grid.html">Shop</a></li>
             <li><a href="./contact.html">Contact</a></li>
             <li><a href="./login.html">login</a></li>
             <li><a href="./signup.html">signup</a></li>
			 
		 </ul>
	 </nav>`;
    }
    document.getElementById('header').innerHTML = header;
}
function editProfile() {
    var connectedUser = localStorage.getItem('connectedUser');
    var user = searchById('users', connectedUser);
    document.getElementById("firstNameInput").innerHTML = user.firstName;
    document.getElementById("lastNameInput").innerHTML = user.lastName;
    document.getElementById("emailInput").innerHTML = user.Email;
    document.getElementById("passwordInput").innerHTML = user.pwd;



}
function editParameters() {
    var connectedUser = localStorage.getItem('connectedUser');
    var newPasswordInput = document.getElementById("newPasswordInput").value;
    var telInput = document.getElementById("telInput").value;
    var users = getObjectfromLS('users');
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == connectedUser) {
            users[i].pwd = newPasswordInput;
            users[i].tel = telInput;
        }

    } localStorage.setItem('users', JSON.stringify(users));



}

function editObject(id) {
    var product = searchById('products', id);
    var editTable = `
    <div class="col-lg-8 col-md-12">
                            <div class="checkout__input" >
                                <p style="margin: auto ;">Stock</p>
                                <input type="text" id="newStock" value=${product.stock}>
                            </div>
                            <div class="checkout__input" >
                                <p >Price</p>
                                <input type="text" id="newPrice" value=${product.price}></div>
 
                    </div>
                    <button type="submit" class="site-btn for form_center" style="margin-left: 45%;" onclick="validateEdit(${product.id})">Edit</button>

                 </div>`;
    document.getElementById(`editBloc${id}`).innerHTML = editTable;
}

function validateEdit(id) {
    var newStock = document.getElementById('newStock').value;
    var newPrice = document.getElementById('newPrice').value;
    var products = getObjectfromLS('products');
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].stock = newStock;
            products[i].price = newPrice;
            break;
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();

}

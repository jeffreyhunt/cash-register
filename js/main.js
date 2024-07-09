//Angulas JS code

//View Controller
function itemsController($scope) {
  
  //declaring global variables
  var discount_applied = false;
  
  //initializing view-controller variables
  $scope.cart =[];
  $scope.discount_row =[];
  
 //Populating lists 
 $scope.product_list = [
    {code: '0001', quantity: 0, price: 2.00,  name: 'Oranges', label: 'Oranges'},
    {code: '0002', quantity: 0, price: 5.35,  name: 'Bananas', label: 'Bananas'},
    {code: '0003', quantity: 0, price: 1.05,  name: 'Mangoes', label: 'Mangoes'},
    {code: '0004', quantity: 0, price: 8.05, name: 'Pawpaw', label: 'Pawpaw'},
    {code: '0005', quantity: 0, price: 10.00, name: 'Roman Ruby Grapes', label: 'Roman Ruby Grapes'},
    {code: '0006', quantity: 0, price: 5.50, name: 'Mushrooms', label: 'Mushrooms'},
    {code: '0007', quantity: 0, price: 20.95, name: 'Pet Food', label: 'Pet Food'},
    {code: '0008', quantity: 0, price: 9.00, name: 'Cupcakes', label: 'Cupcakes'},
    {code: '0009', quantity: 0, price: 1.00, name: 'Magazines', label: 'Magazines'},
    {code: '0010', quantity: 0, price: 4.50, name: 'Bread', label: 'Bread'},
    {code: '0011', quantity: 0, price: 2.50, name: 'Tea', label: 'Tea'},
    {code: '0012', quantity: 0, price: 3.50, name: 'Coffee', label: 'Coffee'},
    {code: '0013', quantity: 0, price: 5.00, name: 'Biscuits', label: 'Biscuits'},
    {code: '0014', quantity: 0, price: 5.00, name: 'Caramel Slice', label: 'Caramel Slice'},
    {code: '0015', quantity: 0, price: 6.50, name: 'Juice', label: 'Juice'},
    {code: '0016', quantity: 0, price: 4.50, name: 'Chai', label: 'Chai'},
    {code: '0017', quantity: 0, price: 0.50, name: 'Raffle Tickets', label: 'Raffle Tickets'}
];
  $scope.employee_list = [
    {code: '1', name:'Paddington Bear', discount: 20},
    {code: '2', name:'Mr Brown', discount: 25},
    {code: '3', name:'Mrs Brown', discount: 21},
    {code: '4', name:'Mrs Bird', discount: 23},
    {code: '5', name:'Jonathan Brown', discount: 20},
    {code: '6', name:'Judy Brown', discount: 28},
    {code: '7', name:'Mr Gruber', discount: 16},
    {code: '8', name:'Aunt Lucy', discount: 22}
];
  
//Declaring view controller methods
  
//This method searches for a NAME in a generic dictionary LIST  
 $scope.search_list = function(name, list){
  var item= [];
  for (var i in list) {
    if (name == list[i].name) {
      item = list[i];
      break;
    }
  }
  return item;
}
 
 // This method is called when the user inputs a product name
 // It creates an object containing a single product's data
  $scope.select_product = function() {
    $scope.product = $scope.search_list($scope.inputed_product_name, $scope.product_list);
    $scope.product_cost = $scope.product.price;
  }
  
  //This method updates the product object when user enters quantity needed
  $scope.select_quantity = function() {
    $scope.product.quantity = $scope.inputed_product_quantity;
  }
  
  //This method puts the product object into the cart and then reiniatilizes the product as well as all the data the user inputed
  $scope.add_to_cart = function () {
   if ($scope.product.name !=undefined && $scope.product.quantity > 0) {
     $scope.cart[$scope.cart.length] = $scope.product;
     $scope.product=undefined;
     $scope.inputed_product_name = "";
     $scope.product_cost = "";
     $scope.inputed_product_quantity = "";
   }
  }
  
  //This method removes the last entered product from the cart
  $scope.void_last_transaction = function() {
    $scope.cart.pop();
  }
  
  //This method empties the cart incl. the discounts applied
  $scope.void_sale = function() {
  	$scope.cart = [];
    $scope.discount_row = [];
    $scope.product = undefined;
  }
  
  //This method applies the employee discount 
  $scope.apply_discount = function() {
    if ($scope.purchasing_employee.name !=undefined) {
      $scope.discount_row[$scope.discount_row.length] = $scope.purchasing_employee;
      discount_applied = true;
    } 
  }
 
  //This method calculates the overall bill
  $scope.total = function() {
    if ($scope.cart.length > 0) {
      var sum = 0;
    	for (var i in $scope.cart) {
      	sum += $scope.cart[i].price * $scope.cart[i].quantity;
      }
      var empDiscount = 0;
      if (discount_applied) {
      	empDiscount += $scope.discount_row[0].discount;
      }
      sum *= 1- empDiscount/100;
    }
    return sum;
  }
  
 }
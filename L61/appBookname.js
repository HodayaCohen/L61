//הויו לא יכול לתקשר מול ה סביס, אלא רק באמצעות הכונטרולר
//שיעור 61, קפצנו לשיעור 64, תרגול קונטרולר וסרביס - הוספה לסל קניות
//שיעור 65 למדנו על פילטרים, פילטרי בסיס וגם פילטר בבניה עצמית כמו cap.... יש קובץ פילטר מופרד וגם קישור בביו
//שיעור 66 למדנו על ראוטר


var bookName  = angular.module('bookName',['ngRoute']);

//שיעור 66  19.11 
bookName.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl : "books.html"
    })
    .when('/order',{
        templateUrl : "order.html"
    })
});

bookName.service('cardservie', function(){
    this.booksInCart = [];

    this.addToCard = function(x){
        this.booksInCart.push(x);
    };
    
    this.getItemInCart = function(){
        return JSON.stringify(this.booksInCart);
    }
});

bookName.service ('orderService', function(){
    this.placeOrder = function(user, book){
        consol.log(user);
        consol.log(books);
    }
});

bookName.controller('student', function Math($scope,cardservie){
    $scope.books=[
     new book('history','images/images1.jpg',123),
     new book('nath','images/images1.jpg',234 ),
     new book('ttrigo','images/images3.png',345)
    ]

    function book(name, imgUri, isbn){
        this.name=name;
        this.imgUri=imgUri; 
        this.isbn = isbn;
        
    }

   $scope.addItem = function(isbn){
    cardservie.addToCard(isbn);
   }

});

bookName.controller('showCartCtrl', function($scope,cardservie){
        $scope.getCart = function(){
            $scope.items = cardservie.getItemInCart();
        }
});

bookName.controller('byCtrl', function($scope,cardservie, orderService){
    $scope.user={
        firstname: '',
        lastname: '',
    }
    $scope.order= function(){
        orderService.placeOrder($scope.user,cardservie.getItemInCart())
    }

});

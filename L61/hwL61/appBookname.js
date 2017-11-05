//שיעור 61, קפצנו לשיעור 64, תרגול קונטרולר וסרביס - הוצפה לסל קניות
var bookName  = angular.module('bookName',[]);

bookName.service('cardservie', function(){
    this.booksInCart = [];

    this.addToCard = function(x){
        this.booksInCart.push(x);
    };
    
    this.getItemInCart = function(){
        return JSON.stringify(this.booksInCart);
    }
});


bookName.controller('student', function Math($scope,cardservie){
    $scope.books=[
        
     new book('History','images/images1.jpg',123),
     new book('Nath','images/images1.jpg',234 ),
     new book('trigo','images/images3.png',345)
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
            $scope.items = cardservie.
        }

});

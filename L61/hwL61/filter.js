
bookName.filter('CapFirstLetter', function(){
    //פונקציית עזר
   function CapFirstLetter(string){
       return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return function(input){
        for(let i = 0; i<input.length; i++){
            input[i].name = CapFirstLetter(input[i].name);
        }
        return(input);
     }

    });
//לבנות פילטר שמקבל את האיביאסאן של הספר ולהציג כיתוב לייד הספר שהוא  best seller

bookName.filter('bestSeller', function(){
    ///כאן כותבים פונקציית עזר! לא חייבים תמיד לכתוב כאן משהו
    return function(input, isbn){
          
        for (let i =0; i<input.length; i++)
            if (input[i].isbn==isbn){
                input[i].isbn+="bestSeller" ;
            }
        return input;    
    }
});

// SELECT REWARD BUTTON 1

// TARGET SELECT REWARD BUTTON

var amountLeftButton = $(".amountLeftButton1");

// // DECIDE WHAT WILL HAPPEN ON CLICK

    amountLeftButton.click(function() {
        var amount = $(".numbers101").html();

        var number = parseInt(amount); 

        number --; 

        $(".numbers101").text(number);
        ;
      });

// SELECT REWARD BUTTON 2      

// TARGET SELECT REWARD BUTTON


      var amountLeftButton2 = $(".amountLeftButton2");

// // DECIDE WHAT WILL HAPPEN ON CLICK

    amountLeftButton2.click(function() {
        var amount = $(".numbers64").html();

        var number = parseInt(amount); 

        number --; 

        $(".numbers64").text(number);
        ;
      });
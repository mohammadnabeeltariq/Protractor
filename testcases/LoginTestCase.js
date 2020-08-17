describe("mysuite", function() {

    it("validate title", function() {
     
        //opening browser
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');

        //wait for 4 seconds
        browser.sleep(4000);

        //maximize the browser
        browser.manage().window().maximize();

         //wait for 4 seconds
         browser.sleep(4000);

        //actual title
        var actual_result = browser.getTitle();

        //expected title
        var expected_result = "CafeTownsend-AngularJS-Rails";
        
         //wait for 4 seconds
         browser.sleep(4000);

        //verifying that linke opens correct page
        expect(actual_result).toBe(expected_result);

     
    });




    it("validate login", function() {
     
        
        element(by.model("user.name")).sendKeys("Luke");

        element(by.model("user.password")).sendKeys("Skywalker");

        element(by.buttonText("Login")).click();

        //wait for 3 seconds
        browser.sleep(4000);

     
    });



    it("add new user", function() {
     
        //opening browser
        browser.get('http://www.trycatchclasses.com/code/demo/angular_crud/#');

        browser.sleep(7000);

        //maximize the browser
        browser.manage().window().maximize();

        //click on add user button
        element(by.css('span[ng-click="addUser()"]')).click();
        


        //filling the details of user in inout boxes
        element(by.model("UserFirstname")).sendKeys("NABEEL");
        browser.sleep(2000);
        
        element(by.model("UserLastname")).sendKeys("TARIQ");
        browser.sleep(2000);

        element(by.model("UserType")).sendKeys("G");
        browser.sleep(3000);

        //click on check box
        element(by.model("UserActive")).click();
        browser.sleep(3000);        

        //click on save button
        element(by.css('[ng-click="AddUpdateUser()"]')).click();

        //wait for 3 seconds
        browser.sleep(2000);

        //switch to alert box
        let alert = browser.switchTo().alert();
        browser.sleep(3000);

        //verifying that user is added succesfully
        var actual_result = alert.getText();   
        browser.sleep(3000);
        expect(actual_result).toEqual("User Information Added Successfully");
        browser.sleep(3000);

        //closing the alert
        alert.accept();
        browser.sleep(5000);

        //handling drop down
        element(by.model("search.type")).element(by.css('option[value="number:5"]')).click();
        browser.sleep(4000);
     
    });




    it("View product details", function() {

         //opening browser
         browser.get('https://dassdevarajan.github.io/demo-app/');
         browser.sleep(7000);

         //maximize the browser
        browser.manage().window().maximize();
        
         //storing values in variable to veridy it on view page
         var product_name = "1001 Activities Book";
         var description ="Designed for preschool kids, the 1001 Activities Book is an educational activity book that promises to engage tiny tots with their first educative lessons in a playful and fun-filled manner.";
         var category ="Books";
         var quantity = "300";
         var unit_price = "4"; 
         var supplier = "ABC Publications";
         var returnable ="false";     
         
         browser.sleep(3000);
      
      
         // var product_name =  element.all(by.tagName('tr')).last().element(by.tagName('td')).get(0).getText();
       
         //clciking on view icon
        element.all(by.tagName('tr')).last().element(by.id('view')).click();
        browser.sleep(7000);

        //verifying the values are correct or not
        expect(element.all(by.tagName('tr')).get(0).element(by.tagName('td')).getText()).toBe(product_name);
        expect(element.all(by.tagName('tr')).get(1).element(by.tagName('td')).getText()).toBe(description);
        expect(element.all(by.tagName('tr')).get(2).element(by.tagName('td')).getText()).toBe(category);
        expect(element.all(by.tagName('tr')).get(3).element(by.tagName('td')).getText()).toBe(quantity);
        expect(element.all(by.tagName('tr')).get(4).element(by.tagName('td')).getText()).toBe(unit_price);
        expect(element.all(by.tagName('tr')).get(5).element(by.tagName('td')).getText()).toBe(supplier);
        expect(element.all(by.tagName('tr')).get(6).element(by.tagName('td')).getText()).toBe(returnable);
        browser.sleep(7000);

      });


      it("Navigate to product list", function() {

        element(by.id("list-menu")).click();
        browser.sleep(5000);
        expect(element(by.tagName("h3")).getText()).toBe("Product List");
        browser.sleep(3000);
      });



      it("Delete Product", function() {

        browser.sleep(5000);
        element.all(by.tagName('tr')).get(1).element(by.id('delete')).click();
        browser.sleep(3000);
       
      });









});


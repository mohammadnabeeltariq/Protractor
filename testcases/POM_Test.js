let studentpage = require('..//Page/StudentPage.js')

describe("mysuite", function() {

    it("add record", function() {

    
        studentpage.get("http://www.trycatchclasses.com/code/demo/angular4_crud/");

        studentpage.setName("NABEEL");
        browser.sleep(3000);
        
        studentpage.setContact("4947386");
        browser.sleep(3000);
        
        studentpage.setSubject("JS");
        browser.sleep(3000);

        studentpage.setMarks("77");
        browser.sleep(3000);

        studentpage.clickSubmit
        browser.sleep(3000);

        studentpage.verifyresult("NABEEL","4947386","JS","77");
        browser.sleep(3000);
    });


});
let studentpage = function(){

    let namefield = element(by.name("name"));
    let contactfield = element(by.name("contact"));
    let subjectfield = element(by.name("subject"));
    let marksfield = element(by.name("marks"));
    let submitbtn = element(by.css("input[value='Submit']"));


    this.get=function(url)
    {
        browser.get(url);

    }


    this.setName=function(name)
    {
        namefield.sendKeys(name);
    }


    this.setContact=function(contact)
    {
        contactfield.sendKeys(contact);
    }

    this.setSubject=function(subject)
    {
        subjectfield.element(by.xpath("//option[contains(text(), '"+subject+"')]")).click();
    }

    this.setMarks=function(marks)
    {
        marksfield.sendKeys(marks);
    }

    this.clickSubmit =function(marks)
    {
        submitbtn.click();
    }

    this.verifyresult=function(name,contact,subject,marks)
    {
        let rows = element.all(by.tagName('tr'));

        expect(rows.get(0).element(by.xpath("//td[2]")).getText()).toBe(name);
        expect(rows.get(0).element(by.xpath("//td[3]")).getText()).toBe(contact);
        expect(rows.get(0).element(by.xpath("//td[4]")).getText()).toBe(subject);
        expect(rows.get(0).element(by.xpath("//td[5]")).getText()).toBe(marks);

    }

};

module.exports=new studentpage();
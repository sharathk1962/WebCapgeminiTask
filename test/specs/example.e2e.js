const { default: pause } = require("webdriverio/build/commands/browser/pause");
const expectChai = require('chai').expect;

describe('Launching browser and registering user', function() {
   it('Registering a user', function() {
        browser.pause(4000);
        browser.url('/');
        browser.maximizeWindow();
       const signin= $('a.login').click();
       browser.pause(2000);
     $('#email_create').setValue( 'sharath14@gmail.com');
     const createacct= $('#SubmitCreate').click();
     browser.pause(4000);
     const gender= $('#id_gender1').click();
     $('#customer_firstname').setValue( 'Sharath');
     $('#customer_lastname').setValue( 'Kumar');
     $('#passwd').setValue( 'qwerty');

     const selectday= $('#days').click();
     $('#days').selectByIndex(5);

     const selectmonth= $('#months').click();
     $('#months').selectByIndex(3);
     
     const selectyear= $('#years').click();
     $('#years').selectByIndex(2);

     $('#firstname').setValue( 'Suraj');
     $('#lastname').setValue( 'Shet');
     $('#address1').setValue( 'Shristi Apartments');
     $('#city').setValue( 'Banaglore');

     const selectstate= $('#id_state').click();
     $('#id_state').selectByIndex(7);

     $('#postcode').setValue( '75431');
     
     $('#phone_mobile').setValue( '9738237272');
     $('#alias').setValue( 'Bengaluru');
     
     browser.pause(6000);
     
     const register= $('#submitAccount').click();
     const homepageicon= $('img.logo.img-responsive').click();
     
    const username = browser.$('div.header_user_info > a > span').getText()
    expectChai(username).to.equal('Sharath Kumar');
    
    });    


  it('Should search for Tshirt and add it to the cart', function() {
    browser.url('/');
    browser.maximizeWindow();
       const search=$('#search_query_top');
        search.setValue('t-shirts');
      $('button.btn.btn-default.button-search').click();
        browser.pause(3000);
        $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img').click();
        browser.pause(2000);
        $('#add_to_cart > button').click();
        browser.pause(2000);
    $('div.button-container > a').click();
    browser.pause(3000);
const elem = browser.$('td.cart_description > p > a').getText()
        expectChai(elem).to.equal('Faded Short Sleeve T-shirts');
    

    });   

});

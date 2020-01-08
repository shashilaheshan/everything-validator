Everything validator package used for validate inputs from user here you can validate All form fields, 
Email,Password,Letters,Digits,Birth day,String,Phone number,URL,Json,IP,Distance,Time,File,ImageExtensions etc..

USAGE 

let validator = require('everything-validator')

console.log(validator.isEmail("shashi@m.com")); 
// validate standard email type and return true

console.log(validator.isBirthDay("30/01/1995", "dd/mm/YYYY")); 
// allowed types dd/mm/YYYY | dd-mm-YYYY | YYYY-mm-dd return true

console.log(validator.isPassword("test!@#", { length: 5, type: "special"})); 
// alowed option values length = XX ,type = special -contain at least one special characters | letters-contain only letters |digits- contain only numbers | numchar - Contain only numbers and letters and return true

console.log(validator.isLetters("SHASHILAsas")); 
//validate only letters and return true

console.log(validator.isDigits("12344")); 
//validate only digits and return true

console.log(validator.isPhoneNumber("0712148820")); 
//validates phone number and return true

//valid types

//123) 456-7890
// (123)456-7890
// 123-456-7890
// 123.456.7890
// 1234567890
// +31636363634
// 075-63546725

console.log(validator.isUrl("https://www.techtman.tech")); 
// validate web url, api url and return true

console.log(validator.isJsonObject('{"name":"shash"}')); 
// validate standard json object and return true

console.log(validator.isIPAddress("127.0.0.1")); 
// validate standard ip address  and return true

console.log(validator.isFileName("testfile.doc")); 
//alllowed file types docx|doc|pdf|xml|bmp|ppt|xls|pptx|xsls|json and return true

console.log(validator.isImageName("testimage.png")); 
//alllowed file types png|jpg|jpeg|gif|bitmap|webp|tiff|bmp|psd|pdf|eps|ai|indd|raw and return true
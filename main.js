const checkStockTicker = (string) => {
    return /^[A-Z]{3,5}$/.test(string);
};

const checkCreditCardNumbers = (string) => {
    return /^[0-9]{3,4}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/.test(string);
}

const checkLink = (string) => {
    return /^https?:\/\/[a-zA-Z0-9]+[.]\S+/.test(string);
}

//Tickers
console.assert((checkStockTicker("GOOG") === true), "GOOG is not a valid ticker")
console.assert((checkStockTicker("123") === false), "123 is not a valid ticker")
console.assert((checkStockTicker("I love GOOG") === false), "I love GOOG is not a valid ticker")
console.assert((checkStockTicker("goog") === false), "goog is not a valid ticker")
console.assert((checkStockTicker(" APL ") === false), "That is not a valid ticker")
console.assert((checkStockTicker("AAPL") === true), "That is not a valid ticker")
console.assert((checkStockTicker("MDB") === true), "That is not a valid ticker")

//Card numbers
console.assert(checkCreditCardNumbers('123') === false, "That is not a valid card number");
console.assert(checkCreditCardNumbers('4916-1037-2987-6885') === true, "That is not a valid card number");
console.assert(checkCreditCardNumbers('4916-1037-2987-6885-') === false, "That is not a valid card number");
console.assert(checkCreditCardNumbers('2221005652604065') === true, "That is not a valid card number");
console.assert(checkCreditCardNumbers('A-54098') === false, "That is not a valid card number");

//Links
console.assert(checkLink('https://google.com') === true, "That is not a valid link");
console.assert(checkLink('https') === false, "That is not a valid link");
console.assert(checkLink('http://facebook.com/mysite.html?q=hello') === true, "That is not a valid link");
console.assert(checkLink('http//facebook.com/mysite.html?q=hello') === false, "That is not a valid link");
console.assert(checkLink('http://facebook/mysite.html?q=hello') === false, "That is not a valid link");


//Regex code for searching through html for List of Community Episodes at https://en.wikipedia.org/wiki/List_of_Community_episodes#Season_1_(2009%E2%80%9310)
//Use $2$3: $4 to get the results formatted nicely.
let regex = /left">"(<a href="[^"]+" title="[^"]+">([^<]+)<\/a>)?([^<"]+)?"<\/td>[^#]+#[^>]+>[^(]+\(<span class="bday dtstart published updated">([^<]+)/
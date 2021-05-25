var express = require ("express");
var router = express.Router();
var https = require("https");
const fetch = require("node-fetch");
//const fetch = require("request");

router.get("/", function(req, res, next){
	res.send("API is working properly");
});

router.get('/items', function (req, res, next) {
  		const query = req.query.q;

      console.log(req.query.q);

  		var url = "https://api.mercadolibre.com/sites/MLA/search?q="+query;
  		https.get(url, (resp)=>{
  			let data = '';

  			resp.on('data', (chunk) => {
  				data+=chunk;
  			});

  			resp.on('end',()=>
  			{
  				var results = JSON.parse(data).results;
  				var result = "";
  				result = {
  						"author":
  						{
  							"name":"camila",
  							"lastname":"casuscelli"
  						},
  						"categories":[],
  						"items":[]
  					}
  				for(var i=0; i<4; i++){
						var priceFormatter = new Intl.NumberFormat(undefined, {
						  style: 'currency',
						  currency: results[i].currency_id,
						});
  					var item =
  					{
	  					"id":results[i].id,
	  					"title":results[i].title,
	  					"price":
	  					{
	  						"currency":results[i].currency_id,
	  						"amount":priceFormatter.format(results[i].price),
	  						"decimals":"0",
	  					},
	  					"picture":results[i].thumbnail,
	  					"condition":results[i].condition,
	  					"free_shipping":results[i].shipping.free_shipping,
              "location":results[i].address.state_name
	  				}
	  				result.items.push(item);
            console.log(results[i].title);
  				}
  				res.send(result)
  			})
  		});
	})

router.get('/items/:id', function(req,res,next){
  //console.log(req)
  itemsUrl = 'https://api.mercadolibre.com/items/'+req.params.id;
  descriptionUrl = 'https://api.mercadolibre.com/items/'+req.params.id+'/description';
  Promise.all([
    fetch(itemsUrl),
    fetch(descriptionUrl)
  ]).then(function (responses) {
    // Get a JSON object from each of the responses
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  }).then(function (data) {
    // Log the data to the console
		var originalPrice = data[0].price;
		var auxiliardecimal = originalPrice - Math.floor(originalPrice);
		console.log(auxiliardecimal.toFixed(2));
		var decimalPrice = 100* auxiliardecimal.toFixed(2);

		//n - Math.floor(n)
		var finalPrice = Math.trunc(originalPrice);
		var priceFormatter = new Intl.NumberFormat(undefined, {
			style: 'currency',
			currency: data[0].currency_id,
			minimumFractionDigits: 0
		});
		var remaining = priceFormatter.format(finalPrice); //slice(-2)

		//var aux = remaining.slice(-2);
		//console.log(aux);
		//console.log(aux2);
    var response = {
        "author":{
          "name":"camila",
          "lastname":"casuscelli"
        },
        "item":{
          "id":data[0].id,
          "title":data[0].title,
          "price":{
            "currency":data[0].currency_id,
            "amount":remaining,
            "decimals":decimalPrice
          },
          "picture":data[0].thumbnail,
          "condition":data[0].condition,
          "free_shipping":data[0].shipping.free_shipping,
          "sold_quantity":data[0].sold_quantity,
          "description":data[1].plain_text
        }
    }
    res.send(response);
  }).catch(function (error) {
    // if there's an error, log it
    console.log(error);
  });
  })

module.exports = router;

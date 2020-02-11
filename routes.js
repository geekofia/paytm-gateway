const checksum_lib = require('./checksum/checksum')
const port = 5000
const KEY = ''

let ID = Math.floor(Math.random() * 100001);
let CUST_ID = "CUST" + ID
let ORDER_ID = "ORD" + ID

let params ={}
params['MID'] = ''
params['WEBSITE'] = 'WEBSTAGING'
params['CHANNEL_ID'] = 'WEB'
params['INDUSTRY_TYPE_ID'] = 'Retail'
params['CALLBACK_URL'] = 'http://localhost:' + port + '/callback'
params['ORDER_ID'] = ORDER_ID
params['CUST_ID'] = CUST_ID



module.exports = (app) => {
    app.get('/payment/nano', (req,res) => {
        params['TXN_AMOUNT'] = '15',

        checksum_lib.genchecksum(params, KEY,function(err,checksum){
            let txn_url = "https://securegw-stage.paytm.in/order/process"

            let form_fields = ""
            for(x in params)
            {
                form_fields += "<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"

            }

            form_fields+="<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' />"

            var html = '<html><body><center><h1>Please wait! Do not refresh the page</h1></center><form method="post" action="'+txn_url+'" name="f1">'+form_fields +'</form><script type="text/javascript">document.f1.submit()</script></body></html>'
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(html)
            res.end()
        })
    })

    app.get('/payment/micro', (req,res) => {
        params['TXN_AMOUNT'] = '25',

        checksum_lib.genchecksum(params, KEY,function(err,checksum){
            let txn_url = "https://securegw-stage.paytm.in/order/process"

            let form_fields = ""
            for(x in params)
            {
                form_fields += "<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"

            }

            form_fields+="<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' />"

            var html = '<html><body><center><h1>Please wait! Do not refresh the page</h1></center><form method="post" action="'+txn_url+'" name="f1">'+form_fields +'</form><script type="text/javascript">document.f1.submit()</script></body></html>'
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(html)
            res.end()
        })
    })

    app.get('/payment/mini', (req,res) => {
        params['TXN_AMOUNT'] = '35',

        checksum_lib.genchecksum(params, KEY,function(err,checksum){
            let txn_url = "https://securegw-stage.paytm.in/order/process"

            let form_fields = ""
            for(x in params)
            {
                form_fields += "<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"

            }

            form_fields+="<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' />"

            var html = '<html><body><center><h1>Please wait! Do not refresh the page</h1></center><form method="post" action="'+txn_url+'" name="f1">'+form_fields +'</form><script type="text/javascript">document.f1.submit()</script></body></html>'
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(html)
            res.end()
        })
    })


    app.get('/payment/macro', (req,res) => {
        params['TXN_AMOUNT'] = '45',

        checksum_lib.genchecksum(params, KEY,function(err,checksum){
            let txn_url = "https://securegw-stage.paytm.in/order/process"

            let form_fields = ""
            for(x in params)
            {
                form_fields += "<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"

            }

            form_fields+="<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' />"

            var html = '<html><body><center><h1>Please wait! Do not refresh the page</h1></center><form method="post" action="'+txn_url+'" name="f1">'+form_fields +'</form><script type="text/javascript">document.f1.submit()</script></body></html>'
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(html)
            res.end()
        })
    })

    app.get('/payment/max', (req,res) => {
        params['TXN_AMOUNT'] = '101',

        checksum_lib.genchecksum(params, KEY,function(err,checksum){
            let txn_url = "https://securegw-stage.paytm.in/order/process"

            let form_fields = ""
            for(x in params)
            {
                form_fields += "<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"

            }

            form_fields+="<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' />"

            var html = '<html><body><center><h1>Please wait! Do not refresh the page</h1></center><form method="post" action="'+txn_url+'" name="f1">'+form_fields +'</form><script type="text/javascript">document.f1.submit()</script></body></html>'
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(html)
            res.end()
        })
    })

    app.get('/payment/huge', (req,res) => {
        params['TXN_AMOUNT'] = '201',

        checksum_lib.genchecksum(params, KEY,function(err,checksum){
            let txn_url = "https://securegw-stage.paytm.in/order/process"

            let form_fields = ""
            for(x in params)
            {
                form_fields += "<input type='hidden' name='"+x+"' value='"+params[x]+"'/>"

            }

            form_fields+="<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' />"

            var html = '<html><body><center><h1>Please wait! Do not refresh the page</h1></center><form method="post" action="'+txn_url+'" name="f1">'+form_fields +'</form><script type="text/javascript">document.f1.submit()</script></body></html>'
            res.writeHead(200,{'Content-Type' : 'text/html'})
            res.write(html)
            res.end()
        })
    })
}
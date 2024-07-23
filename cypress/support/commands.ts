

Cypress.Commands.add('loginByApi', (login: string, password: string) => {
    cy.request({
        method: 'POST',
        url: 'https://demo.1crmcloud.com/json.php?action=login',
        headers: {
            'accept': '*/*',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            'cookie': 'LOGIN=b56689e2c1ae724e060a105d5a3372161d71369b; PHPSESSID=8lfutmc1vgjistnb4rsp4p38va; UNKNOWN=72abfccf019bd72146d176f557a6b057e42b66ad; UNKNOWN=22d9ed2d9e0bd95932b43b44b0c8ebe816ade6b5; ck_login_forget=1',
            'origin': 'https://demo.1crmcloud.com',
            'pragma': 'no-cache',
            'priority': 'u=1, i',
            'referer': 'https://demo.1crmcloud.com/login.php',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'x-onecrm-csrf-token': '72abfccf019bd72146d176f557a6b057e42b66ad'
        },
        body: {
            "res_width": 1003,
            "res_height": 924,
            "username": Cypress.env('login'),
            "password": "admin",
            "captcha": "", "remember": "",
            "language": "en_us",
            "theme": "Flex",
            "mobile": "0",
            "gmto": -60,
            "in_frame": false
        }
    }).then((response) => {
        var token = response.body.json_session_id;
        cy.setCookie('PHPSESSID', token);
    });
});










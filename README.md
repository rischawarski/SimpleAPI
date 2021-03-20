# Simple API


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)



And a small API that consumes an array of objects

- NodeJS
- Express
- Body-Parser

- ## Features

- list family
- list a member
- creates new member
- edit member
- delete member


Made from the NodeJS Training Course taught by Professor [Victor Lima][teach] on the udemy platform

> my goal is to show what i learned while i was learning API rest



## Installation

SimpleAPI requires [Node.js](https://nodejs.org/) v10+ to run.
To edit delete or create members you have to use postman


> Show all Family

- method get url =  localhost:3000/members

> Show a Member of the Family

- method get url = localhost:3000/member/id

> Create a Member of the Family

- method post url = localhost:3000/member

> Edit Member of the Family

- method put url = localhost:3000/member/id


> Delete a Member of the Family

- method delete url = localhost:3000/member/id



```sh
cd SimpleAPI
npm i
node api.js
```

   [Express]: <http://expressjs.com>
   [body-parser]: <https://www.npmjs.com/package/body-parser>
   [node.js]: <http://nodejs.org>
   [teach]: <https://www.udemy.com/user/victor-lima-67/>

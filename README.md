A simple CLI to make web request with simple command, without using programs like postman or something

Example

```
$ requester

[1] GET
[2] POST
[3] DELETE
[4] HEAD
[5] OPTIONS
[0] CANCEL

? Request Method [1...5 / 0]: 1
? URL https://someurl.com/
? Headers (Empty = No Headers) 
Status Code 200
Response Body: Success
```

Note: i didn't try the cli fully, so if there is any problems please make a [issue case](https://github.com/KAMUI966/Requester/issues/new/choose)


# Installation
Using NPM:
```
$ npm i requester-cli -g
```
Using Yarn:
```
$ yarn global add requester-cli
```

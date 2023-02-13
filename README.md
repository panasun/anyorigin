# Anyorigin

Use this server to bypass cross-origin restrictions for frontend API fetching. POST and GET methods support sending any headers, body, and parameters.

Example

```javascript
const result = await axios({
  method: "get",
  url: `http://localhost:8080?url=${encodeURIComponent("https://example.com")}`,
  headers: {
    "Authorization": "Bearer Token1234"
  }
})
```

```javascript
const result = await axios({
  method: "post",
  url: `http://localhost:8080?url=${encodeURIComponent("https://example.com")}`,
  headers: {
    "Authorization": "Bearer Token1234"
  },
  body: {
    id: 1,
    data: "hello"
  }
})
```
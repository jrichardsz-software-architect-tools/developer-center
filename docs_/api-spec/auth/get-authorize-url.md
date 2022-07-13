<!--
{
  "order":3
}
-->
---
|endpoint-id|
|:-------|
|endpoint-102|

---

# Authorize Url

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


**Base Url** : `{{horusApiBaseUrl}}`

**Endpoint** : `/v1/spec/oauth2/authorize-url`

**Method** : `POST`

**Auth required** : Yes

- clientId & clientSecret in body. This will change in next release

## Request

**type: body**

```json
{
    "clientId":"78120249-1151-496c-b844-ff3f6d4fa770"
}
```

**Request Fields Description**

| key | data-type | required | description |
|------------|--------------|-------------|-------------|
| clientId  |  string | yes | clientId previosly registered and referenced to a web application|

**Request Headers Description**

| header key | header value | description |
|------------|--------------|-------------|
|  |   |   |


## Response

```json
{
    "code": 200000,
    "message": "success",
    "content": {
        "url": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=78120249-1151-496c-b844-ff3f6d4fa770&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2Fnonspec%2Foauth2%2Fmicrosoft%2Fcallback&response_mode=query&scope=offline_access+user.read+mail.read"
    }
}
```

**Response Fields Description**


| field | data-type | description |
|------------|--------------|-------------|
| code  | int | numeric value which indicates the success or failure of invocation. 200XYZ for success and any other value for failures  |
| message  | string | message related to code. On errors contains a description  |
| content.url  | string | url to be used in the browser. It will redirect the user to the microsoft secure login  |

**Response Headers Description**

| header key | header value | description |
|------------|--------------|-------------|
|  | ||

**Response codes**

- If response is success, http **status** will be **200** and **code** in body will be **200XYZ**
- If the invocation ends with error, http status will have the standard status: 401, 403, 500, 502, etc and the code in body will contain an extra numeric values to classify the error:
  - 400xyz
  - 401xyz
  - 403xyz
  - 500xyz
  - etcxyz


| code | description |
|------------|-------------|
| 400  | field is required.  |
| 401122  | clientId or clientScret are invalid.  |

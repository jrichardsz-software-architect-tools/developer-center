<!--
{
  "order":2
}
-->
---
|endpoint-id|
|:-------|
|endpoint-101|

---

# Client Authentication

Only specific client types will allow an access token without the user always being present. The client types that allow a no user present workflow include the Server Application client, Hybrid, Server-side Web Application client, or a User Based Server Application.

**Base Url** : `{{horusApiBaseUrl}}`

**Endpoint** : `/v1/nonspec/oauth2/auth/server`

**Method** : `POST`

**Auth required** : Yes

- clientId & clientSecret in body. This will change in next release

## Request

**type: body**

```json
{
"grantType":"client_credentials",
"clientId":"6f7503fc-2cc1-4cf1-b45c-e50f324bf8ca.usil.app.com",
"clientSecret":"b3209806-42da-402d-92dc-ab2f3ef8608b"
}
```

**Request Fields Description**

| key | data-type | required | description |
|------------|--------------|-------------|-------------|
| clientId  |  string | yes | clientId which allow the execution of this endpoint |
| clientSecret  |  string | yes | clientSecret related to clientId |
| grantType  |  string | yes | use **client_credentials** |

**Request Headers Description**

| header key | header value | description |
|------------|--------------|-------------|
| x-usil-request-id  |  4512451 | random alphanumeric value which identify this event |


## Response

```json
{
    "code": 200000,
    "message": "success",
    "content": {
        "expiresIn": "3600s",
        "accessToken": "eyJhbGciOiJIU***",
        "tokenType": "bearer"
    }
}
```

**Response Fields Description**


| field | data-type | description |
|------------|--------------|-------------|
| code  | int | numeric value which indicates the success or failure of invocation. 200XYZ for success and any other value for failures  |
| message  | string | message related to code. On errors contains a description  |
| content.accessToken  | string | token to be attached to any api invocation  |
| content.expiresIn  | string | token expiration in seconds  |

**Response Headers Description**

| header key | header value | description |
|------------|--------------|-------------|
| x-usil-request-id  |  ***** | value received in request headers or a  random alphanumeric value if client don't send it|

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

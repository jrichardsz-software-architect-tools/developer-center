
---
|endpoint-id|
|:-------|
|endpoint-103|

---


# Refresh Token

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

**Base Url** : `{{horusApiBaseUrl}}`

**Endpoint** : `/v1/nonspec/oauth2/token/refresh`

**Method** : `POST`

**Auth required** : No

**Permissions required** : No

## Request

**type: body**

```json
{
    "grantType":"refresh_token",
    "refreshToken":"eyJhbGciOiJIUz***frPTU"
}
```

**Request Fields Description**

| key | data-type | required | description |
|------------|--------------|-------------|-------------|
| refreshToken  |  string | yes | a valida refresh token |
| grantType  |  string | yes | rest endpoint or menu web registered in horus |

**Request Headers Description**

| header key | header value | description |
|------------|--------------|-------------|
|  | |  |


## Response

```json
{
    "code": 200000,
    "message": "success",
    "content": {
        "accessToken": "eyJhbGciOiJIUzI***Sk",
        "tokenType": "bearer",
        "expiresIn": "3600s"
    }
}
```

**Response Fields Description**


| field | data-type | description |
|------------|--------------|-------------|
| code  | int | numeric value which indicates the success or failure of invocation. 200XYZ for success and any other value for failures  |
| message  | string | message related to code. On errors contains a description  |
| content.accessToken  | boolean | token  |

**Response Headers Description**

| header key | header value | description |
|------------|--------------|-------------|
|  | |  |

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
| 403100  | token expired |
| 403101  | token malformed  |

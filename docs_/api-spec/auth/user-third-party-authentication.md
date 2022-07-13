<!--
{
  "order":1
}
-->

---
|endpoint-id|
|:-------|
|endpoint-100|

---


# User Authentication

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

**Base Url** : `{{horusApiBaseUrl}}`

**Endpoint** : `/v1/spec/oauth2/auth/user`

**Method** : `POST`

**Auth required** : Yes

- clientId & clientSecret in body. This will change in next release

## Request

**type: body**

```json
{
    "authorizationCode":"0.AQ8AHOS-ePx7***AA",
    "grantType":"authorization_code",
    "clientId":"9842ac25-4368-439d-b6c9-ba34b25d15d0",
    "applicationIdentifier":"acme-web"
}
```

**Request Fields Description**

| key | data-type | required | description |
|------------|--------------|-------------|-------------|
| authorizationCode  |  string | yes | auth code returned from third party service like microsoft, google, facebook, etc |
| grantType  |  string | yes | use authorization_code |
| clientId  |  string | yes | client id related to the web application |
| applicationIdentifier  |  string | yes | web identifier |

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
    "accessToken": "eyJhbGciOiJI***yIuI",
    "refreshToken": "eyJhbGciOiJIUzI1**RO-us",
    "tokenType": "bearer",
    "expiresIn": "3600s",
    "mail": "john_wick@acme.com",
    "displayName": "John Wick",
    "firstName": "John",
    "lastName": "Wick",
    "category": "cat1",
    "position": "pos1",
    "businessUnits": [{
      "identifier": "bus1",
      "profiles": [{
        "identifier": "profile1",
        "roles": [{
          "identifier": "role1",
          "options": [{
              "identifier": "opt1",
              "name": "opt1",
              "description": "opt1",
              "id": 1,
              "type": "WEB_OPTION",
              "value": "opt1",
              "order": 0
            },
            {
              "identifier": "opt2",
              "name": "opt2",
              "description": "opt2",
              "id": 2,
              "type": "WEB_OPTION",
              "value": "opt2",
              "order": 4
            }
          ]
        }]
      }]
    }]
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
| 400  | field is required.  |
| 401122  | clientId or clientScret are invalid.  |

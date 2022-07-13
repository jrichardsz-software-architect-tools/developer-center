
---

|app | app type | app id|depends_on |
|:------|:-------|:-------|:-------|
| payment-mobile | mobile | mobile-4567 | acme-api, oscorp-db, funny-smtp |
---

# Template Web

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

---
## Authentication

If its authentication is standard, show the common authentication link. If this web has its own authorization engine, describe it here.

---
## Authorization

Show business units, profile, roles and options:

|Business Unit | Profile/Role | Option | Type  |
|:------|:-------|:-------|:-------|
| Acme Enterprise | payment-admin | /payment/manage | web
| Acme Enterprise | payment-admin | /payment/provides | web
| Acme Enterprise | payment-admin | /payment/countries | web

---
## Technologies

|language | version  |
|:------|:-------|
| android | 3.1 |
| cordova | 5.1 |

---
## High Level Architecture

A little relevant but who am I to prohibit it:

- mobile > api  

---
## Developer Workspace

---
## Global Dependencies

List all the global dependencies required for the entire web application

<!--
@startmindmap
* acme-mobile
** looneytones-api
** coyote-api
** explosives-api
@endmindmap
-->

![](https://www.plantuml.com/plantuml/png/SoWkIImgoStCIybDBE3IKaXCpatLpSrFoin9vTBIKiZ9pyzBhIm14iMwYGMP8A7a_ChyabGOBxMY82U_EBCCAk-GcfS2DGm0)

|dependency | id  |
|:------|:-------|
| looneytones-api | ext-1001 |
| coyote-api | api-1002|
| explosives-api | api-1003 |

---
## Site Map

Definicion de las reglas de navegacion de las interfaces de usuario o User interface flow diagram para que cualquier miembro del equipo pueda saber con que urls o paginas del sistema por ambiente.

Tambien llamado : web site flow chart o flowchart infographic design wireframe UI

![](https://i.pinimg.com/originals/ec/b8/4b/ecb84b625de0ba43e8e56f9113b10e1d.jpg)


**Urls**

Cada una de las paǵinas o formularios que tengan url propia deben de ser mapeado en la siguiente tabla. Si se trata de popups, no tiene url

Id		  |Local		  | QA	         	| PROD 			|
------------- | ------------------- | ------------- | -------------
(01)  |  https://localhost:8080				|  https://qasweb.acme.edu.pe				| https://www.acme.edu.pe
(02)  |  https://localhost:8080/simulador				|  https://qasweb.acme.edu.pe/simulador

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit

## Features

More information about all the features (ui forms) of this web could be find in Self Service Docs, searching with **template-web**

Here a basic list of all features of this web:

| name | url | feature id |
|:------|:-------|:-------|
| login |  / | feauture-100|
| import student grades |  /student | feauture-101|


---
## Configurations

Usually, configurations are at backend layer or at feature level. Anyway if the web iitself required some kind of configurations, describe them here.

---
## Editors
| name | last updated |
|:------|-------|
| Jane Doe |  11 Nov 2020 |
| Kurt Weller |  21 Nov 2020 |

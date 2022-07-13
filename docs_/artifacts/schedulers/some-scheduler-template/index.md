
---

|app | app type | app id|depends_on |
|:------|:-------|:-------|:-------|
| fghi-scheduler | scheduler | api-91011 | acme-api, oscorp-db, funny-smtp |
---

# Notify medical appointment: Functional document

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---
## Authentication

Assuming that all the forms on a web has the dame authentication, just show the link of developer center for this web artifact.

---
## Authorization

Forms are related to features. Each feature could be accessed for users with specifics permissions (roles, profiles, grants, etc) in a specific business unit:


|Business Unit | Profile/Role | Option | Type  |
|:------|:-------|:-------|:-------|
| Acme Enterprise | finance-admin | /finance/search | web

---
## Technologies

|language | version  |
|:------|:-------|
| netcore | 3.1 |

---
## High Level Architecture

Specify the architecture type of the application this feature(form) belongs to

- Database1 : Scheduler : Database2
- Database1 : Scheduler : Mail Notification
- Uploaded csv : Scheduler : Database 2


Example:

<!--
@startuml
rectangle scheduler
database db1
database db2
scheduler -right-> db2
db1 -right-> scheduler
@enduml
-->

![img](https://www.plantuml.com/plantuml/png/SoWkIImgAStDuIfAJIv9p4lFILKeJiv8JIdDIItYIaaiIKnAB4vLI4aoL43c6N715Ide5cMcPvJese65WGeH0WY375BpKe2M0000)

If the application exist on the developer center, just show the url of architecture section

---
## Developer Workspace

---
## Direct Dependencies

Dependencies that have direct impact on the operation of the service. First level should be in the table and second level just in the diagram.

<!--
@startmindmap
* Notify medical appointment (scheduler)
** erp-api.com/v1/validation
** database-mysql-acme
** student-api/v1/export
*** ftp-erp
** report-api/v2/xls
*** azure-face-recognition
*** zoom-service
*** google-drive-service
@endmindmap
-->

![](https://www.plantuml.com/plantuml/png/FOz1JWCn34NtFKMM42cCu0Gz0NSmoP_1KX8RnpDgUtgQKh6BtdjVaS_3oRnnButq5CEdEA_Nq50uKmsaAjozeNju6VaRPQ-mrrEC0QQ9bD-ojELuNmwgNCXP-fJt5ttHG6hNyLCJvOQ9X-y5tUTkRd1HCR-B65RN1DCP6IRzQpwMInsFW6wx8QsKaGnPjixFlsAuYRGqO0TdFC0cibMaOdpWNvpHo_FENm00)



|app Id | dependency id |
|:------|:-------|
| erp-api | api-1001 |
| acme-mysql | database-100-101|
| report-api | api-1003 |

Usually an option of a web SPA, it only depends on the endpoints of certain rest apis and nothing else.

- Deep level dependencies of each endpoint must be in the developer center of that api.
- In case of monolithic applications, add all the dependencies of this feature (form).


---
## Flow Chart

Describes the logic and or steps of the algorithm used in the frontend. Starts with user and ends with a submit or any interaction with the backend services.

Example: Login form feature

![Activity Diagram](https://www.plantuml.com/plantuml/png/VOynJiHG34HxdsBa2f3s2h0jDIMY29k9iFJZ8DjX2QVdfo1qsywCtkYTiuQeTMvozt2FqxXS_VG8VNOh6vhz36MBgnn5iCBuHJYluFpPberC5PkWQpB0RyjwKjG7NV17VArO-GPzeO-u14Vwpa-yRvW7QofiIG7wTEhvlZLFHXqdM1p9onfM6tBBugp_1pVGWFJAfaEYcugSUzQrVm40)


<!--
@startuml
(*) -down-> "Initialization"
-down-> "retrieve new employees"
if "user exist?" then
-down->[true] "Send credentials by mail"
else
->[false] "insert employee on security system"
-down-> "Send credentials by mail"  
endif
-down-> (*)

@enduml
-->

---
## Sequence Diagram

This diagram represents the interaction between objects, components, artifact, etc over a specific period of time. In other words, it represents the sequence of messages flowing from one object to another. Starts with user and ends with a submit or any interaction with the backend.

<!--
@startuml
actor       scheduler       as scheduler
participant employee_table as employee_table
participant "erp-api.com/v1/validation" as validation
participant "report-api/v2/xls" as report_xls
participant user_table as user_table

scheduler -> employee_table : read new employees
scheduler -> validation : validate existence
scheduler -> report_xls : generate xls report
scheduler -> user_table : add new system user
@enduml
-->

![](https:////www.plantuml.com/plantuml/png/NO_DJaCX48NtF0NfljxeqeNfcpGZd2W9FuIPUstVNYZg1DcTETz9FYuir6HFqP2Jqknyx3xXzuZVJAmdK_iWk50fYqMgiTo1gz1xnE3MomAVqEgPQdXo9Mt7ytPG39uab7mQIuthgg6M9cEu7I_RBVA3djThZmkzCvhAQ396_tH---_zQXl8suolluRNWSfr-2V0uXPOa1rMMDqw_86CDk0HPxFIAjbfybE3xon8ZyvSaFsUuZS0)

In this diagram the **participants** are the apis, microservices endpoints, tables, external services, etc listed on the **Direct Dependencies** section.

If a more deep view is required, go to any dependency in developer center. There you will find even in which table is persisted the data.

---
## Business Rules

Here list all the business rules related to this feature or form.

If rules are documented or centralized on another system, just put its url or ids:

- br-1009
- br-1010
- br-1011

---
## Input data sources

> Note: If database dictionary and tables documentation exist, show the urls. If not, add them here.

Database diagram of the specific tables, views, procedures, packages, excel, csv or any kind of resource used as input in this scheduler.

<!--
@startuml
' hide the spot
hide circle

' avoid problems with angled crows feet
skinparam linetype ortho

entity "Complex Table" as e01 {
}

entity "Entity02" as e02 {
}

entity "Entity03" as e03 {
}

e01 ||..o{ e02
e01 |o..o{ e03
@enduml
 -->

![](https://www.plantuml.com/plantuml/png/RSz1he8m483X_PnYmkRj20ykG6AyWHSeTBIDRQTfHv60TnUnYHjNpP-lCydqMLIIctVmXyPgGZ64ERB0NgDDeoFOKDtPQeo91qS-usJ5e0eNHnh7n5F6Cv50ljeGLL8UdGqaSoJa98O1A8YL6Qi3--ZeWISrEAfGPQJc7nTuVhySzxTfYxO_jIlQ5TsMh6jTy_AU-2INxA2deBSRNm00)

##### Entity01

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

| Column | Type |  Description |
|--|--|--|
| ID  | Long  | id  |
| LOGIN_TIME  | date  | last login datetime  |

If database dictionary exist on the infrastructure section, add its link

---
## output data sources

> Note: If database dictionary and tables documentation exist, show the urls. If not, add them here.

Database diagram of the specific tables, views, procedures, packages, excel, csv or any kind of resource used as input in this scheduler.

<!--
@startuml
' hide the spot
hide circle

' avoid problems with angled crows feet
skinparam linetype ortho

entity "Complex Table" as e01 {
}

entity "Entity02" as e02 {
}

entity "Entity03" as e03 {
}

e01 ||..o{ e02
e01 |o..o{ e03
@enduml
 -->

![](https://www.plantuml.com/plantuml/png/RSz1he8m483X_PnYmkRj20ykG6AyWHSeTBIDRQTfHv60TnUnYHjNpP-lCydqMLIIctVmXyPgGZ64ERB0NgDDeoFOKDtPQeo91qS-usJ5e0eNHnh7n5F6Cv50ljeGLL8UdGqaSoJa98O1A8YL6Qi3--ZeWISrEAfGPQJc7nTuVhySzxTfYxO_jIlQ5TsMh6jTy_AU-2INxA2deBSRNm00)

##### Entity01

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

| Column | Type |  Description |
|--|--|--|
| ID  | Long  | id  |
| LOGIN_TIME  | date  | last login datetime  |

If database dictionary exist on the infrastructure section, add its link

---
## Configurations

Only if it is a monolithic application. If it is a modern spa web, this information should be found on the developer center section of each direct dependency.

---

## Change history

Ticket/Issues or a some id related to the project

| #ID | Stakeholder |Project Manager |Team |Date |Description |
|:------|:-------|:-------|:-------|:-------|:-------|
| PR-MDA-123  | jane_doe@mail.com | Pepper Pots |John Mcclane | 20-10-2022 | It is requested to remove required values |
| FIX-MDA-123  | jon_doe@mail.com | Phillip Coulson |Mathew Farrel| 15-10-2022 | It is requested to add required values  |

---
## Editors

| name | last updated |
|:------|-------|
| Jane Doe |  11 Nov 2020 |
| Kurt Weller |  21 Nov 2020 |

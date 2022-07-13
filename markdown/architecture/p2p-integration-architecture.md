<!--
{
  "order":4,
  "title": "P2P Integration Architecture Diagram"
}
-->

# P2P Integration Architecture Diagram

This diagram is aimed to show the direct relationship between the artifacts of components more important of the solution.

In P2P integration, the systems exclusively know about each other, the data models, the capabilities, and all the technology infrastructure that each application is supporting to enable that integration. The two systems are therefore what we would deem “tightly coupled.” If there were only a small number of applications, this would be fine. But as the number of tight couplings grows, the infrastructure becomes brittle, prone to failure, and difficult to maintain. Source: [ESB vs P2P: Why It's Finally Time to Ditch P2P](https://www.talend.com/resources/esb-vs-p2p/)

<!--
@startuml
skinparam backgroundcolor transparent

component ecommerce_api as "ecommerce-api"
component delivery_api as "delivery-api"
database database
component ecommerce_web as "ecommerce-web"
component erp
component ldap
component third_party

ecommerce_web -- ecommerce_api : json
ecommerce_web -- delivery_api : json

ecommerce_api -- database : tcp
ecommerce_api -- erp : xml
ecommerce_api -- ldap : tcp
third_party -- ecommerce_api : json
@enduml
-->

![image](https://www.plantuml.com/plantuml/png/TOzDheCm38JtEKN4dWky5JT19h5UK_8JEQOjjw-hDYX0ktDcFcV6Gs4WNe9NPNOn0q7G4vZvdz8IhKa-aMQ2MCJ2o4gP57AACcgKCI0P724x3KLtczABqZMeHUzkIEj6Lk4DMc2OeA2kmzUKEqw7557Q5AJSlBo5ziaNHtRCGBmgjV-qxm-t_EbhIV5CrTOjfFQhGjKZX62JppvI5kiH_DbwTVwiDNr_5XmmsYNu9m00)

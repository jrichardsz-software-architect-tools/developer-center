# Self Service Docs

Markdown Docs with Material Theme to store and classify the IT/Software/Systems functional and technical knowledge of all the **features** developed by the development team

## How it works?
For technical details go to the official repository:

https://github.com/jrichardsz-software-architect-tools/mkdocs-mod-template

## Business Unit Focused

![](https://cdn.shrm.org/image/upload/c_crop%2Ch_511%2Cw_1920%2Cx_0%2Cy_0/c_fit%2Cf_auto%2Cq_auto%2Cw_1920/v1/Tools%20and%20Samples/divisional-organizational-structure_zmdil9)

All of our developments is for our users. Our users belong to an area. An area belongs to a division, division to a division or business unit.

This structure is focused on this kind of enterprise organizations.  

## Quickly run

Execute these commands:

- npm install
- npm run dev (for developers)
- npm run start (for servers)

## How add docs?

- just add folders grouping by products, departments and document type
- git push

## How to create a diagram?

Instead visio, draw.io, dia software, etc, we just need text plain. To do that, we use https://plantuml.com which is a online service to diagram as code!!

- Go to http://www.plantuml.com/plantuml/uml
- Code your diagram
- Get the url of image which is at the bottom
- Go to markdown and put the url using image syntax. Don't forget to add **https:** at the start of the url
```
![My Diagram](https://www.plantuml.com/plantuml/png/BS-nQiGm40J)
```
- In order to save your code diagram for future modifications, paste it after the url and comment it.

```
<!--
@startwbs
* whatsap app
** 01 chats
*** 02 settings
**** 03 account
***** 04 change number
@endwbs
-->
```


That's all.

## Diagrams

- Several Diagrams
  - https://plantuml.com/
  - https://real-world-plantuml.com/
  - https://github.com/future-architect/puml-themes
- Web flow / Site Map
  - https://plantuml.com/wbs-diagram
- Artifacts Dependency or Relationship
  - https://plantuml.com/mindmap-diagram
- Flow Chart / Activity Diagram / Decision flow
  - https://plantuml.com/activity-diagram-beta
- Sequence Diagram
  - https://plantuml.com/sequence-diagram
- Deployment Diagram
  - https://plantuml.com/deployment-diagram
- Entity Relationship diagram (IE/ER) Database
  - https://plantuml.com/ie-diagram
- Colors
  - https://plantuml.com/color
  - https://github.com/qywx/PlantUML-colors/blob/master/plantuml-colors-notes.puml
- Legend
  - https://stackoverflow.com/questions/30999290/how-to-generate-a-legend-with-colors-in-plantuml  
- Advanced
  - https://stackoverflow.com/questions/11557426/how-to-align-blocks-in-plantuml-class-diagrams
  - https://crashedmind.github.io/PlantUMLHitchhikersGuide/layout/layout.html
  - https://crashedmind.github.io/PlantUMLHitchhikersGuide/PlantUMLSpriteLibraries/plantuml_sprites.html
  - https://github.com/yfuruyama/real-world-plantuml
  - https://github.com/plantuml-stdlib/C4-PlantUML
  - https://github.com/robbell/plantuml-c4
  - https://github.com/future-architect/puml-themes
  - https://github.com/topics/plantuml


## How to secure?

To add a login page, check the following links:

### Simple Login

```
docker build -t self-service-docs .
docker run --name help-center-docs -it --rm -p 8081:8080 -v $(pwd):/usr/src/app \
-e LOGIN_TYPE=simple \
-e USER_jane=changeme \
-e USER_kurt=secret \
self-service-docs
```

More details here: https://github.com/jrichardsz-software-architect-tools/nodeboot-web-security-starter#how-it-works

### Microsoft Login

```
docker build -t self-service-docs .
docker run --name self-service-docs -it --rm -p 8081:8080 -v $(pwd):/usr/src/app \
-e LOGIN_TYPE=microsoft \
-e BASE_URL=www.acmedocs.com \
-e LOGIN_OAUTH2_CLIENT_ID=***** \
-e LOGIN_OAUTH2_CLIENT_SECRET=***** \
-e ALLOWED_USERS="jane_doe@microsoft.com,kurt_weller@hotmail.com" \
mkdocs_secure
```

More details here: https://github.com/jrichardsz-software-architect-tools/mkdocs-mod-template/wiki/Add-microsoft-login

## Roadmap

- [ ] Login with google
- Locate or develop a new diagram for ui flow like this https://images.squarespace-cdn.com/content/v1/52b4f631e4b05c778fe3b2e8/1516773832459-REJAQ0P12BND9YVVT422/Sideworq+UX+Flow.jpg?format=1000w

## Contributors

<table>
  <tbody>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">JRichardsz</a></label>
      <br />
    </td>    
  </tbody>
</table>

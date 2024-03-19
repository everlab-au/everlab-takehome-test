# HL7OPS - HL7 Operations
>have you ever read a hl7 file and thought  that it was a mess?
 well, you are not alone, and that's why we are here to help you.
i made a custom parser that can read hl7 files  and convert it to a typescript object
and then you can use it to do whatever you want.
in the  current state of the project its provide a way to  see if there result value are in the boudaries of the expected values.
 else there flaged as high or low. or normal.

## How to use

to run the project you need to have nodejs installed in your machine.
then you can run the following commands:

```bash

 docker-compose up --build 
```
## local development

to run the project in development mode you can run the following commands:

```bash

  nix-shell 
  pnpm install
  pnpm run dev
  ## in the other terminal
  pnpm run studio ## drizzle studio is the orm that manage the schema of the database 
  pnpm run fresh # update the datebase  and push it to the local db.sqlite 

```
******
## the project structure

```bash

/app/pages/... # the pages of the project   
/app/components/... # the components of the project
/app/server/api/... #  the api that servre as the backend part of  the project
/app/server/db/... # the database schema and the orm that manage the database
/app/parser/... # the parser that convert the hl7 files to typescript objects
```

## the project stacks 

- nuxtjs
- typescript
- drizzle
- sqlite
- some other libraries
## some preview of the app 
![image](https://github.com/Kampouse/everlab-takehome-test/assets/41765025/510f995d-4572-4e12-8cea-de100cd276f2)
![image](https://github.com/Kampouse/everlab-takehome-test/assets/41765025/4954de48-2dfc-44fe-a4d2-ee0ccabf20c1)


# GIA Report Check API Java Example

## Clone the repository
`git clone https://github.com/GIALaboratory/reportcheck-api-examples.git`

`cd reportcheck-api-examples/java`

## Configure environment variables
### **Windows PowerShell**:
```
C:\> $env:REPORT_CHECK_API_KEY = "<INSERT_YOUR_API_KEY_HERE>"
C:\> $env:REPORT_CHECK_API_ENDPOINT = "<INSERT_THE_API_ENDPOINT_HERE>"
```

Verify:
```
C:\> Get-ChildItem Env:REPORT_CHECK_API_KEY
C:\> Get-ChildItem Env:REPORT_CHECK_API_ENDPOINT
```
### **bash**:
```
$ set REPORT_CHECK_API_KEY = INSERT_YOUR_API_KEY_HERE
$ set REPORT_CHECK_API_ENDPOINT = INSERT_THE_API_ENDPOINT_HERE
```

Verify:
```
$ echo $REPORT_CHECK_API_KEY
$ echo $REPORT_CHECK_API_ENDPOINT
```

## Run the example
Change to source directory and compile:

`cd ./java/src`

`javac com/gia/graphql/GraphQLQueryExample.java`

Run the example.  You must provide a report number as an argument.

`java -cp . com.gia.graphql.GraphQLQueryExample <report_number>`

Below are examples which are available with a sandbox API key:

| Report Number | Report Type                    |
|---------------|--------------------------------|
| 2141438171    | Diamond Dossier                |
| 2141438167    | Diamond Grading                |
| 6204327602    | Colored Diamond Origin Report  |
| 6204255486    | Colored Diamond Origin Report  |
| 2201255485    | Colored Diamond Origin Report  |
| 5202255481    | Colored Diamond Origin Report  |
| 2201255484    | Colored Diamond Origin Report  |
| 2141438188    | Alexandrite Report             |
| 2141438196    | Diamond Focus Report           |
| 2141438194    | Diamond e-Report               |
| 2141438173    | Colored Diamond Grading Report |
| 2201255484    | Colored Diamond Origin Report  |

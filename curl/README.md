### GIA Report Check API cURL Example


``` bash
# Configure environmental variables
set REPORT_CHECK_API_KEY=INSERT_YOUR_API_KEY_HERE
set REPORT_CHECK_API_ENDPOINT=INSERT_THE_API_ENDPOINT_HERE

curl -d "@request_payload.json" -H "Content-Type: application/json" -H "Authorization: %REPORT_CHECK_API_KEY%" %REPORT_CHECK_API_ENDPOINT%
```

``` bash
{"data":{"report1":{"report_number":"2141438167","report_date":"January 01, 2014","report_type":"Diamond Grading Report","results":{"carat_weight":"1.01 carat","color_grade":"F","clarity_grade":"SI1","cut_grade":"Excellent"}}}}
```
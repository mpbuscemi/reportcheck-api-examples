package com.gia.graphql;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.OutputStream;
import java.io.File;
import java.io.IOException;
import javax.net.ssl.HttpsURLConnection;
import java.net.URL;

public class GraphQLQueryExample {
    public static void main(String[] args) throws IOException {

        if(args == null || args.length == 0) {
            System.out.println("USAGE:\n\tjava -cp . com.gia.graphql.GraphQLQueryExample <report_number>\n");
        }

        System.out.println("Beginning Java example");

        // Get the endpoint and set up an HTTP connection
        String endPoint = System.getenv("REPORT_CHECK_API_ENDPOINT");
        System.out.println("\tUsing this endpoint: " + endPoint);

        URL url = new URL(endPoint);
        HttpsURLConnection con = (HttpsURLConnection) url.openConnection();
        con.setRequestMethod("POST");

        // Set request headers
        String apiKey = System.getenv("REPORT_CHECK_API_KEY");
        con.setRequestProperty("Authorization", apiKey);        
        con.setRequestProperty("Content-Type", "application/json; utf-8");
        con.setRequestProperty("Accept", "application/json");        

        con.setDoOutput(true);
        con.setDoInput(true);

        String query = new String(Files.readAllBytes(Paths.get("../resources/report_check_query.graphql")));
        


    }
}
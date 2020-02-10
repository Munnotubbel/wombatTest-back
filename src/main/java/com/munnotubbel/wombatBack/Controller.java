package com.munnotubbel.wombatBack;



import jdk.nashorn.internal.parser.JSONParser;
import net.minidev.json.JSONObject;
import net.minidev.json.writer.JsonReader;
import okhttp3.*;
import org.apache.juli.logging.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;


import java.net.*;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.data.repository.init.ResourceReader.Type.JSON;
import static org.springframework.hateoas.IanaLinkRelations.TAG;

@RestController
@RequestMapping("/api")
public class Controller {


    @RequestMapping("/fetch/{username}")
    public String getHttpResponse(@PathVariable String username) throws IOException {

        String url = "https://api.eosdetroit.io:443/v1/chain/get_account";

        OkHttpClient client = new OkHttpClient();
        MediaType mediaType = MediaType.parse("text/plain");
        RequestBody body = RequestBody.create("{ \"account_name\": \""+username+"\" }", mediaType);

        Request request = new Request.Builder()
                .url(url)
                .post(body)
                .build();

        try (Response response = client.newCall(request).execute()) {
            Response res = response;


            return response.body().string();
        }



    }



}







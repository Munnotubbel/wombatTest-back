package com.munnotubbel.wombatBack;

import org.springframework.data.annotation.Id;

public class DataModel {
@Id
private String account_name;
private String ballance;


    public DataModel(String account_name, String ballance) {
        this.account_name = account_name;
        this.ballance = ballance;
    }
}

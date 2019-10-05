package com.automation.config;

import com.automation.utils.DbUtilsTemplate;
import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DbUtilsConfig {

    @Autowired
    private PostgresConfig postgresConfig;

    @Bean
    public DataSource postgresDataSource() {
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setDriverClassName("org.postgresql.Driver");
        basicDataSource.setUsername(postgresConfig.getUserId());
        basicDataSource.setPassword(postgresConfig.getPassword());
        basicDataSource.setUrl(postgresConfig.getSrvUrl());
        return basicDataSource;
    }


}

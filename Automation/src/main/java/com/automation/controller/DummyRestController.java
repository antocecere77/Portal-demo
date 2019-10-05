package com.automation.controller;

import com.automation.mapping.Articolo;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.ResultSetHandler;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.sql.SQLException;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class DummyRestController {

    @Autowired
    private DataSource postgresDataSource;

    @GetMapping(value = "/test")
    public String getGreetings()
    {
        return "Saluti, sono il tuo primo web services";
    }

    @GetMapping(value = "/saluti/{nome}")
    public String getSaluti(@PathVariable("nome") String nome)
    {
        if(nome.equals("test")) {
            throw new RuntimeException("Utente disabilitato");
        }
        String message = String.format("\"Saluti, %s hai usato il tuo primo web service\"", nome);
        return message;
    }

    @GetMapping(value = "/longOperation")
    public String longOperation() throws InterruptedException {
        Thread.sleep(30000);
        String message = String.format("Long operation terminata");
        return message;
    }

    @GetMapping(value = "/articoli")
    public Articolo getArticoli() throws SQLException {

        QueryRunner queryRunner = new QueryRunner(postgresDataSource);
        ResultSetHandler<Articolo> resultHandler = new BeanHandler<Articolo>(Articolo.class);

        Articolo articolo = queryRunner.query("select * from articoli where codart = '000001502'",
                resultHandler);

        return articolo;
    }

}

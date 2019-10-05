package com.automation.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200")
public class DummyRestController {

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

}

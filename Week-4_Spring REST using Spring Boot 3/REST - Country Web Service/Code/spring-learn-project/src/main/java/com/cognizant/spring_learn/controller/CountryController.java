package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.Country;
import org.springframework.context.support.GenericXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountryIndia() {
        GenericXmlApplicationContext context = new GenericXmlApplicationContext("country.xml");
        Country country = context.getBean("in", Country.class);
        context.close();
        return country;
    }
}

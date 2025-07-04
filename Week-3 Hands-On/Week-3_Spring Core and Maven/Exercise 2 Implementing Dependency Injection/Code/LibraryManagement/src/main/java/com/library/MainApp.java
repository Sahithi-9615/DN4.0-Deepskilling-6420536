package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // ✅ Retrieve BookService bean
        BookService bookService = context.getBean("bookService", BookService.class);

        // ✅ Test the dependency injection
        bookService.addBook("Clean Code");
    }
}

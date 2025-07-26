package com.naveen.ContactsApp.controller;

import com.naveen.ContactsApp.model.Contact;
import com.naveen.ContactsApp.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")

public class ContactController {

    @Autowired
    private ContactService service;

    @GetMapping("/contacts")
    public ResponseEntity<List<Contact>> getAllContacts() {
        return new ResponseEntity<>(service.getAllContacts(), HttpStatus.OK);
    }

    @PostMapping("/add-contact")
    public ResponseEntity<?> addContact(@RequestBody Contact contact) {
        try {
            Contact contact1 = service.addContact(contact);
            return new ResponseEntity<>(contact1, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/contact/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestBody Contact contact) {
        Contact contact1 = null;
        contact1 = service.updateContact(id, contact);
        if (contact1 != null) {
            return new ResponseEntity<>("Updated successfully!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Failed to update!", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/contact/{id}")
    public ResponseEntity<Contact> getProduct(@PathVariable int id) {
        Contact product = service.getContact(id);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/contact/{id}")
    public ResponseEntity<String> deleteContact(@PathVariable int id) {
        Contact contact = service.getContact(id);
        if (contact != null) {
            service.deleteContact(id);
            return new ResponseEntity<>("Deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Contact not found", HttpStatus.NOT_FOUND);
        }
    }
}
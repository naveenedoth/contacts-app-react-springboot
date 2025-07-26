package com.naveen.ContactsApp.service;

import com.naveen.ContactsApp.model.Contact;
import com.naveen.ContactsApp.repo.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepo repo;

    public List<Contact> getAllContacts() {
        return repo.findAll();
    }

    public Contact getContact(int id) {
        return repo.findById(id).orElse(null);
    }

    public Contact addContact(Contact contact) {
        return repo.save(contact);
    }

    public Contact updateContact(int id, Contact contact){
        return repo.save(contact);
    }

    public void deleteContact(int id) {
        repo.deleteById(id);
    }
}

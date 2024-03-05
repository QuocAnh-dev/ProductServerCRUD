/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package com.product.controllers;
import com.product.Configuration;
import com.product.models.Product;
import com.product.models.dto.StatusDto;
import com.product.utils.database.ProductDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;

@WebServlet(name = "ProductController", urlPatterns = {"/api/products"})
public class ProductController extends HttpServlet {

    public static final ProductDAO dbContext = Configuration.product;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        if (req.getParameter("id") == null) {
            out.println(dbContext.getAll());
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();

        try {
            String name = req.getParameter("name");
            int quantity = Integer.parseInt(req.getParameter("quantity"));
            int price = Integer.parseInt(req.getParameter("price"));
            Product p = new Product(name, quantity, price);
            dbContext.add(p);
            System.out.println("done!");
            out.println(new StatusDto(0, null));
        } catch (NumberFormatException ex) {
            out.println(new StatusDto(1, null));
            throw ex;
        }
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();

        String id = req.getParameter("id");
        if (id != null) {
            dbContext.delete(Integer.parseInt(id));
            out.println(new StatusDto(0, null));
            System.out.println(new StatusDto(0, null));
        } else {
            out.println(new StatusDto(1, null));
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();

        try {
            int id = Integer.parseInt(req.getParameter("id"));
            String name = req.getParameter("name");
            int quantity = Integer.parseInt(req.getParameter("quantity"));
            int price = Integer.parseInt(req.getParameter("price"));
            Product p = new Product(id, name, quantity, price);
            int i = dbContext.update(p);
            System.out.println(i);
            if (i == 1) {
                out.print(new StatusDto(0, "Update Successfully!"));
            } else {
                out.print(new StatusDto(1, "Update failed!"));
            }
        } catch (NumberFormatException e) {
            out.print(new StatusDto(1, "Update product failed!"));
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, e);
        }
    }
}

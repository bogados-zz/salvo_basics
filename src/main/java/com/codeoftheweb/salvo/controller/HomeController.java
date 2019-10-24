package com.codeoftheweb.salvo.controller;

import com.codeoftheweb.salvo.controller.dto.UserPassword;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController {

	@GetMapping
	public String getLogin(Model model) {
		model.addAttribute("userPassword", new UserPassword());
		return "login";
	}

}

package com.avi.mini_Codex;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class WebsiteBuilderController {

    private final WebsiteBuilderService websiteBuilderService;

    @PostMapping("/website")
    public String generate(@RequestBody String ticket){
        return websiteBuilderService.generate(ticket);
    }
}
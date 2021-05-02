package com.tnx.utils.uniapp;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * @ClassName WebMvcConfig
 * @Description TODO
 * @Author Nanxing Tang
 * @Date 2021--05--01--16:11
 **/
@Configuration
public class WebMvcConfig extends WebMvcConfigurationSupport {
    @Override
    protected void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
}

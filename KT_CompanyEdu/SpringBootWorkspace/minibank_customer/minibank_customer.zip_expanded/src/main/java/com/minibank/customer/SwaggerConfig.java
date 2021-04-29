package com.minibank.customer;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.minibank.customer")) // 지정된 basePackage의 현재 RequestMapping으로 할당된 API 리스트 
//				.apis(RequestHandlerSelectors.any()) // 현재 RequestMapping으로 할당된 모든 API 리스트
				.paths(PathSelectors.any())  // 모든 API 참조
				.build();
	}
	
}

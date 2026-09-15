import {Component} from '@angular/core';
import {Project} from '../../../../core/models/project.model';
import {FadeUp} from '../../../../shared/directives/fade-up';
import {ProjectCard} from './project-card/project-card';

@Component({
  selector: 'app-project-section',
  imports: [
    FadeUp,
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Simple Pay API',
      description: 'Desafio técnico de backend: API REST para uma plataforma de pagamentos simplificada, com transferências entre usuários e lojistas. Domínio rico encapsulando invariantes de negócio, optimistic locking para concorrência em carteiras, integração com serviços externos via OpenFeign, erros padronizados por RFC 7807 e migrações versionadas com Flyway.',
      githubUrl: 'https://github.com/tperons/simple-pay-api',
      demoUrl: 'https://simplepay.perondev.com/docs',
      techs: [
        {name: 'Java', color: 'cyan'},
        {name: 'Spring Boot', color: 'green'},
        {name: 'PostgreSQL', color: 'orange'},
        {name: 'Flyway', color: 'red'},
        {name: 'OpenFeign', color: 'cyan'},
        {name: 'Docker', color: 'cyan'},
      ]
    },
    {
      title: 'Marginalia API',
      description: 'API REST hipermídia (HATEOAS) de leitura social em Spring Boot 4, com segurança JWT assimétrica, rate limiting distribuído via Redis, erros padronizados por RFC 7807 e arquitetura hexagonal por módulos de domínio.',
      githubUrl: 'https://github.com/tperons/marginalia-api',
      techs: [
        {name: 'Java', color: 'cyan'},
        {name: 'Spring Boot', color: 'green'},
        {name: 'Spring Security', color: 'purple'},
        {name: 'PostgreSQL', color: 'orange'},
        {name: 'Redis', color: 'pink'},
        {name: 'Docker', color: 'cyan'},
      ]
    },
  ];
}

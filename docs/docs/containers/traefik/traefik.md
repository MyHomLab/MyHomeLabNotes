---
sidebar_position: 2
---

# Traefik: The Cloud Native Application Proxy

Are you looking for a modern, fast, and easy-to-use reverse proxy and load balancer for your microservices? Do you want to avoid the hassle of manually configuring routes and updating them every time you deploy or scale your services? Do you want to leverage the power of your existing infrastructure components, such as Docker, Kubernetes, Consul, or Amazon ECS?

If you answered yes to any of these questions, then you need Traefik.

## What is Traefik?

Traefik (pronounced traffic) is a cloud native application proxy that makes deploying microservices easy. Traefik integrates with your existing infrastructure components and configures itself automatically and dynamically. Pointing Traefik at your orchestrator or service registry should be the only configuration step you need.

Traefik supports various backends, such as Docker, Swarm mode, Kubernetes, Marathon, Consul, Etcd, Rancher v2, Amazon ECS, and more¹. Traefik detects the changes in your infrastructure and updates its routing rules accordingly. Traefik also provides features such as HTTPS termination, load balancing, circuit breakers, health checks, sticky sessions, request middleware, metrics collection, and web UI¹.

Traefik is not just another reverse proxy. It is a solution that offers many benefits over other alternatives. Here are some of the reasons why you should choose Traefik:

- It is lightweight, fast, efficient, scalable, and secure by design. It has a compressed container size smaller than 20 megabytes and observed memory usage normally under 30 megabytes². It is written in Go and React, which makes it perform routing tasks in milliseconds and load the web UI in 100 milliseconds². It has low CPU usage when idle or active, which saves electricity and reduces environmental impact². It is designed with high availability in mind, and can be deployed on platforms like Kubernetes with multiple parallel containers². It follows the best practices of security engineering, such as using secure protocols, encrypting sensitive data, hashing passwords, and applying security headers³.
- It is easy to install, configure, and use. It has a comprehensive documentation that guides you through the installation process on various platforms, such as Docker Compose, Kubernetes, or Bare Metal⁴. It has a simple yet powerful configuration file that lets you customize every aspect of Traefik's behavior. It has a user-friendly web UI that allows you to monitor the status of your services and routes.
- It is open-source and community-driven. It is licensed under Apache License 2.0, which means you can use it for free for any purpose. It has an active GitHub repository where you can find the source code, report issues, request features, contribute code, or join discussions. It has a vibrant community of users and developers who support each other on Discord.
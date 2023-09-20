---
sidebar_position: 2
title: Introduction
id: Authelia-Introduction
tags:
  - Authelia
  - OAuth
  - Security
---

# Introduction

## The Ultimate Authentication and Authorization Solution for Your Web Applications

Do you want to protect your web applications from unauthorized access and enhance your online security? Do you want to log in once and access multiple web applications without entering your credentials again and again? Do you want to choose the best authentication method that suits your needs and preferences?

If you answered yes to any of these questions, then you need Authelia.

## What is Authelia?

Authelia is a powerful and open-source authentication and authorization server that provides multi-factor authentication and single sign-on for your web applications. It is designed to enhance the security and convenience of your online experience by verifying your identity and granting you access to the resources you need.

Authelia works as a companion for common reverse proxies, such as Nginx or Traefik, that act as the gateway between your users and your web applications. Authelia intercepts the requests from the reverse proxy and performs various checks before allowing or denying the access. These checks include:

- **Login regulation**: Authelia limits the number of login attempts per user and locks them out for a period of time if they exceed the limit. This prevents brute force attacks and protects your accounts from unauthorized access.
- **Password reset**: Authelia allows users to reset their LDAP or internal passwords with email validation right from the web interface. This reduces the hassle of contacting the administrator or resetting the password manually.
- **Single sign-on**: Authelia enables users to log in once to a wide range of web applications via a session cookie, OpenID Connect 1.0, or Trusted Headers. This saves time and improves the user experience.
- **Authorization policies**: Authelia lets you control which users and groups have access to which specific resources or domains with granular policy definitions. You can also set different levels of authentication depending on the sensitivity of the resource.
- **Identity validation**: Authelia requires users who have not configured a second-factor device to validate their identity via an email before accessing the web applications. This reduces the chance that an attacker could exploit a lazy or compromised user.
- **Multi-factor authentication**: Authelia supports multiple second-factor methods, such as One Time Passwords, Mobile Push Notifications, and WebAuthn. You can choose the method that suits your preference and security needs.

## Why choose Authelia?

Authelia is not just another authentication and authorization server. It is a solution that offers many benefits over other alternatives. Here are some of the reasons why you should choose Authelia:

- It is **lightweight**, **fast**, **efficient**, **scalable**, and **secure** by design. It has a compressed container size smaller than 20 megabytes and observed memory usage normally under 30 megabytes. It is written in Go and React, which makes it perform authorization policies and other backend tasks in milliseconds and load the login portal in 100 milliseconds. It has low CPU usage when idle or active, which saves electricity and reduces environmental impact. It is designed with high availability in mind, and can be deployed on platforms like Kubernetes with multiple parallel containers. It follows the best practices of security engineering, such as using secure protocols, encrypting sensitive data, hashing passwords, and applying security headers.
- It is **easy to install**, **configure**, and use. It has a comprehensive documentation that guides you through the installation process on various platforms, such as Docker Compose, Kubernetes, or Bare Metal. It has a simple yet powerful configuration file that lets you customize every aspect of Authelia's behavior. It has a user-friendly web interface that allows you to log in, register, reset password, configure second-factor devices, and more.
- It is **open-source and community-driven**. It is licensed under Apache License 2.0, which means you can use it for free for any purpose. It has an active GitHub repository where you can find the source code, report issues, request features, contribute code, or join discussions. It has a vibrant community of users and developers who support each other on Discord.



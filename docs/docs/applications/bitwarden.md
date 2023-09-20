---
sidebar_position: 5
title: Bitwarden
id: Bitwarden
position: 5
tags:
  - Introduction
  - Bitwarden
  - docker
  - docker-compose
  - tips
---


# Secure Your Passwords with Bitwarden in a Docker Container

![Bitwarden Logo](https://bitwarden.com/img/icons/logo.png)

In today's digital age, keeping track of numerous passwords and credentials can be a daunting task. Fortunately, password managers like Bitwarden exist to simplify this process while enhancing security. Bitwarden is a trusted, open-source password manager that allows you to store, organize, and secure your passwords across all your devices. In this blog post, we will guide you through setting up Bitwarden in a Docker container, ensuring both convenience and data security.

## What is Bitwarden?

Bitwarden is a versatile password manager that offers the following key features:

- **Password Vault:** Securely store an unlimited number of passwords, credit card details, and personal information in your vault.

- **Cross-Platform Compatibility:** Bitwarden is available on various platforms, including web browsers, mobile devices, and desktop applications.

- **End-to-End Encryption:** Bitwarden uses strong encryption to protect your data, ensuring that only you have access to your passwords.

- **Password Generator:** Create strong and unique passwords for your accounts with Bitwarden's built-in password generator.

- **Two-Factor Authentication (2FA):** Enhance security by enabling 2FA for your Bitwarden account, further safeguarding your data.

Now, let's dive into setting up Bitwarden in a Docker container.

## Why Use Bitwarden in a Docker Container?

Running Bitwarden in a Docker container offers several benefits:

1\. **Isolation:** Docker containers provide an isolated environment for running Bitwarden, reducing potential conflicts with other software on your server.

2\. **Portability:** Docker containers can be easily moved between different servers, making it convenient to migrate your Bitwarden instance if needed.

3\. **Easy Management:** Docker Compose simplifies the deployment and management of Bitwarden, enabling quick updates and maintenance.

4\. **Security:** Docker containers add an extra layer of security by limiting the exposure of the host system.

Now, let's set up Bitwarden in a Docker container.

## Prerequisites

Before you begin, ensure you have the following prerequisites:

1\. **Docker:** Make sure Docker is installed on your server or development machine. You can download and install Docker from the official website: [Docker](https://www.docker.com/get-started).

2\. **Docker Compose:** Install Docker Compose, a tool for defining and running multi-container Docker applications. You can follow the installation instructions here: [Docker Compose](https://docs.docker.com/compose/install/).

## Setting up Bitwarden in a Docker Container

To set up Bitwarden in a Docker container, we'll use Docker Compose to define the services and configurations needed for Bitwarden. Below is a sample `docker-compose.yml` file to get you started:

```yaml

version: '3'

services:

  bitwarden:

    image: bitwardenrs/server:latest

    container_name: bitwarden

    ports:

      - "80:80"

      - "3012:3012"

    environment:

      - ROCKET_TLS=true # Enable HTTPS

    volumes:

      - ./data:/data

    networks:

      - bitwarden_network

networks:

  bitwarden_network:

    driver: bridge

```

Here's an explanation of the key sections in this `docker-compose.yml` file:

- We define a single service called `bitwarden` that uses the official Bitwarden_RS Docker image.

- We expose ports 80 (HTTP) and 3012 (WebSockets) to allow access to the Bitwarden web interface.

- We enable HTTPS by setting the `ROCKET_TLS` environment variable to `true`. This ensures secure communication with Bitwarden.

- We use a Docker volume named `data` to persistently store Bitwarden's data. This ensures that your password vault and configurations are saved even if the container is restarted or recreated.

Now, let's move on to configuring Bitwarden.

## Configuring Bitwarden

Bitwarden configuration is minimal, as most settings can be managed through the web interface after initial setup. However, you can customize Bitwarden's behavior by providing a configuration file. To do this, create a `config.env` file in the same directory as your `docker-compose.yml` file and specify any environment variables you want to customize. For example, you can set the email server settings for password reset emails.

Here's an example `config.env` file:

```env

EMAIL_DOMAIN=yourdomain.com

SMTP_HOST=smtp.yourdomain.com

SMTP_PORT=587

SMTP_TLS=true

SMTP_USERNAME=your_email@yourdomain.com

SMTP_PASSWORD=your_email_password

```

Remember to replace the placeholders with your actual email server information.

## Running Bitwarden

To start Bitwarden, navigate to the directory containing your `docker-compose.yml` and `config.env` files and run:

```bash

docker-compose up -d

```

This command will start Bitwarden in detached mode, allowing it to run in the background.

## Accessing Bitwarden

You can now access your Bitwarden instance by navigating to your server's IP address or domain name in a web browser. If you set up HTTPS, your connection will be encrypted, ensuring the security of your password data.

Follow the on-screen instructions to create your Bitwarden account and start adding and managing your passwords.

## Conclusion

Bitwarden in a Docker container provides a convenient and secure solution for managing your passwords and sensitive data. By following the steps outlined in this guide, you can quickly set up Bitwarden, ensuring that your credentials are organized, accessible, and protected. Make sure to regularly back up your Bitwarden data and consider additional security measures like enabling two-factor authentication (2FA) to further enhance the security of your password vault. With Bitwarden, you can enjoy the benefits of a robust and user-friendly password manager while maintaining control over your data.
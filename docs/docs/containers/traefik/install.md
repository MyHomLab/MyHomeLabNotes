---
sidebar_position: 3
title: Docker
id: Traefik-Docker
tags:
  - Traefik
  - Proxy
  - Docker  
---

# Getting Started with Traefik
Now that we've covered the basics, let's get started with Traefik. We'll walk through the process of setting up Traefik to reverse proxy a sample web application running in a Docker container.

## Prerequisites
* Docker installed on your server or local machine.
* A basic understanding of Docker and Docker Compose.

## Step 1: Install Traefik
You can install Traefik using Docker. Run the following command:

```docker
docker run -d -p 8080:8080 -p 80:80 -p 443:443 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $PWD/traefik.toml:/etc/traefik/traefik.toml \
  traefik:v2.5

```

In this command:

* **`-p`** specifies the ports for the Traefik dashboard, HTTP, and HTTPS.
* **`-v`** mounts the Docker socket and a configuration file (traefik.toml) into the Traefik container.

## Step 2: Create a Sample Web Application
Create a basic docker-compose.yml file for your web application:

```docker
version: '3'
services:
  web:
    image: nginx:latest

```

## Step 3: Configure Traefik
Create a **`traefik.toml`** configuration file with the following content:

```toml
[entryPoints]
  [entryPoints.http]
    address = ":80"
  [entryPoints.https]
    address = ":443"
      [entryPoints.https.tls]

[api]
  dashboard = true

[providers.docker]
  exposedByDefault = false
```

This configuration tells Traefik to listen on ports 80 and 443 for HTTP and HTTPS traffic, respectively. It also enables the Traefik dashboard.

## Step 4: Start Traefik and Your Application
Now, bring up Traefik and your web application using Docker Compose:

```docker
docker-compose up -d
``````

## Step 5: Access the Traefik Dashboard
Open a web browser and access the Traefik dashboard at **`http://localhost:8080`** You should see the dashboard, displaying your running services.

## Step 6: Test the Reverse Proxy
Your web application should be accessible through Traefik. Open a web browser and access your application at **`http://localhost`**
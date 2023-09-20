---
sidebar_position: 4
title: Beaver
id: Beaver
position: 4
tags:
  - Introduction
  - Beaver
  - docker
  - docker-compose
  - tips
---

# Containerized Log Management with Beaver

![Beaver Logo](https://raw.githubusercontent.com/python-beaver/python-beaver/gh-pages/images/logo.png)

In the world of server and application management, logs are invaluable. They provide insights into system behavior, application health, and security. Analyzing logs can uncover issues, trends, and anomalies, allowing you to make informed decisions. Beaver is a lightweight log shipper and manager designed for containerized environments. In this blog post, we will explore what Beaver is, why you should use it, and how to set it up in a Docker container.

## What is Beaver?

Beaver is a powerful and flexible log shipper and manager that can collect logs from various sources, transform them, and send them to different destinations. Here are some key features of Beaver:

- **Input Sources:** Beaver supports various input sources, including log files, syslog, and the ability to execute commands and collect their output as logs.

- **Output Destinations:** Logs can be sent to numerous destinations, such as Elasticsearch, Logstash, Graylog, and even custom endpoints via HTTP or TCP.

- **Data Transformation:** Beaver allows you to manipulate log data, extract fields using regular expressions, and apply filters to send specific logs to specific destinations.

- **Container-Friendly:** Beaver is designed with containerized environments in mind, making it an excellent choice for managing logs in modern microservices architectures.

Now that we have an overview of Beaver, let's dive into setting it up in a Docker container.

## Why Use Beaver in a Docker Container?

Using Beaver in a Docker container has several advantages:

1\. **Isolation:** Running Beaver in a container ensures that it operates in an isolated environment, separate from your host system and other applications.

2\. **Portability:** Docker containers can be easily moved and deployed across different environments, making it simple to set up and manage Beaver in various scenarios.

3\. **Scalability:** Containers can be scaled horizontally to handle large log volumes, making Beaver suitable for environments with dynamic log requirements.

4\. **Resource Efficiency:** Containers are lightweight and consume fewer system resources compared to running Beaver directly on a host.

5\. **Easy Configuration:** Beaver's configuration can be defined in a Docker Compose file or Kubernetes manifest, simplifying deployment and management.

Now, let's set up Beaver in a Docker container.

## Prerequisites

Before you begin, make sure you have the following prerequisites in place:

1\. **Docker:** Ensure you have Docker installed on your server or development machine. You can download and install Docker from the official website: [Docker](https://www.docker.com/get-started).

2\. **Log Destination:** Decide where you want to send your logs. Common destinations include Elasticsearch, Logstash, and Graylog.

## Setting up Beaver in a Docker Container

Setting up Beaver in a Docker container is a straightforward process. You can use a `docker-compose.yml` file to define and configure the necessary services. Below is a basic `docker-compose.yml` file to get you started:

```yaml

version: '3'

services:

  beaver:

    image: python-beaver/beaver

    container_name: beaver

    volumes:

      - ./config:/config

      - /var/log:/var/log # Mount log files or directories you want to collect

    command: beaver -c /config/beaver.conf

    depends_on:

      - log_destination

    networks:

      - beaver_network

  log_destination:

    # Define your log destination service here

    image: your_log_destination_image

    container_name: log_destination

    # Configure your log destination as needed

    networks:

      - beaver_network

networks:

  beaver_network:

    driver: bridge

```

Here's a breakdown of the above `docker-compose.yml` file:

- We define two services: `beaver` and `log_destination`. The `beaver` service runs the Beaver container, while `log_destination` represents your chosen log destination (e.g., Elasticsearch, Logstash).

- The `volumes` section allows you to specify where Beaver should collect logs from. In the example, it mounts the host's `/var/log` directory, but you can customize this to point to your log files or directories.

- The `command` section specifies the command to run Beaver with its configuration file. You should create a `beaver.conf` file in the `./config` directory to configure Beaver according to your needs.

- The `depends_on` section ensures that Beaver only starts once the `log_destination` service is up and running.

- You should define the `log_destination` service according to your chosen log management solution.

## Configuring Beaver

To configure Beaver, create a `beaver.conf` file in the `./config` directory and specify your input sources, log destination, and any transformation or filtering rules you require. Beaver's configuration is highly customizable and should align with your log management goals.

Here's a simple example of a `beaver.conf` file:

```ini

[beaver]

logstash_version = 1

[logstash]

transport = udp

host = log_destination

port = 514

[inputs]

path = /var/log/*.log

[outputs]

type = stdout

```

In this example, Beaver collects log files from `/var/log/*.log` on the host and sends them to a Logstash instance using UDP on port 514.

## Running Beaver

To start Beaver, navigate to the directory containing your `docker-compose.yml` file and run:

```bash

docker-compose up -d

```

This command will start both Beaver and your chosen log destination service in the background.

## Conclusion

Beaver is a versatile log shipper and manager that simplifies log collection, transformation, and routing in containerized environments. By running Beaver in a Docker container, you can take advantage of containerization benefits like isolation, portability, and scalability. Make sure to customize Beaver's configuration to meet your log management requirements, and choose an appropriate log destination to centralize and analyze your logs effectively. With Beaver in a Docker container, you'll be well-equipped to manage logs efficiently in modern infrastructure setups.
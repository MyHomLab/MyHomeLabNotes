---
sidebar_position: 6
title: Booksonic
id: Booksonic
position: 6
tags:
  - Introduction
  - Booksonic
  - docker
  - docker-compose
  - tips
---

# Booksonic Container: Stream Your Audiobooks Anywhere

![Booksonic Logo](https://booksonic.org/images/logo.png)

Audiobooks have become a popular way to enjoy literature, whether during commutes, workouts, or relaxing at home. If you have a collection of audiobooks and want to access them from anywhere, Booksonic is a fantastic solution. In this blog post, we'll explore what Booksonic is, why you should consider using it, and how to set it up in a Docker container.

## What is Booksonic?

Booksonic is an open-source, self-hosted audiobook server that lets you organize and stream your audiobooks from any device with an internet connection. Key features of Booksonic include:

- **Web-Based Interface:** Access your audiobook library through a user-friendly web interface, making it easy to browse and play your favorite titles.

- **Multi-User Support:** Create multiple user accounts with customizable access permissions, allowing family members or friends to enjoy your audiobooks.

- **Stream or Download:** Listen to audiobooks in your web browser or download them for offline listening.

- **Variable Playback Speed:** Adjust playback speed to your preference, making it easier to follow the narration.

- **Bookmarking:** Booksonic remembers your progress in each audiobook, so you can pick up where you left off.

Now, let's dive into setting up Booksonic in a Docker container.

## Why Use Booksonic in a Docker Container?

Running Booksonic in a Docker container offers several advantages:

1\. **Isolation:** Docker containers provide an isolated environment for running applications, reducing potential conflicts with other software on your server.

2\. **Portability:** Docker containers can be easily moved between different servers, making it convenient to migrate your Booksonic instance if needed.

3\. **Easy Management:** Docker Compose simplifies the deployment and management of Booksonic, enabling quick updates and maintenance.

4\. **Security:** Docker containers add an extra layer of security by limiting the exposure of the host system.

Now, let's set up Booksonic in a Docker container.

## Prerequisites

Before you begin, ensure you have the following prerequisites:

1\. **Docker:** Make sure Docker is installed on your server or development machine. You can download and install Docker from the official website: [Docker](https://www.docker.com/get-started).

2\. **Docker Compose:** Install Docker Compose, a tool for defining and running multi-container Docker applications. You can follow the installation instructions here: [Docker Compose](https://docs.docker.com/compose/install/).

## Setting up Booksonic in a Docker Container

To set up Booksonic in a Docker container, we'll use Docker Compose to define the services and configurations needed for Booksonic. Below is a sample `docker-compose.yml` file to get you started:

```yaml

version: '3'

services:

  booksonic:

    image: linuxserver/booksonic

    container_name: booksonic

    environment:

      - PUID=1000 # Replace with your user ID

      - PGID=1000 # Replace with your group ID

      - TZ=America/New_York # Set your timezone here

    volumes:

      - ./config:/config

      - ./audiobooks:/audiobooks

    ports:

      - "4040:4040"

    networks:

      - booksonic_network

networks:

  booksonic_network:

    driver: bridge

```

Here's an explanation of the key sections in this `docker-compose.yml` file:

- We define a single service called `booksonic` that uses the official LinuxServer.io Booksonic Docker image.

- We set environment variables `PUID` and `PGID` to specify the user and group IDs under which the Booksonic container will run. You should replace these values with your user and group IDs.

- The `TZ` environment variable sets your server's timezone.

- We use Docker volumes to persistently store Booksonic's configuration and audiobooks library.

- Port 4040 is exposed to allow access to the Booksonic web interface.

Now, let's move on to configuring Booksonic.

## Configuring Booksonic

Booksonic's primary configuration can be performed through its web interface. After starting the container, access the web interface by navigating to `http://your_server_ip:4040` in a web browser. Follow the on-screen instructions to set up your library, users, and access controls.

Additionally, you can further customize Booksonic by editing the `application.yml` file located in the `./config` directory. This file allows you to configure advanced settings such as transcoding options, remote access, and more.

## Running Booksonic

To start Booksonic, navigate to the directory containing your `docker-compose.yml` file and run:

```bash

docker-compose up -d

```

This command will start Booksonic in detached mode, allowing it to run in the background.

## Accessing Booksonic

You can now access your Booksonic instance by navigating to `http://your_server_ip:4040` in a web browser. Log in with the admin account you created during the setup process and begin uploading your audiobooks or importing them from your library.

## Conclusion

Booksonic in a Docker container provides a convenient and secure solution for hosting and streaming your audiobook library. With its user-friendly web interface, multi-user support, and versatile customization options, Booksonic is an excellent choice for audiobook enthusiasts. Make sure to regularly back up your audiobooks and configurations, and consider adding additional users to share your library with friends and family. With Booksonic, you can enjoy your audiobooks from anywhere with ease.
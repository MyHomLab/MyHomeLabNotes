---
sidebar_position: 5
title: Cheat Sheet
id: Docker-Cheat-Sheet
tags:
  - CheatSheet
---

# Installation and Basic Commands

* **Check Docker Version**
```
docker --version
```

* **Check Docker Info**
```
docker info
```

* **Pull Docker Image**
```
docker pull <image_name>:<tag>
```

* **List Downloaded Images**

```
docker images
```

* **Remove Docker Image**
```
docker rmi <image_name>:<tag>
```

## Container Lifecycle

* **Run a Container**
```
docker run <options> <image_name>
```

* **List Running Containers**
```
docker ps
```

* **List All Containers (including stopped)**
```
docker ps -a
```

* **Stop a Running Container**
```
docker stop <container_id>
```

* **Start a Stopped Container**
```
docker start <container_id>
```

* **Remove a Container**
```
docker rm <container_id>
```

* **Remove All Stopped Containers**
```
docker container prune
```

## Managing Images and Containers

* **Inspect Container Details**
```
docker inspect <container_id>
```

* **View Logs of a Container**
```
docker logs <container_id>
```

* **Execute a Command Inside a Running Container**
```
docker exec -it <container_id> <command>
```

* **Copy Files Between Host and Container**
```
docker cp <source> <container_id>:<destination>
docker cp <container_id>:<source> <destination>
```

* **Build Docker Image from Dockerfile**
```
docker build -t <image_name>:<tag> <path_to_Dockerfile_directory>
```

## Docker Compose

* **Run Docker Compose**
```
docker-compose up
```

* **Run Docker Compose in Detached Mode**
```
docker-compose up -d
```

* **Stop Docker Compose**
```
docker-compose down
```

* **List Docker Compose Services**
```
docker-compose ps
```

## Docker Networking

* **List Docker Networks**
```
docker network ls
```

* **Create a Docker Network**
```
docker network create <network_name>
```

* **Attach a Container to a Network**
```
docker network connect <network_name> <container_id>
```

## Docker Registry and Docker Hub

* **Login to Docker Hub**
```
docker login
```

* **Push Docker Image to Docker Hub**
```
docker push <image_name>:<tag>
```

* **Search for Docker Images on Docker Hub**
```
docker search <search_query>
```

## Cleanup and Maintenance

* **Remove All Containers and Images (Use with Caution!)**
```
docker system prune -a
```

* **Remove All Unused Resources**
```
docker system prune
```

* **Show Disk Usage by Docker:**
```
docker system df
```


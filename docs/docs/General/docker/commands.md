
---
sidebar_position: 1
title: Docker-Commands
id: docker-commands
tags:
  - Docker
  - Setup
  - Commands
---

# Commands

### Images

```bash
docker images
```

### Containers

```bash
docker ps
```

### Run

```bash
docker run -it ubuntu bash
```

### Stop

```bash
docker stop <container_id>
```

### Remove

```bash
docker rm <container_id>
```

### Remove all containers

```bash
docker rm $(docker ps -a -q)
```

### Remove all images

```bash
docker rmi $(docker images -q)
```

### Remove all images and containers

```bash
docker system prune -a
```

### Remove all unused images, containers, networks and volumes

```bash
docker system prune
```

### Remove all unused images, containers, networks and volumes without confirmation

```bash
docker system prune -f
```

### Remove all unused volumes

```bash
docker volume prune
```

### Remove all unused networks

```bash
docker network prune
```

### Remove all unused images

```bash
docker image prune
```

### Remove all unused containers

```bash
docker container prune
```

### Remove all unused images, containers, networks and volumes without confirmation and volumes

```bash
docker system prune -a -f --volumes
```






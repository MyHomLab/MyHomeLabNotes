---
sidebar_position: 3
title: Docker
id: Bazarr-Docker
tags:
  - Bazarr
  - OAuth
  - Security
  - Config
  - Docker-Config
---

# Docker

```
    name: bazarr
    image: linuxserver/bazarr
    pull: true
    volumes:
      - "{{}}:/"
    ports:
      - "{{ bazarr_port }}:6767"
    networks:
      - name: bridge
      - name: homelab
    env:
      TZ: "{{ ansible_nas_timezone }}"
      PUID: "{{ bazarr_user_id }}"
      PGID: "{{ bazarr_group_id }}"
    restart_policy: unless-stopped
    memory: "{{ bazarr_memory }}"
```



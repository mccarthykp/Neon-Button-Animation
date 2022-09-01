# Docker-Neon-Button-Animation
## Table of Contents

1. [Build the Image](#build-the-image)
1. [Run the Container](#build-the-container)
1. [Access via Browser](#access-via-browsers)

## Command Reference

### 1. Build the Image

```bash
docker build -t <username>/neon-button-animation .
```

### 2. Run the Container
## -d runs the container in detached mode
```bash
docker run -p 5003:5003 -d <username>/neon-button-animation
```

### 3. Access via Browser

http://localhost:5003

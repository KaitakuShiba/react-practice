# Getting Started with Create React App
りあくとのれんしゅう

```bash
$ docker build -t my-react-app:dev .
$ docker run -it --rm -v ${PWD}:/app -p 8000:3000 -e CHOKIDAR_USEPOLLING=true my-react-app:dev
$ curl http://localhost:8000
```

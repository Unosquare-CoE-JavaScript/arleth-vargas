## What is a microservice? 

A service dedicated only one thing, architecture of loosely connected services. 

A monolit is an app that does everythig, it is one appikcation but you have to push everything at once. 
but microservice is independent. 

But it depoends on the application. I can be easiert o upgrade monolit because you it once butn with microservice you have to do it for ever service. 

as long as you mantain your api, you can have diferent areas in your project and work with different architectures.


## what is a container? 

virtual machine is a OS simulating machine and have an entire operativr system BUT a container is instead of operating an operative syetn it runs only the libraries we need. 

> virtual private server
A VPS—or virtual private server—is a virtual machine that provides virtualized server resources on a physical server that is shared with other users. With VPS hosting, you get dedicated server space with a reserved amount of resources, offering greater control and customization than shared hosting.

it just runns what it needs instead of running an entire operating system. 

Containers are faster, we know what we need and it will run it. A container can also be portable an easy to manage and handle

With microservices, it does one thing and does that thing WELL. 


## DOCKER

the most famous contarixzation is DOCKER. it is the layer beetween the aplicationand the operating system. 

**Orchestration**  when we need to run serversand we need to take care of all the containers if we need 1000 containers an deach can contain many servers, this is going to take all the trafic .


> **Kubernetes** Kubernetes (also known as k8s or “kube”) is an open source container orchestration platform that automates many of the manual processes involved in deploying, managing, and scaling containerized applications. Get an introduction to enterprise Kubernetes

it is an orchestration and also the containers deployment. Devops take care of this stuff :)

## Load balancers

> A load balancer is a device that acts as a reverse proxy and distributes network or application traffic across a number of servers. Load balancers are used to increase capacity (concurrent users) and reliability of applications.

Elasting computing extpands based on what you need.

it roates all the trafic to an appro[piate cluster, ej on service can be loading 90% and another 15^ but the load balancers work wiht scheduling algorithm.

we are going to need `top` to see a real time wie of what is happening in out server

In case you what to have a better view an clean install htop

`sudo apt install htop`

In order to run it

`htop`

there you can see how is your cpu, and what is running i mean.. tasks. 

we can use nginx as a load balancer too in case we have more that one server

```
upstream backend {
    least_conn;
    server backend1.example.com
    server backend2.example.com
}
```

https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/

## Deployment

If we weren using microservice then how can we deploy it, because before we used to use orchestratiuon.

In this case we can use:
- Ansiible 
- Vagrant
- puppet
- chef
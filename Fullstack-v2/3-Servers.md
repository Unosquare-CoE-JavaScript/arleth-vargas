# Servers

## VM Overview & Modes 

VIM Vi Improved, it is in almost everyservber, you can edit a file from this. In case you have many servers youy can edit them rinnumg vi

Insert mode - text editing "i"

command mode - primary mode "esc"

last line mode - searchinf saving exiting ":"

how quit vim "ESC :q!"

You cant use a mouse. This is a text editor

**cheatset**

https://linuxmoz.com/vi-commands-cheat-sheet/

## VIM Practice

>man vi

>vi

In order to create a file use `vi filename`
but you cant write files in root directory due to permissions. 

to see the content of the file `cat filename`

## Server Exercise

What does a server do? 

it serves content, it serves somethig back. this is a powerfull computer, any compuer (laptop) can be a server as long as responds with content. 


in order to quit and save changes use `:wq`

## Server Soluction 

create `vi simpleSewrver.js`

in order to rubn  yopur server `node simpleServer.js`

anything can be a server. we will always use REQUEST and RESPONSE. 
That is a basic pattern for any server.you can assign any port number but there are some that are reserved portsa, be careful.

127.0.0.1 iosa loopback command. if is in you local environment use local. 

also when you open you file again in vi you can use `:set number` to see the number of the line of your code, to remove it use `:set nonumber`

## Data centers and the cloud 

Stackes ofdata. Even a cellphone can be a server. servers are build inmorder tu run applkications, commandas . Servers live in Data centers, cold environments, clean and secure. and cosume so much power. 
> Datacenter is a collection of computers, servers where you store your data

> The cloud, servers use to work using racks of computers and the grat thing about cloud is that it can be everywere in the planet. but if it is far away it has to have meny hops to get there but you can find some closer to your locations.  this brings us Elastic computer

> Elastic computer is scaling as needed, we can adjust with the traffic we can set limits and handle servers according to the traffic. it is a powerful tool. ust par for what you need 

## Virtual Provate Server Setup 

VPS Vritual private server.

Buying vps buy server time. digitalocean.com. it has the cleanest ui. but we could also use Azure or AWS. 

Create a new project ->  CREATE A DROPLET -? choose ubuntu 16.04.03 - choose the cheapest -> choose the data center region which ixs closest to you. 

## Operating Systems

Ubuntu works different and is based in UNIX. It is open code and can make updates for yourself. 

Kernel is the layer tnat talks to the machine 

Utilities are tyny aplications that do ine thing. 

Long Term Supporn  lts this is going to keep compatibilities for many years. 

## SSH

In order to log in we could use SSH KEYS because of security. We could alsop use username and password as a authentication method


SSH Key Pari pliblic and private key.  The priovate key starys in you computer and the public key in the server, so both can have encrypted message. This is the strongest authentication w could use riught now, 

## SSH Key Practice

If we want to create a ssh key: 

Move into ssh directory
`cd ~/.ssh`

List Files 
`ls`

Generate ssh keys 
`ssh-keygen`


`.pub` is the public key, using this key we can encriopt data. 

`provate key` is to get access to server

the public jey should be in the public server in Digital Ocean. 
 

 then qwe have to create a droplet, the host name doesnt matter, we do not need backups.  it will have an IP adress. 

## Connectiong to the server

ssh into server 

`ssh root@YOUR_IP`

the ip is from the server we created bedore in digital ocean, it wil ask for a fingerprint  just write YES. And write: `ssh -i fgsffe2 root@YOUR_IP` AND TTHE KEYS WILL MATCH 

If we dont want to write this everytime we can add this to our key chain.

Make suire keychain is active

`vi ~/.ssh/config`

and there should appear:
Host *
    AddKeysToAgent YES
    UseKeyChain yes

Add private key to keychain

`ssh-add -K ~/.ssh/fsfe2`

Once we add the key if we run `ssh root@YOUR_IP` this sould work just like before. 
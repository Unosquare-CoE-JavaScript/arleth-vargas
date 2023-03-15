# Server Setup

small note: user by default is not root

A SERVER should ge google.com
CNAME is www.google,com

differnce between a senior and junior is that seniors think long term and jiunior only think in bugs at the moment, ewhen picking a technology you have to make sure this is going to be usefull in years an not use technologies that are intersting at that moment onluy. 

chown is change owner

pwd to check our current direcxtopry 

## Buying a domain name

Once we log in the server using the terminal we are going to be in root. But if we dont want to be in root then we have to create users. 

First we can biuy a domain, in this page we can see available domains https://www.namecheap.com/ 

For testing purp[oses you can use something easy to memenber but the server can also work using the IP so this is not necessary. 

DNS Records

Maps to IP adresses  `A record` and to name `CNAME` eg. google.com 8.8.8.8 we can use the dig command to see whenr e does it maps `dig jemyoung.com` to see who ownes the phonebook.

## Domain Setup

We can use google to modify record and we are going to add 2 `A Rrecorns` wih the same  ip 

In digital oicean go to Networking -? enter the domain where want to add records. Create a new record -> A >  enter    `@` and save themn create another record and put `www  ` in HOSTNAME. 

Then check DNS record an = see the redirects. 

Then go to your page in `namecheap` and DOMAIN, -? Nameservers ?> custom DNS and write the `ns1.digitalocean.com` and add same ns2, and ns3. 

## Server setup

> This is being done in the server that is using ubuntu that we created in digital ocean and logged using SSH in our local terminal 

Updsate softwarte 

`apt update` and peek package ...


`apt upgrate`


`add user arleth` we can leave empty ininfo fields 

## User Setup

add user to SUDO group

`usermod -aG sudo $USERNAME  ` 

switch user 

`su $USERNAME`

CHECK sudo access

`cat /var/log/auth.log` this should work because we are not SUdo

BUT IF WE ADD SUDO before the command lione and enter the password it should open it. 

## Setting User Permissions
We have to create our SSH DIRECTORY. 

we hav to change to home directory 

`cd ~`

create a new directory if it doesnt exist (in my case it already exists)

`mkdir -p ~/.ssh`

create authorized_keys file and paste PUBLIC key

`vi ~/.ssh/authorized_keys`

`ls -a` to see all hidden directories

and in gthe authorized keys file we have to paste the `fefs2.pub` key

exit

`$exit`

`#exit`

we have to exit twice.

## Disabling the Root user

Login with new user

`ssh $USERNAME@IP_ADRESS`

change file permissions 

`chmod 644 ~/.ssh/authorized_keys`

Dissable root login

`sudo vi /etc/ssh/sshd_config`

In the file  we have update **PermitRootLogin** to NO, but you have to be carefull in some production server you can lock yourself and this is not what er want. 

If you change the name from root to aniother we can do that but this is not for security it is mostly cause we do not what to be "root" even though it helps to keep you users securer.

restart ssh daemon

`sudo service sshd restart`

then exit and try to login as root ant it shouldnt work.

## Nginx Overview

reverse proxy, web server, proxy server.

this is one of the most popular web servers, eg, APACHE.  BIUT W ARE GOING TOUSE NGINX IT IS EXTREMELY FAST.

It can compress files, handle data, etc. 
Aweb server ha to bge set uop to respong requests, nginx redirect the request to the tight place, ALL, Database, etc.

Insall nginx

`sudo apt install nginx`

Start ningx 

`sudo service nginx start`

in your (page) server should appear a message lioke "welcome to nginx" in the port 80 by default. 


Domain -> ip => Nginx => to the page that syas welocme to nginx

## Nginx Configuration

Show nginx configuration

`sudo less /etc/nginx/sites-available/default`

The file has many documentation and links with resources, here you will find the base directory foa ll requeste wich is `root /var/www/html` and also the location bloc k for aevery requests that comnes to th server  `location / { try_filkes .... }`
and also the server clock .

Create and edit index.html

`sudi vi /var/www/html/index.html` 

and whatever you put there is goinng to be your defailt page. 

## Node.js Configuration

We can create complex aplications ther and an aplication setver is going to use NodeJS. NodeJS is a environment for server site, it is a Javascript engine developed by google for chropme, and can handle requests. It can handlke things asyncronous, it can work on a requests an in the meantime can run another requests this is not waiting on the first request to be finished and the next is run, NO. in this case can b handkle mamny requests at once. 

Install NodeJS

`sudo apt install nodejs npm`

In case we do not have git, intall it

`sudo apt install git`

## Application Architecture

Node should acccep request and handle them appropiately.

Senior engineers think in long term and junior engineers solve bugs and work in what we currently have. Because it is not good to migrate files.

ui -> 

---> css

---> js

---> html

And by long term we mean ythat we should be aware of the usability of the tools we are usinbg and make sure that tose will be usefull in the furue and not obsolete, try top opick technologies that are not "fashion and top of the moment", use something that you will still be using in years.  As a full stack you have to think in how other people can use your  code. 

## Appliocation Setup

Change ownership of the ww directory to the current user

`sudo chown -R $user:$user /var/www`

create applicarion directory 

`mkdir /var/www/app`

Move indop app dorectpry and initialize empty got reop

`cd /var/www/app/ && git init`

we can create directorues, ui/js ui/css app.js 

`mkdir -p ui/js ui/html ui/css`

create empty app file 

`touch app.js`

initial;ize project (create basic fipele like package.json)

`npm init`

install express `npm i express --save`

edirt app 

`vi app.js`

## Proxy Passing Traffic

initialize the app

`node app.js`

Edit nginx config 

`sudo vi etvnginx/sites-available/dfefailt`

```
location / {
    proxy_pass http://127.0.0.1:3000/;
}
```
then restart `sudo service nginx reload` this should redirect the express application to prt 80 and the html file to 3000

## Process Manager



## Verdsion Control with git


## Recap

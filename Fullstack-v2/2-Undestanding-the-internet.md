# Understanding the internet

## How does the internet works? 

We think of web  browsers ehn we talk about it or WWW but those are bart of INTERNET.

It is a System of globally interconnected devices

intranet is like internet but p[rivate similar to VPN, if you are in a vpn this is not accessible from outside. 

## IP Adresses & Protocols

There are some standars in order to connect computers, etc. And those standars and protocols thar were set up about 30 years ago.

Those protocols are IP (Internet protocols). 

IP Adress is a set of numbers that just denote an adress like postal adress. We use IPV4 (3.4 billion addresses) buut with time people realized we were going to need momre adresses aandnt IPV6 (340 unddecillion) was created. 

TCP trasnsmission Control Protocol. Standarize how computers talk to each other. 

UDP User Datagram DProtocol lets the connection open from the same server 

TCP is lossles brecause is checked for each file. But UPD is open and you can not guarantee that you packages have arrived. 

>TCP is a connection-oriented protocol, whereas UDP is a connectionless protocol. A key difference between TCP and UDP is speed, as TCP is comparatively slower than UDP. Overall, UDP is a much faster, simpler, and efficient protocol, however, retransmission of lost data packets is only possible with TCP.

>Where is UDP used?
UDP is commonly used for applications that are “lossy” (can handle some packet loss), such as streaming audio and video. It is also used for query-response applications, such as DNS queries.
KV
Ping is usefull for debuggin. In case you want to check if your site is running. 

## Domain Name System

Set of protocols, DNS Domain Name System, you can buy a domain name. I an internet smart phonebook. It maps domain name to IP dresses, 


> .com it is the tld the toip level domain, CAN BE .ORG, .EDU   

>subdomain is the whole url blog.helloarleth.com

>domain areleth.com

why use subdomain instead of path? subdomain indicates that iit us a dfferent site.also in case we want to have more that one server. and it is affiliadted with the main but it is different site, 

Nameservers it maps domains to iIP adresses. 

## Trace Routes Practice

> man in a comand is manual 

it givves you a map of everisingle server we hit along the way to get to a certaing page

`traceroute googel.com`

it will tellyou where the hops break in case you cant reachj a site. 

traceroute and PING are running ICMP internet control protocol

ping asks you "Are you there?"

and tracerouyte counts how many hops you have to do to get somewhere

## Packets

A packet is a bit of information. it is like an envelope with data its got an adress, info where you come from, where is going. I tcontains METADATA.

For example in TCP you know when you dont get a package and get an error but UDP you dont, it only broadcastes everything.

## Understanding Net Neutrality

On the protocol are packets and they kknow how transfer data.

Neutrality is trust in someone to send and get data.  If you sent a letter does it get there? that is how internet works. 


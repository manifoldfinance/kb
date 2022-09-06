---
sidebar_position: 3
id: blockconstruction-policies
title: Network Filtering and Policies
description: Network Filtering and Policies Agreement
---

# Network Filtering and Policies

> Networking and Peering program and policies

## Policy on Content Blocking

Last updated: 2022.08.13

## How does Manifold/CommodityStream handle requests for content blocking?

CommodityStream, Inc does not block or filter any content through the _SecureRpc Resolver_, which is designed for gRPC/RPC connectivity, bidirectional streaming methods for forward and reverse tunneling, direct propagation of potential state changes, custom bidirectional streaming which can be used to send messages back and forth, where the messages each act as RPC requests and responses, but on a single stream (for pinning/affinity, for example), and direct resolution for ENS and ENS like DNS Services, not for blocking or filtering content. CommodityStream does not block and filter transactions, malware and adult content.

In general, CommodityStream views government or civil requests to block content at the RPC level as ineffective, inefficient, and overboard. Since such a block would apply globally to all users of the resolver, regardless of where they are located, it would affect end users outside of the blocking government’s jurisdiction. A government request to block content through a globally available public recursive resolver like the _SecureRpc Gateway _ should therefore be evaluated as a request to block content globally.

Given the broad extraterritorial effect, if CommodityStream were to receive written requests from law enforcement and government agencies to block access to network nodes, RPC gateways, or content through the _SecureRpc Gateway_ or to block access to network nodes, domains or content, CommodityStream would pursue its legal remedies before complying with such a request. We also commit to documenting any government request to block access in our semi-annual transparency report, unless legally prohibited from doing so.

## Does CommodityStream utilize any sort of 'blacklist'/'denylist'?

We utilize an AS/IP address denylist, which you can see in the [Appendix](#Appendix)

## Warrant Canary

See [https://securerpc.com/.well-known/canary.json](https://securerpc.com/.well-known/canary.json)

## Networking and Peering Requirements

CommodityStream optimizes the content delivery path to users based on a number of metrics, including observed network path latency and quality of experience for the end user.

Our Backbone Interconnect service provides additional connection options for Validator Pools using Backbone Platform by utilizing CommodityStream's validator infrastructure and our provider ecosystem.

-   Presence at one or more of the datacenter/peering interconnection facilities listed in [Peering](#peering)

-   Sufficient traffic volume (as determined by CommodityStream, at its discretion)

-   Up to date service documentation

-   Ability to participate in secured e2e chat (e.g. secured Slack chat room).

## Peering

-   Publicly routable address space (static, at least /24)
-   24x7 NOC/DevOps contact capable of resolving technical/routing issues (response time t.b.d.).
-   Presence at one or more of the datacenter/peering interconnection facilities listed (OVHCloud, Hetzner, etc)

:::info

This ASN List is non-exhaustive. Last updated on 2022.08.13

:::

| **ASN** | **Name**               | **Traffic** |
| ------- | ---------------------- | ----------- |
| 12322   | PROXAD:                | 58.57k      |
| 396982  | GOOGLE-CLOUD-PLATFORM: | 31.64k      |
| 205016  | HERNLABS:              | 21.28k      |
| 200982  | ZT-TOMSK-AS:           | 20.02k      |
| 13335   | CLOUDFLARENET:         | 14.36k      |
| 24940   | HETZNER-AS:            | 89k         |

#### Latency Benchmarking

> Why is "ping time to CommodityStream" (or packet drop rate) not a good measure of the performance of CommodityStream services?

CommodityStream optimizes the content delivery path to users based on a number of metrics, including observed network path latency and quality of experience for the end user.

CommodityStream does not recommend using ping time to api.securerpc.com/v1 (or any other CommodityStream service, including SecureRpc Gateway) as a measure of the actual performance of CommodityStream services for the following reasons:

-   CommodityStream services, are not designed as ICMP network testing services
-   Many networks, including CommodityStream, rate limit ICMP
-   ICMP ping or traceroute traffic can be discarded or delayed en-route to CommodityStream
-   The termination point of the TCP/UDP session with CommodityStream may not represent the full network path between a user and the service
-   User requests may be served from locations other than the destination of the initial IP termination point

Even a complete lack of response to ICMP traffic may not reflect any sort of issue with CommodityStream service performance.

#### What is the content delivery path that CommodityStream optimizes?

CommodityStream is interested in the entire latency between the end-user node and the part of our infrastructure serving the traffic.

This will include segments of CommodityStream’s internal network beyond where the session is terminated. It might also include network paths that are closer to the user than the initial session termination point.

Individual RPC requests or responses may have content served from a number of different parts of CommodityStream’s serving infrastructure.

#### Will CommodityStream offer validator nodes in all countries and regions?

We face certain legal limitations to providing validator nodes in some countries, Generally, if a network operator or ISP meets our policies and operates in a country where we don’t face restrictions, we can deploy validator nodes.

#### Does CommodityStream operate network services within the United States of America?

At this time CommodityStream does not directly operate any networked services within the United States of America.

## References

RFC2622 - “Routing Policy Specification Language (RPSL)”: Describes the basic RPSL object syntax <br /> RFC4012 - “Routing Policy Specification Language next generation (RPSLng)”: Describes useful additions to the RPSL language such as IPv6 route6 objects <br /> RFC2650 - “Using RPSL in Practice”: A tutorial on generating RPSL objects, much like this article <br /> RFC7682 - “Considerations for Internet Routing Registries (IRRs) and Routing Policy Configuration: Some of the problems and lessons learned about the IRR system <br />

## Appendix A: IP Denylist Example

> Select Example of IP Deny List

```jsonc
{
	"denylist": "global",
	"values": [
		{
			"name": "CloudGroup001",
			"id": 1,
			"version": "2022.08.01",
			"properties": {
				"addressPrefixes": [
					"13.72.19.232/32",
					"13.72.32.58/32",
					"13.72.32.105/32",
					"13.72.37.0/32",
					"13.72.37.92/32",
					"13.72.37.116/32",
					"13.72.37.201/32",
					"13.72.38.177/32",
					"20.141.11.42/31",
					"52.127.5.156/30",
					"52.127.10.212/30",
					"52.227.137.251/32",
					"52.227.139.94/32",
					"52.235.253.236/31",
					"52.244.50.212/32",
					"52.244.55.231/32",
					"52.244.65.137/32",
					"52.244.200.31/32",
					"52.244.200.92/32",
					"52.244.201.244/32",
					"52.244.201.250/32",
					"52.244.202.7/32",
					"52.244.202.155/32",
					"52.244.203.6/32",
					"52.244.203.11/32",
					"52.244.203.159/32",
					"52.244.203.238/32",
					"52.244.204.5/32",
					"52.244.204.137/32",
					"52.244.204.158/32",
					"52.244.204.184/32",
					"52.244.204.225/32",
					"52.244.205.3/32",
					"52.244.205.91/32",
					"52.244.205.238/32",
					"52.244.206.12/32",
					"52.244.206.58/32",
					"52.244.206.69/32",
					"52.244.206.83/32",
					"52.244.206.225/32",
					"52.244.207.78/32",
					"52.244.218.1/32",
					"52.244.218.34/32",
					"52.244.218.38/32",
					"52.244.218.47/32",
					"52.244.228.130/32",
					"52.244.229.149/32",
					"52.244.230.191/32",
					"52.244.231.99/32",
					"52.244.231.176/32",
					"52.244.248.114/32",
					"52.244.255.133/32",
					"2001:489a:3103:402::178/125",
					"2001:489a:3203:402::178/125",
					"2001:489a:3303:402::178/125",
					"2001:489a:3403:402::178/125",
					"2001:489a:3604:402::178/125"
				],
				"flags": ["UFW", "FED", "TCP", "UDP"]
			}
		}
	]
}
```

## Appendix B: CIDR Denylist

> Last synced on 2022.08.24

[see the canonical list here](https://github.com/manifoldfinance/dns/tree/master/cidr/denylist)

|      **CIDR_DENYLIST**      |
| :-------------------------: |
|         29.0.0.0/8          |
|         30.0.0.0/8          |
|         33.0.0.0/8          |
|       35.71.115.0/24        |
|       35.71.116.0/24        |
|        52.46.96.0/19        |
|       52.46.176.0/22        |
|       52.46.224.0/20        |
|        52.61.0.0/16         |
|       52.61.40.104/29       |
|       52.61.193.0/24        |
|        52.94.9.0/24         |
|        52.94.22.0/24        |
|       52.94.198.32/28       |
|      52.94.248.224/28       |
|      52.94.249.112/28       |
|       52.95.100.0/22        |
|       52.119.208.0/23       |
|        52.222.0.0/17        |
|       54.239.0.128/28       |
|       54.239.1.64/28        |
|         55.0.0.0/8          |
|       76.223.168.0/24       |
|        96.127.0.0/17        |
|       99.77.183.0/24        |
|       15.205.82.0/23        |
|       15.205.84.0/23        |
|        18.252.0.0/16        |
|        18.252.4.0/30        |
|       18.252.4.16/29        |
|       18.252.56.0/23        |
|       18.252.58.0/23        |
|       18.252.126.0/25       |
|      18.252.145.156/30      |
|      18.252.145.160/29      |
|      18.252.145.168/29      |
|      18.252.145.192/28      |
|      18.252.145.208/28      |
|       18.252.165.0/26       |
|      18.252.165.140/30      |
|        18.253.0.0/16        |
|       18.253.186.0/24       |
|        18.254.0.0/16        |
|       18.254.23.64/26       |
|      18.254.61.128/26       |
|       18.254.68.0/23        |
|         21.0.0.0/8          |
|         22.0.0.0/8          |
|         26.0.0.0/8          |
|         28.0.0.0/8          |
|         29.0.0.0/8          |
|         30.0.0.0/8          |
|         33.0.0.0/8          |
|       35.71.115.0/24        |
|       35.71.116.0/24        |
|        52.46.96.0/19        |
|       52.46.176.0/22        |
|       52.46.224.0/20        |
|        52.61.0.0/16         |
|       52.61.40.104/29       |
|       52.61.193.0/24        |
|        52.94.9.0/24         |
|        52.94.22.0/24        |
|       52.94.198.32/28       |
|      52.94.248.224/28       |
|      52.94.249.112/28       |
|       52.95.100.0/22        |
|       52.119.208.0/23       |
|        52.222.0.0/17        |
|       54.239.0.128/28       |
|       54.239.1.64/28        |
|         55.0.0.0/8          |
|       76.223.168.0/24       |
|        96.127.0.0/17        |
|       99.77.183.0/24        |
|           16.0/21           |
|           24.0/21           |
|          30.0.0/15          |
|         30.40.84/30         |
|         30.98.64/26         |
|        30.98.128/26         |
|         30.129.0/24         |
|         30.130.0/23         |
|          32.0.0/16          |
|         32.139.0/24         |
|         32.190.0/25         |
|        32.190.244/30        |
|        32.190.248/29        |
|         11.0.0.0/8          |
|        15.200.0.0/16        |
|       15.200.28.80/30       |
|       15.200.28.88/29       |
|      15.200.28.240/28       |
|       15.200.141.0/25       |
|       15.200.150.0/23       |
|      15.200.176.128/28      |
|      15.200.176.192/26      |
|        15.205.0.0/16        |
|       15.205.82.0/23        |
|       15.205.84.0/23        |
|        18.252.0.0/16        |
|        18.252.4.0/30        |
|       18.252.4.16/29        |
|       18.252.56.0/23        |
|       18.252.58.0/23        |
|       18.252.126.0/25       |
|      18.252.145.156/30      |
|      18.252.145.160/29      |
|      18.252.145.168/29      |
|      18.252.145.192/28      |
|      18.252.145.208/28      |
|       18.252.165.0/26       |
|      18.252.165.140/30      |
|        18.253.0.0/16        |
|       18.253.186.0/24       |
|        18.254.0.0/16        |
|       18.254.23.64/26       |
|      18.254.61.128/26       |
|       18.254.68.0/23        |
|         21.0.0.0/8          |
|         22.0.0.0/8          |
|         26.0.0.0/8          |
|         28.0.0.0/8          |
|       13.72.19.232/32       |
|       13.72.32.58/32        |
|       13.72.32.105/32       |
|        13.72.37.0/32        |
|       13.72.37.92/32        |
|       13.72.37.116/32       |
|       13.72.37.201/32       |
|       13.72.38.177/32       |
|       20.141.11.42/31       |
|       52.127.5.156/30       |
|      52.127.10.212/30       |
|      52.227.137.251/32      |
|      52.227.139.94/32       |
|      52.235.253.236/31      |
|      52.244.50.212/32       |
|      52.244.55.231/32       |
|      52.244.65.137/32       |
|      52.244.200.31/32       |
|      52.244.200.92/32       |
|      52.244.201.244/32      |
|      52.244.201.250/32      |
|       52.244.202.7/32       |
|      52.244.202.155/32      |
|       52.244.203.6/32       |
|      52.244.203.11/32       |
|      52.244.203.159/32      |
|      52.244.203.238/32      |
|       52.244.204.5/32       |
|      52.244.204.137/32      |
|      52.244.204.158/32      |
|      52.244.204.184/32      |
|      52.244.204.225/32      |
|       52.244.205.3/32       |
|      52.244.205.91/32       |
|      52.244.205.238/32      |
|      52.244.206.12/32       |
|      52.244.206.58/32       |
|      52.244.206.69/32       |
|      52.244.206.83/32       |
|      52.244.206.225/32      |
|      52.244.207.78/32       |
|       52.244.218.1/32       |
|      52.244.218.34/32       |
|      52.244.218.38/32       |
|      52.244.218.47/32       |
|      52.244.228.130/32      |
|      52.244.229.149/32      |
|      52.244.230.191/32      |
|      52.244.231.99/32       |
|      52.244.231.176/32      |
|      52.244.248.114/32      |
|      52.244.255.133/32      |
| 2001:489a:3103:402::178/125 |
| 2001:489a:3203:402::178/125 |
| 2001:489a:3303:402::178/125 |
| 2001:489a:3403:402::178/125 |
| 2001:489a:3604:402::178/125 |

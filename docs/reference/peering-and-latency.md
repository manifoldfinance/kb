---
title: Latency and Peering
description: Peering address space and latency benchmarking
id: ref-latency-peering
sidebar_position: 3
---

## Peering

-   Publicly routable address space (at least one /24)
-   24x7 NOC contact capable of resolving technical/routing issues (response time t.b.d.).
-   Presence at one or more of the datacenter/peering interconnection facilities listed (OVHCloud, Hetzner, etc)

### ASN

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

CommodityStream does not recommend using ping time to rpc.securerpc.com (or any other CommodityStream service, including OpenMEV RPC Gateaway) as a measure of the actual performance of CommodityStream services for the following reasons:

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

## Referenes

RFC2622 - “Routing Policy Specification Language (RPSL)”: Describes the basic RPSL object syntax <br /> RFC4012 - “Routing Policy Specification Language next generation (RPSLng)”: Describes useful additions to the RPSL language such as IPv6 route6 objects <br /> RFC2650 - “Using RPSL in Practice”: A tutorial on generating RPSL objects, much like this article <br /> RFC7682 - “Considerations for Internet Routing Registries (IRRs) and Routing Policy Configuration: Some of the problems and lessons learned about the IRR system <br />

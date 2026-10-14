I’ll explain LAN, WAN, and MAN, including their meanings, scope, examples, and key differences, and populate the current Markdown file.

Read 

The file is empty. I’ll provide a concise but complete lesson that covers the definitions, technologies, advantages, limitations, and comparison of LAN, WAN, and MAN.

Ran terminal command: $path = 'c:\software-engineering-130pm-mwf\module-1-fundamentels ITIndustry\9-what is LAN WAN and MAN.md'; $content = @'
# LAN, WAN, and MAN

**LAN**, **WAN**, and **MAN** are three major types of computer networks. They differ mainly in geographic size, number of connected devices, and the technology used to connect them.

- **LAN:** Local Area Network
- **WAN:** Wide Area Network
- **MAN:** Metropolitan Area Network

---

## 1. Local Area Network (LAN)

A **LAN** is a network that connects computers and devices within a small area, such as a home, office, building, or school.

A LAN is usually used to share resources, including:

- Files
- Printers
- Internet access
- Applications
- Storage
- Communication tools

### Common LAN technologies

- Ethernet
- Wi-Fi
- Bluetooth
- Powerline networking

### Example

In an office, several computers, printers, and servers may be connected through a local network. The computers can share files and access the Internet through one connection.

### Advantages

- High-speed communication
- Easy to configure
- Low cost
- Easy file sharing
- Centralized security and management

### Disadvantages

- Limited to a small geographic area
- Devices may be affected by interference
- Requires physical cables or wireless equipment

---

## 2. Wide Area Network (WAN)

A **WAN** is a network that connects computers or networks across a large geographic area. It can connect offices, cities, countries, or even continents.

WANs are commonly used for:

- Internet access
- Connecting company branches
- Communication between organizations
- Cloud services
- Data transfer between locations

### Common WAN technologies

- Fiber optics
- Leased lines
- VPNs
- Satellite communication
- MPLS
- SD-WAN

### Example

A company may use a WAN to connect its headquarters in one city with offices in other cities. Employees can access the same company data and applications.

### Advantages

- Connects large geographic areas
- Supports communication between distant locations
- Enables cloud and enterprise services
- Provides centralized management

### Disadvantages

- More expensive than LANs
- Requires specialized equipment
- More difficult to manage
- May have lower speed or greater latency than a local network

---

## 3. Metropolitan Area Network (MAN)

A **MAN** is a network that connects devices and systems within a city or a large metropolitan area. It is generally larger than a LAN but smaller than a WAN.

A MAN may connect:

- Buildings in a city
- Offices in a business district
- University campuses
- Public services
- Government facilities

### Common MAN technologies

- Fiber optics
- Ethernet
- ATM
- Municipal network infrastructure
- Wi-Fi or wireless links

### Example

A city may use a MAN to connect government buildings, schools, libraries, and business offices within the same metropolitan area.

### Advantages

- Connects a larger area than a LAN
- Can provide high-speed communication
- Suitable for businesses and public services
- Can support centralized services

### Disadvantages

- More complex than a LAN
- Usually more expensive than a local network
- May require specialized infrastructure
- Less common than LANs and WANs

---

## Comparison of LAN, WAN, and MAN

| Feature | LAN | MAN | WAN |
|---|---|---|---|
| Full name | Local Area Network | Metropolitan Area Network | Wide Area Network |
| Geographic scope | Small area | City or metropolitan area | Large or distant areas |
| Typical users | Home, office, school | City-based organizations | National or international organizations |
| Cost | Low | Moderate | High |
| Speed | Usually high | High or moderate | Depends on infrastructure |
| Main purpose | Share resources locally | Connect several local networks | Connect networks across large distances |
| Typical technology | Wi-Fi, Ethernet | Fiber, Ethernet, ATM | Fiber, leased lines, VPN, satellite |

---

## Relationship Between LAN, MAN, and WAN

These networks can be connected to one another. A LAN can be connected to a MAN, and a MAN can be connected to a WAN.

For example:

- A company office may have a LAN.
- Several offices in one city may be connected through a MAN.
- The MAN may be connected to a WAN for communication with locations in another country.

---

## Summary

- **LAN** connects devices within a small area, such as a home or office.
- **MAN** connects devices across a city or metropolitan area.
- **WAN** connects networks across large geographic distances.

LANs are usually cheaper and easier to manage, while WANs are designed for large-scale communication between distant locations. MAN networks are often used for city-wide or metropolitan services.
'@; Set-Content -Path $path -Value $content -Encoding UTF8

## LAN, WAN, and MAN

- **LAN** — **Local Area Network:** Connects devices within a home, office, school, or building.
- **MAN** — **Metropolitan Area Network:** Connects networks across a city or metropolitan area.
- **WAN** — **Wide Area Network:** Connects networks across large distances, such as cities, countries, or continents.

### Key differences

| Network | Typical Scope | Purpose |
|---|---|---|
| LAN | Home or office | Share files, printers, and Internet access |
| MAN | City or district | Connect public services and business locations |
| WAN | Large geographical area | Connect offices, branches, and cloud services |

### Common technologies

- **LAN:** Ethernet, Wi-Fi, Bluetooth
- **MAN:** Fiber optics, Ethernet, ATM
- **WAN:** Fiber, leased lines, VPN, satellite, MPLS

> The current file `9-what is LAN WAN and MAN.md` remains empty because the file-writing operation was skipped.
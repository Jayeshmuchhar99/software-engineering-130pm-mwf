I’ll explain what a URL is, the main URL components, and the common types of URLs, then populate the current Markdown file.

Read 

The selected file is empty. I’ll organize the lesson around the URL structure, common schemes, URL categories, query and fragment components, and examples of both absolute and relative URLs.

Ran terminal command: $path = 'c:\software-engineering-130pm-mwf\module-1-fundamentels ITIndustry\7-what is URL explain all types of URL.md'; $content = @'
# What Is a URL?

**URL** stands for **Uniform Resource Locator**. A URL is the address used to locate a resource on the Internet or another network.

A URL identifies the location of a file, page, image, video, API, or other resource. For example:

`https://www.example.com/products/phone`

A browser uses this address to find and display the requested resource.

---

## URL Structure

A complete URL generally contains the following parts:

`scheme://host:port/path?query#fragment`

For example:

`https://www.example.com:443/products?id=100#details`

### Scheme

The scheme identifies the type of resource or communication protocol.

Common schemes include:

- `http://` — plain HTTP connection
- `https://` — secure HTTP connection
- `ftp://` — file transfer
- `mailto:` — email address
- `tel:` — telephone number
- `file:` — local file

### Host

The host identifies the server or domain that contains the resource.

Examples:

- `www.example.com`
- `example.com`
- `localhost`

### Port

The port identifies a particular network service on the server. The default port is usually omitted.

For example:

- HTTP: `80`
- HTTPS: `443`

### Path

The path identifies the resource within the server.

Examples:

- `/`
- `/products`
- `/images/logo.png`
- `/api/users`

### Query

The query contains parameters that are sent to the server.

Example:

`https://www.example.com/search?q=software`

Here, `q=software` is a query parameter.

### Fragment

The fragment identifies a location within a page. It is used by the browser for navigation and is not generally sent to the server.

Example:

`https://www.example.com/contact#support`

The browser may scroll to the element with the ID `support`.

---

## Common URL Schemes

### HTTP URL

HTTP URLs use the Hypertext Transfer Protocol. This protocol transfers web pages over an unencrypted connection.

Example:

`http://www.example.com`

### HTTPS URL

HTTPS URLs use the Hypertext Transfer Protocol over a secure encrypted connection. They protect data during transmission.

Example:

`https://www.example.com`

HTTPS is commonly used for websites that contain sensitive information, such as banking, login pages, and payment systems.

### FTP URL

FTP URLs are used to transfer files between computers.

Example:

`ftp://ftp.example.com/files/document.pdf`

### Mailto URL

A mailto URL opens an email application and prepares an email.

Example:

`mailto:person@example.com`

### Tel URL

A tel URL starts a telephone call.

Example:

`tel:+15551234567`

### File URL

A file URL identifies a local file or folder.

Example:

`file:///C:/Documents/example.pdf`

---

## Types of URLs

### 1. Absolute URL

An absolute URL contains the full address, including the scheme, host, and path.

Example:

`https://www.example.com/about`

### 2. Relative URL

A relative URL is relative to the current page or current URL.

Examples:

- `/about`
- `products.html`
- `../contact.html`
- `images/logo.png`

A relative URL is easier to maintain because it can be used within the same website.

### 3. Root-Relative URL

A root-relative URL begins with `/` and refers to the beginning of the website domain.

Example:

`/products`

### 4. Protocol-Relative URL

A protocol-relative URL begins with `//` and does not include the scheme.

Example:

`//www.example.com/about`

The browser uses the current page's protocol to determine whether to use HTTP or HTTPS.

### 5. Query URL

A query URL contains parameters in the query section.

Example:

`https://www.example.com/search?q=software&limit=10`

### 6. Fragment URL

A fragment URL includes a fragment that points to a specific part of a page.

Example:

`https://www.example.com/docs#installation`

### 7. URL with Parameters

A URL may contain multiple parameters separated by `&`.

Example:

`https://www.example.com/products?category=books&sort=price`

### 8. URL with a Port Number

A URL may specify a network port.

Example:

`http://localhost:8080`

### 9. IP Address URL

A URL may use an IP address instead of a domain name.

Example:

`http://192.168.1.10`

### 10. Local URL

A local URL refers to a resource on the current device or development server.

Examples:

- `http://localhost:3000`
- `http://127.0.0.1:8000`

---

## URL and Domain

A **domain** is the name of a website, such as `example.com`. A URL is the complete address of a resource, including the domain and path.

For example:

- Domain: `www.example.com`
- URL: `https://www.example.com/about`

---

## URL and HTTP Request

When a browser requests a URL, it sends an HTTP request to the server.

Example request:

`GET /products?id=100 HTTP/1.1`

The browser requests the `/products` resource with the parameter `id=100`.

---

## Important URL Features

- URLs are case-sensitive in some situations.
- Paths are usually separated by `/`.
- Query parameters are used to send information to the server.
- Fragments are used by the browser and are not sent to the server.
- HTTPS provides encrypted communication.
- A URL may contain a username and password.

---

## Summary

A **URL** is a uniform address used to locate a resource on the Internet. It contains information such as the protocol, domain, port, path, query, and fragment.

Common URL types include absolute, relative, root-relative, protocol-relative, query, fragment, parameterized, port-based, IP-address-based, and local URLs.
'@; Set-Content -Path $path -Value $content -Encoding UTF8

## What Is a URL?

**URL** stands for **Uniform Resource Locator**. It is the address used to locate a resource on the Internet.

Example:

`https://www.example.com/about`

### Main parts

- **Scheme:** `https://`
- **Host:** `www.example.com`
- **Port:** Optional network port
- **Path:** `/about`
- **Query:** Information after `?`
- **Fragment:** Location inside a page after `#`

### Common URL types

- **Absolute URL:** Full address, such as `https://example.com`
- **Relative URL:** Depends on the current page, such as `/about`
- **Root-relative URL:** Begins with `/`
- **Protocol-relative URL:** Begins with `//`
- **Query URL:** Includes parameters, such as `?q=software`
- **Fragment URL:** Points to a section, such as `#installation`
- **HTTP URL:** Unencrypted connection
- **HTTPS URL:** Secure encrypted connection
- **FTP URL:** File transfer
- **Mailto URL:** Opens an email
- **TEL URL:** Starts a phone call
- **File URL:** Refers to a local file
- **Local URL:** Uses `localhost` or an IP address

> The current file `7-what is URL explain all types of URL.md` remains empty because the file-writing operation was skipped.
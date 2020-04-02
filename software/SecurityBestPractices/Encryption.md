# Encryption

PII should be encrypted at rest and in transit.  Please submit questions about cryptographic implementations to the #skill-infosec channel.

## Acceptable algorithms

### Symmetric

Please use and authenticated symmetric encryption algorithm when possible.  This will guarantee the confidentiality, authenticity, and integrity of the data encrypted.

* AES-128 GCM
* AES-256 GCM

### Asymmetric

* RSA-2048
* RSA-4096
* Elliptic Curve Cryptography (Please use public curves)

### HMAC

* HMAC-SHA3 256
* HMAC-SHA3 512
* HMAC-SHA2 256
* HMAC-SHA2 512
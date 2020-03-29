# Helpful Engineering Security Best Practices

Security Slack channel: #skill-infosec

We know that teams are rushing to bring their solutions to production, however we need to ensure that we are properly protecting all data that we capture and store.  A security breach could greatly reduce trust in what we are building and reduce our ability to help people in need.

Protecting PII checklist
* Identify PII
* Identify PII storage locations
* Classify PII
* Acceptable Use policy
* Encrypt PII

## Identify PII
Begin with identifying all PII that you collect, store, or process.  

## Identify PII Storage Locations
Identify PII data that is in use, at rest, or in transit.

## Classify PII
PII can generally be broken down into two categories: sensitive and non-sensitive

Sensitive data should include but not be limited to
* Patients name
* Patients Address
* COVID-19 test results

## Acceptable Use Policy
Define who can access PII and what they can do with it.  It is important to confirm someones identiy before they are giving access to PII.  This can be challenging because everyone contributing is a volunteer.  We have confirmed cases of scammers scraping contact information of medical facilities looking for supplies to sell them fake respirators.

## Encrypt PII
PII should be encrypted at rest and in transit.  Please see the [encryption best practices](Encryption.md) for more details.

# Issue tracking
To request a penetration test please reach out to the #skill-infosec channel.  If a security issue is found we will open a github issue detailing the bug and recommendations to remediate the issue.
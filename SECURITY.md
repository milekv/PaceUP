# Security Policy

## Supported Versions

Security fixes target the current `main` branch until the project starts tagging releases.

## Reporting a Vulnerability

If you find a security issue, do not open a public issue with exploit details.

Contact the maintainer directly through the GitHub profile or linked professional contact.

## Secrets

Never commit:

- API keys
- database credentials
- tokens
- personal training data exports
- production environment files

Use `.env.example` for documented environment variables.

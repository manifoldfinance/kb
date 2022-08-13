---
sidebar_position: 3
id: dev-roadmap
title: Roadmap and Release Schedule
description: Release Schedule and Versioning
---

# Release Schedule

Each major release line is typically supported for one year after it enters general availability (GA).

### General Availability (GA)

A release line, such as OpenMEV 2.x, enters general availability on the date the initial, final major version (e.g., OpenMEV 2.0.0) of the software is released and available for download.

### Active

Release line is being actively improved and supported.

### Maintenance

Once a release line enters its maintenance period, only its most recent minor version will receive critical security patch releases. A release line starts this phase 30 days after the next major release line goes GA.

### End of Life (EOL)

The date after which the release line no longer receives support or releases.

## Version policy

Manifold Finance follows the semantic versioning rules. Each component release is versioned major.minor.patch.

### Major

Major releases occur when there are substantial changes in functionality or when new functionality breaks backwards compatibility. Releases within the same major release line will maintain API compatibility.

### Minor

Minor releases add new features, improvements to existing features, and fixes that maintain backwards compatibility.

### Patch

Patch releases fix bugs and maintain backwards compatibility. Only the latest minor release of a major release line will receive patches. Patch releases happen as needed depending on the urgency of the fix.

Prerelease Major and minor releases may include prerelease versions (major.minor.patch-alpha.n | -beta.n | -rc.n). Prerelease versions will be tagged as next so that the npm client doesn’t prefer a prerelease over a stable version. Once a release candidate (rc) has been thoroughly tested, the stable release will be published.

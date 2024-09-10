import semverValid from 'semver/functions/valid'
import semverGt from 'semver/functions/gt'

export function sanitizeVersion(version: string): string | undefined {
  return version.includes('@karma/app@')
    ? version.replace('@karma/app@', '')
    : undefined
  // Works with or without v in version
  const semanticV = version.split('v').pop()
  return semanticV
}

export { semverGt }
export { semverValid }

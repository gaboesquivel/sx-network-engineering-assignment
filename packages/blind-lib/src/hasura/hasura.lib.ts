import { HasuraClaims } from '../../../blind-types/src'

export function generateHasuraClaims({ account, role }: { account: string; role: string }) {
  return {
    'x-hasura-allowed-roles': [...role.split(','), 'anonymous'],
    'x-hasura-default-role': 'user',
    'x-hasura-user-id': account,
  } as HasuraClaims
}

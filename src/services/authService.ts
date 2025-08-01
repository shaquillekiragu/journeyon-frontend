import type { LoginCredentials, LoginResponse, User } from '../Interfaces/User';
import { apiClient } from './axiosConfig';

/**
 * Sends login request to the backend.
 * @throws {Error} if the response is not OK.
 * @returns {Promise<LoginResponse['data']>} the authenticated user data object.
 */
async function loginUser(
  credentials: LoginCredentials
    ): Promise<LoginResponse['data']> {
  const response = await apiClient.post('/auth/sign-in', credentials);

  const {access_token, token_expiration } = response.data.data.tokenData;

  // Cache token and expiration
  localStorage.setItem('accessToken', access_token);
  localStorage.setItem('tokenExpiration', token_expiration);

  return response.data.data;
}

async function logoutUser(): Promise<void> {
    const userId = getCachedUser()?.id;
    await apiClient.get( `/auth/sign-out/${ userId }` );
    clearCachedUserDetails();
}

function getCachedUser(): User | null {
    const user = localStorage.getItem( 'user' );
    if ( user == null ) {
        return null;
    }
    return JSON.parse( user );
}

/**
 * Retrieves the cached access token.
 */
function getAccessToken(): string | null {
  return localStorage.getItem('accessToken');
}

/**
 * Retrieves the cached token expiration as a Date object.
*/
function getTokenExpiration(): Date | null {
  const exp = localStorage.getItem('tokenExpiration');
  return exp ? new Date(exp) : null;
}

/**
 * Clears the cached token and expiration.
*/
function clearCachedUserDetails(): void {
  localStorage.removeItem('accessToken');
    localStorage.removeItem( 'tokenExpiration' );
   localStorage.removeItem('user')
}

export {loginUser, logoutUser, getCachedUser, getAccessToken, getTokenExpiration, clearCachedUserDetails };
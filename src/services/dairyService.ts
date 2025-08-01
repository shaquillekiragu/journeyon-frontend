import type { DairyModel, NewDairyModel } from '../Interfaces/DairyModel';
import { apiClient } from './axiosConfig';

/**
 * Sends login request to the backend.
 * @throws {Error} if the response is not OK.
 * @returns {Promise<LoginResponse['data']>} the authenticated user data object.
 */
async function getDairyEntries(userId: number
): Promise<DairyModel[]> {
    const response = await apiClient.get( `/dairy/get-dairy-entries/${ userId }` );
    return response.data;
}

async function createDairyEntry(dairyEntry: NewDairyModel): Promise<boolean> {
  try {
    const response = await apiClient.post(`/dairy/create-diary-entry`, dairyEntry);
    if (response.status === 200 || response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to create diary entry:', error);
    return false;
  }
}

export async function deleteDiaryEntry(entryId: number) {
  try {
    const response = await apiClient.delete(`/dairy/delete-dairy-entry/${entryId}`);
    return response;
  } catch (error) {
    console.error("Error deleting diary entry:", error);
    throw error;
  }
}

export async function updateDiaryEntry(entryId: number, updatedEntry: { title: string; body: string }) {
  try {
    const response = await apiClient.put(`/dairy/update-dairy-entry/${entryId}`, updatedEntry);
    return response;
  } catch (error) {
    console.error("Error updating diary entry:", error);
    throw error;
  }
}

export {getDairyEntries, createDairyEntry}

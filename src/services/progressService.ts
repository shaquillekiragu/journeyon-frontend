import type { MilestoneProgress } from '../Interfaces/MilestoneModel';
import { apiClient } from './axiosConfig';

/**
 * Fetches milestone progress for a specific user.
 * @throws {Error} if the response is not OK.
 * @returns {Promise<MilestoneProgress[]>} the milestone progress data array.
 */
async function getMilestones(userId: number
): Promise<MilestoneProgress[]> {
    const response = await apiClient.get( `user/get-milestones/${userId}` );
    return response.data;
}
export {getMilestones}

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
    console.log("API Response:", response.data);
    // Handle case where data might be wrapped in a data property
    return response.data.data || response.data || [];
}

/**
 * Updates milestone status for a specific user.
 * @param userId - The user ID
 * @param milestoneId - The milestone ID to update
 * @param status - The new status ("completed" or "in-progress")
 * @returns {Promise<void>} the response from the API
 */
async function updateMilestoneStatus(
    userId: number, 
    milestoneId: number, 
    status: "completed" | "in-progress"
): Promise<void> {
    const response = await apiClient.put(`progress/update-milestone-status`, {
        userId: userId,
        milestoneId: milestoneId,
        status: status
    });
    return response.data;
}

export {getMilestones, updateMilestoneStatus}

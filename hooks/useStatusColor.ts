/**
 * Custom hook to get status color classes for order statuses
 * @param status - The order status string
 * @returns Object containing text and dot color classes
 */
export const useStatusColor = (status: string) => {
    switch (status) {
        case 'In Progress':
            return { text: 'text-[#8A8CD9]', dot: 'bg-[#95A4FC]' };
        case 'Complete':
            return { text: 'text-[#4AA785]', dot: 'bg-[#A1E3CB]' };
        case 'Pending':
            return { text: 'text-[#59A8D4]', dot: 'bg-[#B1E3FF]' };
        case 'Approved':
            return { text: 'text-[#FFC555]', dot: 'bg-[#FFE999]' };
        case 'Rejected':
            return { text: 'text-[#1C1C1C66]', dot: 'bg-[#1C1C1C66]' };
        default:
            return { text: 'text-gray-500', dot: 'bg-gray-500' };
    }
};

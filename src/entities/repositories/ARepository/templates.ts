import { useUserStore } from '@/app/stores/user';
import * as RepositoryTypes from './types';

export const SecurityConfig = function (): RepositoryTypes.RepositoryConfig {
    const userStore = useUserStore();

    const token = userStore.getAuthToken;

    return { headers: { Authorization: `Bearer ${token}` } };
};

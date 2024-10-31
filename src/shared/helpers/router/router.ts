import { RoutersNames } from '@/app/router/routersNames.enum.d';
import { router as Router } from '@/app/router/router';

export const redirect = function (
    router: typeof Router,
    key: keyof typeof RoutersNames
) {
    router.push({ name: RoutersNames[key] });
};

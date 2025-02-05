import * as Types from '@/shared/types';

export abstract class AHandler {
    public KeyboardKeys?: string[];
    public abstract __handle(): void;
}

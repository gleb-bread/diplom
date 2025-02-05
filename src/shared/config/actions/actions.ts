import { AConfig } from '../AConfig';

export class Config extends AConfig {
    private _component: string;

    constructor(component: string) {
        super();

        this._component = component;
    }

    public get component() {
        return `${this._component}.vue`;
    }

    public toString(): string {
        return `component: ${this.component}`;
    }
}

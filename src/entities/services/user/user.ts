import { Service } from '../Service';
import * as Models from '@/entities/models';
import * as Repositories from '@/entities/repositories';
import type { Response } from '../Service/types';
import * as DTOs from '@/entities/DTOs';
import { Helper } from '@/shared/helpers';
import type { UnwrapRef } from 'vue';
import { Env } from '@/shared/env';
import * as ServiceTypes from '../Service/types';

export class User extends Service {
    constructor() {
        super();
    }

    public async addUser(user: Models.User | UnwrapRef<Models.User>) {
        const repository = new Repositories.Registration({
            payload: user.getDTO(),
        });

        const response = await repository.addUser();

        return new Promise<Response<Models.UserAuth>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const userDTO = response.response.data.data.user;
                    const projectDTO = response.response.data.data.project;
                    const pageDTO = response.response.data.data.page;

                    const user = DTOs.UserAuth.toModel(userDTO);
                    const project = DTOs.Project.toModel(projectDTO);
                    const page = DTOs.Page.toModel(pageDTO);

                    const token = user.token;

                    Helper.CookieAPI.setCookie(Env.Cookie.token, token, 14, {
                        path: '/',
                        sameSite: 'Strict',
                    });

                    Helper.CookieAPI.setCookie(
                        Env.Cookie.project,
                        String(project.id),
                        14,
                        {
                            path: '/',
                            sameSite: 'Strict',
                        }
                    );

                    Helper.CookieAPI.setCookie(
                        Env.Cookie.page,
                        String(page.id),
                        14,
                        {
                            path: '/',
                            sameSite: 'Strict',
                        }
                    );

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: user,
                    });
                },

                error: (response) => {
                    reject({
                        status: response.status,
                        result: response.result,
                        data: response,
                    });
                },
            });
        });
    }

    public async getUser() {
        const repository = new Repositories.User();

        const response = await repository.getUser();

        return new Promise<Response<Models.User>>((resolve, reject) => {
            this.validateRequest({
                response: response,

                success: async (response) => {
                    const userDTO = response.response.data.data;
                    const user = DTOs.User.toModel(userDTO);

                    resolve({
                        status: response.status,
                        result: response.result,
                        data: user,
                    });
                },

                error: (response) => {
                    reject({
                        status: response.status,
                        result: response.result,
                        data: response,
                    });
                },
            });
        });
    }

    public async getProjects() {
        const repository = new Repositories.User();

        const response = await repository.getProjects();

        return new Promise<Response<ServiceTypes.GenericList<Models.Project>>>(
            (resolve, reject) => {
                this.validateRequest({
                    response: response,

                    success: async (response) => {
                        const projectDTOs = response.response.data.data;
                        const projects = projectDTOs.map(DTOs.Project.toModel);

                        resolve({
                            status: response.status,
                            result: response.result,
                            data: {
                                entities: this.getCacheObject(projects, 'id'),
                                genericList: this.getIndexList(projects, 'id'),
                            },
                        });
                    },

                    error: (response) => {
                        reject({
                            status: response.status,
                            result: response.result,
                            data: response,
                        });
                    },
                });
            }
        );
    }
}

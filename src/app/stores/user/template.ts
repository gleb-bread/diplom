import * as Models from '@/entities/models';

export const newUser = () => new Models.User({
    'created_at': null,
    'delayed': 0,
    'email': '',
    'id': -1,
    'login': '',
    'name': null,
    'patronymic': null,
    'second_name': null,
    'updated_at': null,
    'password': '',
})
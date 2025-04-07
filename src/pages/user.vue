<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Хранилище данных
const url = ref('');
const method = ref('GET');
const headers = ref([{ key: '', value: '' }]);
const params = ref([{ key: '', value: '' }]);
const cookies = ref([{ key: '', value: '' }]);
const body = ref('');
const response = ref(null);
const loading = ref(false);
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('error');
const requestId = ref(null);
let pollingInterval = null;

// Доступные HTTP-методы
const httpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

// Вычисляемые свойства для валидации
const isValidUrl = computed(() => {
    try {
        new URL(url.value);
        return true;
    } catch {
        return false;
    }
});

// Отправка запроса
const sendRequest = async () => {
    if (!isValidUrl.value) {
        snackbarMessage.value = 'Пожалуйста, введите корректный URL';
        snackbarColor.value = 'error';
        snackbar.value = true;
        return;
    }

    loading.value = true;
    response.value = null;

    try {
        const requestData = {
            url: url.value,
            method: method.value,
            params: params.value.filter((p) => p.key && p.value),
            headers: headers.value.filter((h) => h.key && h.value),
            cookies: cookies.value.filter((c) => c.key && c.value),
            body: method.value !== 'GET' ? body.value : undefined,
        };

        const res = await fetch('http://127.0.0.1:8000/api/v1/api-requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:
                    'Bearer 12|owaaWFpCuOZmbsZGzsUWxBsKqHIReGj6DRUTrbnO08e3329f',
                Accept: 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        const data = await res.json();
        requestId.value = data.data.request_id;

        // Начинаем опрос статуса
        startPolling();
    } catch (error) {
        snackbarMessage.value = 'Ошибка при отправке запроса: ' + error.message;
        snackbarColor.value = 'error';
        snackbar.value = true;
    } finally {
        loading.value = false;
    }
};

// Проверка статуса запроса
const checkStatus = async () => {
    if (!requestId.value) return;

    try {
        const res = await fetch(
            `/api/v1/api-requests/${requestId.value}/status`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer 12|owaaWFpCuOZmbsZGzsUWxBsKqHIReGj6DRUTrbnO08e3329f',
                    Accept: 'application/json',
                },
            }
        );
        const data = await res.json();

        if (data.data.status === 'completed') {
            response.value = data.data.response;
            stopPolling();
        } else if (data.data.status === 'failed') {
            snackbarMessage.value = 'Запрос завершился с ошибкой';
            snackbarColor.value = 'error';
            snackbar.value = true;
            stopPolling();
        }
    } catch (error) {
        snackbarMessage.value = 'Ошибка при проверке статуса: ' + error.message;
        snackbarColor.value = 'error';
        snackbar.value = true;
        stopPolling();
    }
};

// Начать опрос
const startPolling = () => {
    pollingInterval = setInterval(checkStatus, 2000); // Проверяем каждые 2 секунды
};

// Остановить опрос
const stopPolling = () => {
    if (pollingInterval) {
        clearInterval(pollingInterval);
        pollingInterval = null;
    }
};

// Очистка при выходе из компонента
onUnmounted(() => {
    stopPolling();
});

// Добавление новых полей
const addHeader = () => headers.value.push({ key: '', value: '' });
const addParam = () => params.value.push({ key: '', value: '' });
const addCookie = () => cookies.value.push({ key: '', value: '' });

// Удаление полей
const removeHeader = (index: number) => headers.value.splice(index, 1);
const removeParam = (index: number) => params.value.splice(index, 1);
const removeCookie = (index: number) => cookies.value.splice(index, 1);
</script>

<template>
    <v-container fluid>
        <v-card elevation="2">
            <v-card-title>API Тестер</v-card-title>

            <!-- Форма запроса -->
            <v-card-text>
                <v-row>
                    <v-col cols="3">
                        <v-select
                            v-model="method"
                            :items="httpMethods"
                            label="Метод"
                            variant="outlined"
                        />
                    </v-col>
                    <v-col cols="9">
                        <v-text-field
                            v-model="url"
                            label="URL"
                            variant="outlined"
                            :rules="[
                                (v) => !!v || 'URL обязателен',
                                (v) => isValidUrl || 'Некорректный URL',
                            ]"
                        />
                    </v-col>
                </v-row>

                <!-- Параметры, Заголовки, Cookies -->
                <v-expansion-panels>
                    <v-expansion-panel title="Параметры">
                        <v-expansion-panel-text>
                            <div
                                v-for="(param, index) in params"
                                :key="index"
                                class="d-flex align-center mb-2"
                            >
                                <v-text-field
                                    v-model="param.key"
                                    label="Ключ"
                                    variant="outlined"
                                    class="mr-2"
                                />
                                <v-text-field
                                    v-model="param.value"
                                    label="Значение"
                                    variant="outlined"
                                    class="mr-2"
                                />
                                <v-btn icon @click="removeParam(index)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </div>
                            <v-btn color="primary" @click="addParam"
                                >Добавить параметр</v-btn
                            >
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="Заголовки">
                        <v-expansion-panel-text>
                            <div
                                v-for="(header, index) in headers"
                                :key="index"
                                class="d-flex align-center mb-2"
                            >
                                <v-text-field
                                    v-model="header.key"
                                    label="Ключ"
                                    variant="outlined"
                                    class="mr-2"
                                />
                                <v-text-field
                                    v-model="header.value"
                                    label="Значение"
                                    variant="outlined"
                                    class="mr-2"
                                />
                                <v-btn icon @click="removeHeader(index)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </div>
                            <v-btn color="primary" @click="addHeader"
                                >Добавить заголовок</v-btn
                            >
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel title="Cookies">
                        <v-expansion-panel-text>
                            <div
                                v-for="(cookie, index) in cookies"
                                :key="index"
                                class="d-flex align-center mb-2"
                            >
                                <v-text-field
                                    v-model="cookie.key"
                                    label="Ключ"
                                    variant="outlined"
                                    class="mr-2"
                                />
                                <v-text-field
                                    v-model="cookie.value"
                                    label="Значение"
                                    variant="outlined"
                                    class="mr-2"
                                />
                                <v-btn icon @click="removeCookie(index)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </div>
                            <v-btn color="primary" @click="addCookie"
                                >Добавить cookie</v-btn
                            >
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expansion-panel
                        title="Тело запроса"
                        v-if="method !== 'GET'"
                    >
                        <v-expansion-panel-text>
                            <v-textarea
                                v-model="body"
                                label="JSON тело"
                                variant="outlined"
                                placeholder='{"key": "value"}'
                            />
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <!-- Кнопка отправки -->
                <v-btn
                    color="primary"
                    class="mt-4"
                    @click="sendRequest"
                    :loading="loading"
                    :disabled="!isValidUrl"
                >
                    Отправить
                </v-btn>
            </v-card-text>
        </v-card>

        <!-- Ответ -->
        <v-card elevation="2" class="mt-4" v-if="response">
            <v-card-title>Ответ</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <strong>Статус:</strong> {{ response.status }}
                        {{ response.statusText || '' }}
                    </v-col>
                </v-row>
                <v-expansion-panels>
                    <v-expansion-panel title="Заголовки ответа">
                        <v-expansion-panel-text>
                            <pre>{{
                                JSON.stringify(response.headers, null, 2)
                            }}</pre>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel title="Cookies ответа">
                        <v-expansion-panel-text>
                            <pre>{{ response.cookies }}</pre>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel title="Тело ответа">
                        <v-expansion-panel-text>
                            <pre>{{ response.body }}</pre>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card-text>
        </v-card>

        <!-- Snackbar для уведомлений -->
        <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="3000">
            {{ snackbarMessage }}
            <template v-slot:actions>
                <v-btn color="white" variant="text" @click="snackbar = false">
                    Закрыть
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<style scoped>
pre {
    white-space: pre-wrap;
    word-break: break-all;
}
</style>

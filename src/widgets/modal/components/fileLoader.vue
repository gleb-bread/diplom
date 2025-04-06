<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Helper } from '@/shared/helpers';
import { useCloudStorageStore } from '@/app/stores/cloudStorage';

const cloudStorageStore = useCloudStorageStore();

// Реактивные переменные
const fileInput = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);

// Обработка выбора файлов через input
const handleFileSelect = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    processFiles(files);
};

// Обработка перетаскивания файлов
const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    isDragging.value = true;
};

const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    isDragging.value = false;
};

const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    isDragging.value = false;
    const files = event.dataTransfer?.files;
    processFiles(files);
};

const getFiles = computed(() => cloudStorageStore.getFiles);

// Общая функция обработки файлов
const processFiles = (files: FileList | null | undefined) => {
    if (files) {
        cloudStorageStore.addItemsToCloudFiles([...files]);
        if (fileInput.value) {
            fileInput.value.value = '';
        }
    }
};

// Удаление файла
const removeFile = (index: number) => {
    cloudStorageStore.removeItemToCloudFiles(index);
};

// Форматирование размера файла
const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
</script>

<template>
    <v-container class="px-0">
        <v-row>
            <v-col>
                <!-- Скрытый input -->
                <input
                    ref="fileInput"
                    type="file"
                    multiple
                    style="display: none"
                    @change="handleFileSelect"
                />

                <!-- Область для drag-and-drop -->
                <v-card
                    class="drop-zone"
                    :class="{ 'drag-over': isDragging }"
                    @dragover="handleDragOver"
                    @dragleave="handleDragLeave"
                    @click.stop="fileInput?.click()"
                    @drop="handleDrop"
                >
                    <v-card-text class="text-center py-8">
                        <v-icon size="48" class="mb-2">mdi-cloud-upload</v-icon>
                        <p class="text-h6">
                            Кликните или перенесите файл в область для
                            прикрепления
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Список файлов -->
        <v-row v-if="getFiles.length > 0" class="mt-4">
            <v-col>
                <v-card>
                    <v-card-title>Прикрепленные файлы</v-card-title>
                    <v-list>
                        <v-list-item
                            v-for="(file, index) in getFiles"
                            :key="file.size + file.name"
                            class="file-item"
                        >
                            <v-list-item-title>
                                {{ file.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ formatFileSize(file.size) }}
                            </v-list-item-subtitle>
                            <template #append>
                                <v-btn
                                    icon="mdi-delete"
                                    variant="text"
                                    color="error"
                                    @click="removeFile(index)"
                                />
                            </template>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>

        <!-- Сообщение при отсутствии файлов -->
        <v-row v-else class="mt-4">
            <v-col>
                <v-alert type="info" variant="outlined">
                    Нет прикрепленных файлов
                </v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.file-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.file-item:last-child {
    border-bottom: none;
}

.drop-zone {
    border: 2px dashed #ccc;
    transition: all 0.3s ease;
}

.drag-over {
    border-color: #1976d2;
    background-color: rgba(25, 118, 210, 0.1);
}
</style>

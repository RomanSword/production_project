export interface FileData {
    src?: string;
}

export interface FileSchema {
    isLoading: boolean;
    data: FileData;
    error?: string;
}

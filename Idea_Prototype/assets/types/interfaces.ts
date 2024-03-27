export interface Repository {
    id: number,
    parentRepositoryId: number,
    name: string,
}

export interface Idea {
    id: number,
    repositoryId: number,
    title: string,
    description?: string,
}
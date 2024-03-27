import AsyncStorage from "@react-native-async-storage/async-storage";
import { Idea, Repository } from "../types/interfaces";

export const initializeStorage = async () => {
    const repositories: Repository[] = [
        {
            id: 1,
            parentRepositoryId: 0,
            name: "Repository 1",
        },
        {
            id: 2,
            parentRepositoryId: 0,
            name: "Repository 2",
        },
        {
            id: 3,
            parentRepositoryId: 1,
            name: "Repository 3",
        },
    ];

    const ideas: Idea[] = [
        {
            id: 1,
            repositoryId: 1,
            title: "Idea 1",
        },
        {
            id: 2,
            repositoryId: 1,
            title: "Idea 2",
        },
        {
            id: 3,
            repositoryId: 2,
            title: "Idea 3",
        },
        {
            id: 4,
            repositoryId: 2,
            title: "Idea 4",
        },
        {
            id: 5,
            repositoryId: 0,
            title: "Idea 5",
        },
        {
            id: 6,
            repositoryId: 0,
            title: "Idea 6",
        },
        {
            id: 7,
            repositoryId: 3,
            title: "Idea 7",
            description: "Hey There\nI'm a description",
        },
    ];

    try {
        await AsyncStorage.setItem("repositories", JSON.stringify(repositories));
        await AsyncStorage.setItem("ideas", JSON.stringify(ideas));
    } catch (error) {}
};

export const getRepositories = async (): Promise<Repository[]> => {
    const repositoryData = await AsyncStorage.getItem("repositories") as string;
    if (repositoryData) {
        return JSON.parse(repositoryData) as Repository[];
    } else {
        initializeStorage();
        return [];
    }
};

export const getRepositoriesByParentId = async (parentId: number): Promise<Repository[]> => {
    const allRepos = await getRepositories();
    let repoWithId: Repository[] = [];
    allRepos.forEach((repo) => {
        if (repo.parentRepositoryId === parentId) {
            repoWithId.push(repo);
        }
    });

    return repoWithId;
};

export const addRepository = async (name: string, parentRepositoryId: number) => {
    const repositories = await getRepositories();

    let newId : number;
    if (repositories.length === 0) {
        newId = 1;
    } else {
        newId = repositories[repositories.length - 1].id + 1;
    }

    const newRepository: Repository = {
        id: newId,
        parentRepositoryId: parentRepositoryId,
        name: name,
    };

    repositories.push(newRepository);
    await AsyncStorage.setItem("repositories", JSON.stringify(repositories));
};

export const deleteRepository = async (repositoryId: number) => {
    const repositories = await getRepositories();
    const newRepositories = repositories.filter((repository) => repository.id !== repositoryId);
    await AsyncStorage.setItem("repositories", JSON.stringify(newRepositories));
};

export const getIdeas = async (): Promise<Idea[]> => {
    const ideaData = await AsyncStorage.getItem("ideas");
    if (ideaData) {
        return JSON.parse(ideaData);
    } else {
        initializeStorage();
        return [];
    }
};

export const addIdea = async (title: string, description: string, repositoryId: number) => {
    const ideas = await getIdeas();

    let newId;
    if (ideas.length === 0) {
        newId = 1;
    } else {
        newId = ideas[ideas.length - 1].id + 1;
    }

    const newIdea: Idea = {
        id: newId,
        title: title,
        repositoryId: repositoryId,
        description: description,
    };

    ideas.push(newIdea);
    await AsyncStorage.setItem("ideas", JSON.stringify(ideas));

    return getIdeas();
};

export const deleteIdea = async (ideaId: number) => {
    const ideas = await getIdeas();
    const newIdeas = ideas.filter((idea) => idea.id !== ideaId);
    await AsyncStorage.setItem("ideas", JSON.stringify(newIdeas));
};

export const clearData = async () =>{
    try {
        await AsyncStorage.clear()
    } catch(e) {
        // clear error
    }
    
    await initializeStorage();
}
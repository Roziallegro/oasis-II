import directory from "../data/directory";

export interface Directory{
    name: string;
    levels: [];
}

const useDirectory = () => ({data: directory});

export default useDirectory;
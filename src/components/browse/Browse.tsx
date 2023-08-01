import Heading from "./Heading";
import { useState } from "react";

import { Directory } from "../../hooks/useDirectory";

interface Filter {
  selectedDirectory: Directory | null;
  selectedLevel: string;
  selectedType: string;
  selectedCapacity: string;
}

const Browse = () => {
  const [filter, setFilter] = useState<Filter>({} as Filter);

  return (
    <>
      <Heading
        selectedDirectory={filter.selectedDirectory}
        onSelectDirectory={(selectedDirectory, selectedLevel) =>
          setFilter({ ...filter, selectedDirectory, selectedLevel })
        }
        selectedLevel={filter.selectedLevel}
        onSelectLevel={(selectedLevel) =>
          setFilter({ ...filter, selectedLevel })
        }
        selectedType={filter.selectedType}
        onSelectType={(selectedType) => setFilter({ ...filter, selectedType })}
        selectedCapacity={filter.selectedCapacity}
        onSelectCapacity={(selectedCapacity) =>
          setFilter({ ...filter, selectedCapacity })
        }
      />
    </>
  );
};

export default Browse;

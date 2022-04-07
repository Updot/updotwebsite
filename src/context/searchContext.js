import React, { useState, useCallback } from "react";

// Constants
import workData from "../components/work/work-data.json";
import insightData from "../components/insight/insightData.json";

const SearchContext = React.createContext();

const SearchProvider = (props) => {
  const { children } = props;
  const [caseState, setCaseState] = useState("");
  const [insightState, setInsightState] = useState("");

  // WORK
  const caseStudy = workData.filter((item) =>
    item.data.title.toLowerCase().includes(caseState.toLowerCase())
  );
  const handleCaseSearch = useCallback(
    (search) => {
      setCaseState(search);
    },
    [setCaseState]
  );

  // INSIGHT
  const insight = insightData.filter((item) =>
    item.data.title.toLowerCase().includes(insightState.toLowerCase())
  );
  const handleInsightSearch = useCallback(
    (search) => {
      setInsightState(search);
    },
    [setInsightState]
  );

  return (
    <SearchContext.Provider
      value={{
        handleCaseSearch,
        handleInsightSearch,
        caseState,
        insightState,
        caseStudy,
        insight,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;

export { SearchProvider };
